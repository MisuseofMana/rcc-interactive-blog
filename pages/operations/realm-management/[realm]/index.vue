<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div v-if="realm">
		<NuxtLayout name="realm-editing">
			<h4 class="text-h4 mb-3">{{ realm.title }} Data</h4>
			<v-card variant="outlined"
				color="primary-darken-1"
				class="pa-15 text-primary mb-15">
				<v-row>
					<v-col cols="12"
						md="12"
						class="mb-5 text-primary">
						<div class="d-flex align-center justify-center align-md-start">
							<CBToggleSwitch
								name="hasSemiotics"
								label="Has Semiotics"
							/>
							<CBToggleSwitch
								name="clearanceNeeded"
								label="Clearance Needed"
							/>
							<CBToggleSwitch
								name="takingSubmissions"
								label="Accepting Submissions"
							/>
						</div>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12"
						md="6"
						class="mb-5 text-primary">
						<CBTextField
							class="mb-5"
							name="title"
							:errors="errors[`title`]"
							hint="A proper noun case name for the realm."
							label="Realm Name*"
						/>
						<CBTextField
							class="mb-5"
							:name="`abbTitle`"
							:errors="errors[`abbTitle`]"
							hint="A truncation to use in place of longer realm names. e.g. Agg. Lagoon, Inhb. Realm"
							:label="realmNameTruncationLabel"
						/>
						<CBTextField
							class="mb-5"
							name="subtitle"
							:errors="errors[`subtitle`]"
							hint="An adjective then noun works well here, e.g. Bountiful Archeology "
							label="Realm Subtitle*"
						/>
						<v-sheet class="text-primary mb-2 d-flex align-center justify-start"
							height="30px">
							<v-icon v-for="(icon, index) in computedRealmIcons"
								size="25px"
								class="mr-2"
								:key="`icon${index}`"
								:icon="`mdi-${icon}`">
							</v-icon>
						</v-sheet>
						<CBTextField
							class="mb-5"
							name="iconNames"
							:errors="errors[`iconNames`]"
							hint="Comma separated values of Material Design Icon names. If the icons display above your input is valid."
							label="Realm Icons*"
						/>
						<CBTextField
							v-if="values.hasSemiotics"
							class="mb-5"
							:name="`realmCode`"
							:errors="errors[`realmCode`]"
							hint="If a realm has Semiotics it requires a 4 digit code comprised of 0 to 9, *, and # "
							label="Realm Code*"
						/>
					</v-col>
					<v-col cols="12"
						md="6"
						class="text-primary">
						<CBTextField
							class="mb-5"
							:name="`slug`"
							:errors="errors[`slug`]"
							hint="A hyphenated URL path, lowercase letters & hyphens only. e.g. silent-shores"
							label="Realm Slug*"
						/>
						<CBTextArea
							class="mb-5"
							name="narrative"
							label="Realm Narrative*"
							hint="Should be musing information about the realm. Two short sentences or sentence fragments are appropriate."
							:errors="errors[`narrative`]"
						/>
						<div class="d-flex">
							<CBFileInput
								class="mb-5 mr-4"
								:errors="errors[`realmSigil`]"
								hint="Upload an image representing one of the existing realms."
								label="Realm Sigil"
								name="realmSigil"
								@change="setImageSrc($event)"
							/>	
							<v-img
								class="abberation mb-8"
								contain
								max-width="100px"
								:src="images[0]"
								alt="geometric shape"/>
						</div>
						<CBFileInput
							class="mb-5"
							:errors="errors['realmAudio']"
							hint="Upload a looping audio file in MP3 format which will play when viewing the realm."
							label="Realm Audio"
							name="realmAudio"
							@change="setAudioSrc($event)"
						/>
					</v-col>
					<v-col cols="12"
						md="4"
						class="text-primary">
						<CBToggleSwitch
							name="isPublished"
							label="Is Published"
						/>
					</v-col>
					<v-col cols="12"
						md="4">
						<BackButton class="mr-2 mb-3"
							variant="outlined"
							text="Undo Edits"
							rounded
							:realm-icons="['undo']"
							:disabled="!meta.dirty || isUploading"
							:loading="isUploading"
							@click="undoEdits"/>
					</v-col>	
					<v-col cols="12"
						md="4">
						<BackButton class="mr-2"
							rounded
							:caution="false"
							variant="elevated"
							:text="false ? `Cannot Modify` :`Save Changes`"
							:disabled="isUploading"
							:realm-icons="['floppy']"
							@click="updateRealmData"
						/>
					</v-col>	
				</v-row>
			</v-card>
		</NuxtLayout>
	</div>
	<div v-else>
		LOADING...
	</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useForm } from 'vee-validate'
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { getStorage, ref as firebaseRef, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useFirestore } from 'vuefire'
import { useSiteStore } from '~/store/useSiteStore.js'
import { useRealmData } from '~/composables/firebase/useRealmData'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const siteStore = useSiteStore()

// eslint-disable-next-line no-undef
const route = useRoute()
const { realm } = useRealmData(route.params.realm)

const db = useFirestore()
const storage = getStorage()

const isUploading = ref(false)
const uploadProgress = ref(0)
const uploadError = ref(``)
const images = ref([])
const audio = ref([])

// methods
const validationSchema = {
	title: `required|alphaAndSpace|min:5|max:20`,
	abbTitle: `requiredAbbreviation:title,15|alphaSpaceAndDot|max:12`,
	slug: `required|slug|min:3|max:20`,
	narrative: `required|narrativeString|max:150`,
	realmSigil: ``,
	realmCode: `requiredIf:hasSemiotics`,
	iconNames: ``,
	realmAudio: ``,
}

// destructure useForm from vv4
const { values, handleSubmit, errors, setValues, setFieldValue, meta} = useForm({
	initialValues: {
		hasSemiotics: false,
		clearanceNeeded: false,
		acceptingSubmissions: false,
		title: ``,
		abbTitle: ``,
		narrative: ``,
		iconNames: ``,
		slug: ``,
		realmSigil: [],
		realmAudio: [],
		realmCode: null,
	},
	validationSchema,
})

watch(realm, 
	async (newValue) => {
		images.value = [newValue.sigilImageLink]
		newValue.realmSigil = [new File([newValue.sigilImageLink], `realm-sigil`)]
		setValues(newValue)
	}
)

const setImageSrc = async (e) => {
	setFieldValue(`realmSigil`, [e.target.files[0]])
	images.value = [URL.createObjectURL(e.target.files[0])]
}

const setAudioSrc = async (e) => {
	setFieldValue(`realmAudio`, [e.target.files[0]])
	images.value = [URL.createObjectURL(e.target.files[0])]
}

// computeds
const computedRealmIcons = computed(() => {
	return values.iconNames?.split(`,`)
}) 

const realmNameTruncationLabel = computed(() => {
	return values.title?.length > 12 ? `Realm Name Truncation*` : `Realm Name Truncation`
})

const undoEdits = () => {
	setValues(siteStore.realmData[route.params.realm])
}

const updateRealmData = handleSubmit(values => {
	if(isUploading.value) return
	isUploading.value = true
	uploadProgress.value = 0
	
	const storageRef = firebaseRef(storage, `${realm.id}/sigil`)
	const sigilUploadTask = uploadBytesResumable(storageRef, values.realmSigil[0])
	sigilUploadTask.on(`state_changed`,
		(snapshot) => {
			uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
		},
		(error) => {
			uploadError.value = error
		},
		() => {
			getDownloadURL(firebaseRef(storage, `${realm.id}/sigil`))
				.then((url) => {
					const valuesAdjustedForPayload = {
						...values
					}
					delete valuesAdjustedForPayload.realmSigil
					setDoc(doc(db, `realms`, realm.id), {
						...valuesAdjustedForPayload,
						sigilImageLink: url,
						lastUpdated: serverTimestamp(),
						
					}, { merge: true }).then(() => {
						isUploading.value = false
					})
				})
		}
	)
})
</script>

<style scoped>
.noCursor {
	cursor: default;
}
.minHeight {
	min-height: 150px;
}
</style>