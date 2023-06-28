<template>
	<NuxtLayout name="realm-editing">
		<h4 class="text-h4 mb-3 mt-15">Realm Photographs</h4>
		<v-card variant="outlined"
			:color="submission.hint ? `deep-orange-darken-4` : `primary-darken-1`"
			class="pa-15 text-primary mb-8"
			v-for="(submission, index) in currentRealm.documents"
			:key="submission.filePath+index">
			<v-row>
				<v-col cols="12"
					lg="5">
					<v-img
						class="realmImage noCursor"
						contain
						:src="`/images/${currentRealm.slug}/${submission.filePath}.jpg`"
						alt="geometric shape"/>
				</v-col>	
				<v-col cols="12"
					lg="7">
					<v-card color="primary-darken-3"
						class="mb-5 pa-3">
						<v-chip
							v-if="submission.isPublished"
							class="mr-2"
							color="primary"
							variant="elevated"
						>
							Published
						</v-chip>
						<v-chip
							v-if="submission.hint"
							color="yellow"
							variant="elevated"
							class="mr-2"
						>
							Newly Published
						</v-chip>
						<v-chip
							v-if="submission.hint"
							class="mr-2 "
							color="teal-accent-3"
							variant="elevated"
						>
							Has Hint
						</v-chip>
						<v-chip
							v-if="submission.hint"
							color="deep-orange-darken-4"
							variant="elevated"
							class="mr-2"
						>
							Cannot Be Changed
						</v-chip>
					</v-card>

					<v-file-input :multiple="false"
						class="primary text-primary"
						show-size
						label="Image Upload"
						prepend-icon="mdi-camera"></v-file-input>
					<v-textarea
						prepend-icon="mdi-comment"
						class="primary text-primary"
						variant="filled"
						label="Image Lore"
						counter="120"
						auto-grow
						:model-value="submission.copy"
					></v-textarea>
				</v-col>
				<v-col cols="12"
					lg="6"
					class="d-lg-flex">
					<BackButton class="mr-2"
						variant="outlined"
						text="Undo Edits"
						rounded
						:realm-icons="['undo']"
						@click="submitRealms"/>
					<BackButton class="mr-2 mb-3"
						rounded
						:caution="submission.hint"
						:variant="submission.hint ? `outlined` : `elevated`"
						:text="submission.hint ? `Cannot Modify` :`Save Changes`"
						:disabled="submission.hint"
						:realm-icons="['floppy']"/>
				</v-col>
			</v-row>
		</v-card>
	</NuxtLayout>
</template>

<script setup>
// REMOVE BELOW
import { pages } from '../../../realms.data'
import { onMounted, computed, ref } from 'vue'
import { useForm } from 'vee-validate'
import { setDoc, doc } from "firebase/firestore"
import { useFirestore } from 'vuefire'
// REMOVE
import { useClassifyRealm } from '~/composables/useClassifyRealm'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const db = useFirestore()

// methods
const validationSchema = {
	title: `required|alphaAndSpace|min:5|max:20`,
	abbTitle: `requiredAbbreviation:title,15|alphaSpaceAndDot|max:12`,
	slug: `required|slug|min:3|max:20`,
	narrative: `required|narrativeString|max:120`,
	realmCode: `requiredIf:hasSemiotics`
}

// destructure useForm from vv4
const { values, handleSubmit, errors } = useForm({
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

const { classifiedRealms } = useClassifyRealm(pages)

// eslint-disable-next-line no-undef
const route = useRoute()
const currentRealm = ref({})

onMounted(() => {
	currentRealm.value = classifiedRealms.value.find(object => object.slug === route.params.realm)
	currentRealm.value.iconNames.forEach(((icon) => {
		icons.value.push(icon)
	}))
	currentRealm.value.documents.forEach(((document, index) => {
		currentRealm.value.documents[index] = {
			...document,
			isPublished: true,
		}
		images.value.push(document.filePath)
	}))
})

const icons = ref([])
const images = ref([])

const computedRealmIcons = computed(() => {
	return values.iconNames.split(`, `)
}) 

const realmNameTruncationLabel = computed(() => {
	return values.title.length > 12 ? `Realm Name Truncation*` : `Realm Name Truncation`
})

const submitRealms = handleSubmit( values => {
	setDoc(doc(db, `realms`, values.slug), {
		...values,
		active: false,
	}).then(() => {

	})
})
</script>

<style lang="scss" scoped>

</style>