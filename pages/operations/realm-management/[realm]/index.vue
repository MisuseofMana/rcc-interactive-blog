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
								@change="setSource($event, `realmSigil`)"
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
							@change="setSource($event, 'realmAudio')"
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
							:text="!meta.dirty ? `No Changes Made` :`Save Changes`"
							:disabled="isUploading || !meta.dirty"
							:realm-icons="['floppy']"
							@click="updateRealmData"
						/>
					</v-col>	
				</v-row>
			</v-card>
			<v-snackbar
				v-model="successfulUpload"
			>
				<p class="text-primary text-body-2">
					Upload Succeeded
				</p>

				<template v-slot:actions>
					<v-btn
						color="primary"
						variant="text"
						@click="successfulUpload = false"
					>
						Close
					</v-btn>
				</template>
			</v-snackbar>
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
import { useRealmData } from '~/composables/firebase/useRealmData'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

// eslint-disable-next-line no-undef
const route = useRoute()
const { realm } = useRealmData(route.params.realm)
const realmSnapshot = ref({})
const db = useFirestore()
const storage = getStorage()

const isUploading = ref(false)
const images = ref([])
const successfulUpload = ref(false)
const lockSigil = ref(false)
const lockAudio = ref(false)

// methods
const validationSchema = {
	title: `required|alphaAndSpace|min:5|max:20`,
	abbTitle: `requiredAbbreviation:title,15|alphaSpaceAndDot|max:12`,
	slug: `required|slug|min:3|max:20`,
	narrative: `required|narrativeString|max:150`,
	realmSigil: `required`,
	realmCode: `requiredIf:hasSemiotics`,
	iconNames: `required`,
	realmAudio: `required`,
}

// destructure useForm from vv4
const { values, handleSubmit, errors, setFieldValue, meta, resetForm} = useForm({
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
		if (newValue.sigilImageLink) {
			lockSigil.value = newValue.sigilImageLink || false
		}
		if (newValue.audioLink) {
			lockAudio.value = newValue.audioLink || false
		}
		const payloadValues = {
			...newValue,
			realmSigil: [new File([newValue.sigilImageLink], lockSigil.value ? `Read Only Image` : ``)],
			realmAudio: [new File([newValue.audioLink], lockAudio.value ? `Read Only File` : ``)]
		}
		resetForm({
			touched: false,
			values: payloadValues
		})
		realmSnapshot.value = payloadValues
	}
)

const setSource = async (e, inputName) => {
	setFieldValue(inputName, [e.target.files[0]])
	if(inputName === `realmSigil`) {
		images.value = [URL.createObjectURL(e.target.files[0])]
		lockSigil.value = false
	}
	if(inputName === `realmAudio`) {
		lockAudio.value = false
	}
}

// computeds
const computedRealmIcons = computed(() => {
	return values.iconNames?.split(`,`)
}) 

const realmNameTruncationLabel = computed(() => {
	return values.title?.length > 12 ? `Realm Name Truncation*` : `Realm Name Truncation`
})

const undoEdits = () => {
	resetForm({
		touched: false,
		values: realmSnapshot.value
	})
}

const updateRealmData = handleSubmit(async (values) => {
	if(isUploading.value || !meta.value.dirty) return
	isUploading.value = true

	const uploadingPromises = []

	const coercedFiles = [
		{ inputType: `sigil`, file: values.realmSigil[0], storageRef: `${realm.id}/sigil`},
		{ inputType: `audio`, file: values.realmAudio[0], storageRef: `${realm.id}/audio`}
	]
		
	coercedFiles.map((file) => {	
		const uploadPromise = new Promise((resolve, reject) => {
			if(file.inputType === `sigil` && lockSigil.value) {
				resolve({sigil: lockSigil.value})

			}
			else if(file.inputType === `audio` && lockAudio.value) {
				resolve({audio: lockAudio.value})
			}
			else {
				const storageRef = firebaseRef(storage, file.storageRef)
				const uploadTask = uploadBytesResumable(storageRef, file.file)
				uploadTask.on(`state_changed`,
					null,
					(error) => {
						reject(error)
						alert(error)
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref)
							.then((url) => {
								resolve({[file.inputType]: url})
							})
					}
				)	
			}
		})

		uploadingPromises.push(uploadPromise)
	})

	const files = await Promise.all(uploadingPromises)

	let payloadFiles = {}
	
	files.forEach(file => {
		payloadFiles = { ...payloadFiles, ...file }
	})

	const valuesAdjustedForPayload = {
		...values,
		sigilImageLink: payloadFiles.sigil,
		audioLink: payloadFiles.audio,
		lastUpdated: serverTimestamp(),
	}
	delete valuesAdjustedForPayload.realmSigil
	delete valuesAdjustedForPayload.realmAudio
	setDoc(doc(db, `realms`, realm.id), {
		...valuesAdjustedForPayload,
	}, { merge: true }).then(() => {
		successfulUpload.value = true
		isUploading.value = false
	})
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