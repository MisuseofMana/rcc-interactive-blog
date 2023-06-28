<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="realm-editing">
		<h4 class="text-h4 mb-3">{{ route.params.realm }} Data</h4>
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
						:name="`narrative`"
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
							:name="`realmSigil`"
							@change="setImageSrc($event, idx)"
						/>	
						<v-img
							class="abberation mb-8"
							contain
							max-width="100px"
							:src="`/images/icons/${currentRealm.slug}.png`"
							alt="geometric shape"/>
					</div>
				</v-col>
				<v-col cols="12"
					md="6">
					<BackButton class="mr-2 mb-3"
						variant="outlined"
						text="Undo Edits"
						rounded
						:realm-icons="['undo']"
						@click="undoEdits"/>
				</v-col>	
				<v-col cols="12"
					md="6">
					<BackButton class="mr-2"
						rounded
						:caution="false"
						variant="elevated"
						:text="false ? `Cannot Modify` :`Save Changes`"
						:disabled="false"
						:realm-icons="['floppy']"
						@click="updateRealmData"
					/>
				</v-col>	
			</v-row>
		</v-card>
	</NuxtLayout>
</template>

<script setup>
// REMOVE BELOW
import { pages } from '~/data/realms.data.js'
import { onMounted, computed, ref } from 'vue'
import { useForm } from 'vee-validate'
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { getStorage, ref as firebaseRef, uploadBytes } from "firebase/storage"
import { useFirestore } from 'vuefire'
import { useSiteStore } from '~/store/useSiteStore.js'
// REMOVE
import { useClassifyRealm } from '~/composables/useClassifyRealm'
import { useRealmData } from '~/composables/firebase/useRealmData'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const siteStore = useSiteStore()

// eslint-disable-next-line no-undef
const route = useRoute()

const db = useFirestore()
const storage = getStorage()

// methods
const validationSchema = {
	title: `required|alphaAndSpace|min:5|max:20`,
	abbTitle: `requiredAbbreviation:title,15|alphaSpaceAndDot|max:12`,
	slug: `required|slug|min:3|max:20`,
	narrative: `required|narrativeString|max:120`,
	realmSigil: ``,
	realmCode: `requiredIf:hasSemiotics`,
	iconNames: ``,
}

// destructure useForm from vv4
const { values, handleSubmit, errors, setValues} = useForm({
	initialValues: {
		hasSemiotics: false,
		clearanceNeeded: false,
		acceptingSubmissions: false,
		title: ``,
		abbTitle: ``,
		narrative: ``,
		iconNames: ``,
		slug: ``,
		realmSigil: ``,
		realmCode: null,
	},
	validationSchema,
})

useRealmData((payload) => {
	setValues(payload)
})

const { classifiedRealms } = useClassifyRealm(pages)

const currentRealm = ref({})

onMounted(() => {
	currentRealm.value = classifiedRealms.value.find(object => object.slug === route.params.realm)
	currentRealm.value.documents.forEach(((document, index) => {
		currentRealm.value.documents[index] = {
			...document,
			isPublished: true,
		}
		images.value.push(document.filePath)
	}))
})

const images = ref([])

const computedRealmIcons = computed(() => {
	return values.iconNames?.split(`,`)
}) 

const realmNameTruncationLabel = computed(() => {
	return values.title?.length > 12 ? `Realm Name Truncation*` : `Realm Name Truncation`
})

const undoEdits = () => {
	setValues(siteStore.realmData[route.params.realm])
}

const updateRealmData = handleSubmit( values => {
	setDoc(doc(db, `realms`, values.slug), {
		...values,
		updatedAt: serverTimestamp(),
	}, { merge: true }).then(() => {

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