<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-5">Submit Evidence Of Realms</h1>
					<p class="text-body-1 text-center mb-3">Submit one or multiple photos to a realm(s) of your choosing.</p>
					<p class="text-body-1 text-center mb-10">If you are unsure which realm you've captured, please select "Uncertain" as the Realm Name and another Operator will categorize your submission.</p>
				</v-col>
			</v-row>
			<v-row v-for="(field, idx) in fields"
				:key="field.key"
				:class="idx > 0 ? 'mt-10' : 'mt-0'">
				<v-col cols="12">
					<h2 class="text-h4">
						Submission #{{ idx + 1 }}
					</h2>
				</v-col>
				<v-col cols="12"
					md="5"
					class="mb-5 text-primary">
					<CBDropdownSelect
						class="mb-5"
						:errors="errors[`submissions[${idx}].realm`]"
						hint="Be sure you select the realm you wish to submit evidence of."
						:items="siteStore.realmNames"
						label="Realm Name"
						:name="`submissions[${idx}].realm`"
					/>
					<CBFileInput
						class="mb-5"
						:errors="errors[`submissions[${idx}].imageFile`]"
						hint="Upload an image representing one of the existing realms."
						label="Image Upload"
						:name="`submissions[${idx}].imageFile`"
						@change="setImageSrc($event, idx)"
					/>
					<CBTextField
						class="mb-5"
						label="Image Alt Text"
						:name="`submissions[${idx}].altText`"
						hint="The alternative text to be used by screen readers. If left blank, Lore will become the alt text. "
						:error-messages="errors.altText"
					/>
					<CBTextArea
						:name="`submissions[${idx}].lore`"
						label="Image Lore"
						:errors="errors[`submissions[${idx}].lore`]"
					/>
				</v-col>	
				<v-col cols="12"
					md="7">
					<v-img
						:src="imageUrlsArray[idx]"
						:id="`imagePreview${idx}`"
						class="realmImage"
						aspect-ratio="1.5"
						contain
						lazy-src="/images/mocks/placeholder-wide.jpg"
						alt="an image to submit documented from another realm">
					</v-img>
					<p class="text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"> {{ values.submissions[idx].lore }}</p>
				</v-col>
				<v-col cols="12"
					md="6"
					class="offset-md-6"
					v-if="idx > 0">
					<v-btn @click="remove(idx)"
						width="100%"
						class="text-body-1"
						size="large"
						prepend-icon="mdi-minus"
						color="deep-orange-darken-4"
						variant="outlined"
						rounded>
						Remove Entry #{{ idx + 1 }}
					</v-btn>
				</v-col>
				<v-col cols="12"
					md="6"
					class="d-flex justify-end mb-15 offset-md-6"
					v-if="field.isLast">
					<v-btn @click="push(blankSubmission)"
						width="100%"
						class="text-body-1 text-primary"
						size="large"
						:color="idx <= 3 ? 'primary-darken-1' : 'deep-orange-darken-4'"
						:prepend-icon="idx <= 3 ? 'mdi-plus' : 'mdi-cancel'"
						rounded
						:disabled="idx >= 4">
						{{ idx <= 3 ? 'Add Another Entry' : 'Max Entries Reached'}}
					</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12"
					class="mt-10">
					<p class="text-body-1 text-center">Double check your work, Operator.</p>
					<p class="text-body-1 text-center">Improper submissions will be rejected and potentially lead to forefiture of your clearance.</p>
				</v-col>
			</v-row>
			<v-row class="mt-10">
				<v-col cols="6"
					xl="6"
					class="mb-15">
					<BackButton
						:caution="true"
						variant="outlined"
						link-name="/operations/control"
						:isLoading="isUploadInProgress"
						text="Cancel"/>
				</v-col>
				<v-col cols="6"
					xl="6"
					class="mb-15">
					<BackButton
						@click="submitRealms"
						color="primary-darken-1"
						class="text-primary"
						:isLoading="isUploadInProgress"
						text="Submit"/>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useFieldArray, useForm } from 'vee-validate'
import * as yup from 'yup'
import { getStorage, ref as firebaseRef, uploadBytes } from "firebase/storage"
import { writeBatch, doc } from "firebase/firestore"
import { useFirestore } from 'vuefire'
import { useSiteStore } from '~/store/useSiteStore.js'
import { useRealmNames } from '~/composables/firebase/useRealmNames'

import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`, 15)

useRealmNames()
const siteStore = useSiteStore()

// reference firestore
const db = useFirestore()

const storage = getStorage()

// eslint-disable-next-line no-undef
const user = await getCurrentUser()

const imageUrlsArray = ref([])
const isUploadInProgress = ref(false)

// methods
// trigger with file event, create temp reference URL from blob
const setImageSrc = async (e, index) => {
	imageUrlsArray.value[index] = URL.createObjectURL(e.target.files[0])
}

// Get a new write batch container to the firestore db
const batch = writeBatch(db)

// destructure useForm from vv4
const { values, handleSubmit, errors } = useForm({
	initialValues: { 
		submissions: [ 
			{
				realm: null,
				imageFile: null,
				lore: null,
				altText: null,
			}
		]
	},
	// validation schema
	validationSchema: yup.object().shape({
		submissions: yup.array().of(
			yup.object().shape({
				realm: yup.string().required().label(`Realm Name`),
				imageFile: yup.array().required().label(`Image Upload`),
				altText: yup.string().nullable().max(150).label(`Image Alt Text`),
				lore: yup.string().max(120).required().label(`Image Lore`)
			})
		)
	})
})

// setup submissions name as a form container for iterable form fields 
const { remove, push, fields } = useFieldArray(`submissions`)

// submit function which uploads 
const submitRealms = handleSubmit(values => {
	if(isUploadInProgress.value === true) return
	// swap variable to disable submission while loading
	isUploadInProgress.value = true
	// initalize a value for how many individual submissions exist
	let howManySubmissions = values.submissions.length

	// iterate over form values
	values.submissions.forEach((submission, index) => {
		// local data & BE reference
		// const for id & storage path location
		const imageId = nanoid()
		// create storage reference const to firebase storage (image hosting)
		const storageRef = firebaseRef(storage, `${submission.realm}/${imageId}`)

		// sets a batch reference to the collection "submissions" 
		// under a randomly generated id for firestore (data hosting)
		const batchRef = doc(db, `submissions`, imageId)
		
		// upload image to storage
		uploadBytes(storageRef, values.submissions[index].imageFile[0]).then(() => {
			// decrement counter
			howManySubmissions--

			// gate toggle of isUploadInProgress while howManySubmissions is longer than 
			if(howManySubmissions > 0) {
				return 
			}
			
			// reset button loading  
			isUploadInProgress.value = false
		})

		// add data to batch for uploading to firestore 
		batch.set(batchRef, {
			realm: submission.realm,
			submittedAt: new Date().getTime(),
			submittedBy: user.displayName,
			imageId,
			lore: submission.lore,
			altText: submission.altText,
		})
	})
	batch.commit()
	// TODO - Confirm success of batch upload and reset form
	// TODO - add success messaging and inform user review will occur soon.
})
</script>
<!-- TODO - Force particular file formats for imageUpload,  -->