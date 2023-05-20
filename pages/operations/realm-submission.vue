<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-5">Photo Documentation</h1>
					<p class="text-body-1 text-center mb-3">Submit one or multiple photos to a realm of your choosing.</p>
					<p class="text-body-1 text-center mb-10">If you are unsure which realm you've captured, please select "Uncertain" as the Realm Name and another Operator will categorize your submission in your place.</p>
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
					md="6"
					class="mb-5 text-primary">
					<CBDropdownSelect
						class="mb-5"
						:errors="errors[`submissions[${idx}].realm`]"
						hint="Be sure you select the realm you wish to submit evidence of."
						:items="realmNames"
						label="Realm Name"
						:name="`submissions[${idx}].realm`"
					/>
					<CBFileInput
						class="mb-5"
						:errors="errors[`submissions[${idx}].imageUrl`]"
						hint="Upload an image representing one of the existing realms."
						:items="realmNames"
						label="Realm Name"
						:name="`submissions[${idx}].imageUrl`"
						@change="setImageSrc($event, idx)"
					/>
					<CBTextField
						class="mb-5"
						label="Image Alt Text"
						:name="`submissions[${idx}].altText`"
						hint="The alternative text to be used by screen readers. If left blank, Lore will become the alt text. "
						:error-messages="errors.altText"
					/>
					<CBTextField
						label="Image Name"
						:name="`submissions[${idx}].imageName`"
						hint="A name you want to give to the image you're uploading. If this field is left blank the file name will be generated."
						:error-messages="errors.imageName"
					/>
				</v-col>	
				<v-col cols="12" md="6">
					<v-img
						:src="imageUrlsArray[idx]"
						:id="`imagePreview${idx}`"
						class="realmImage"
						aspect-ratio="1.5"
						min-width="500px"
						contain
						lazy-src="/images/mocks/placeholder-wide.jpg"
						alt="an image to submit documented from another realm">
					</v-img>
					<p class="text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"> {{ values.submissions[idx].lore }}</p>
				</v-col>
				<v-col cols="12"
					xl="6">
					<CBTextArea
						:name="`submissions[${idx}].lore`"
						label="Image Lore"
						:errors="errors[`submissions[${idx}].lore`]"
					/>
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
				<v-col cols="12" class="mt-10">
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
						text="Cancel"/>
				</v-col>
				<v-col cols="6"
					xl="6"
					class="mb-15">
					<BackButton
						@click="submitRealms"
						color="primary-darken-1"
						class="text-primary"
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
import { writeBatch, query, getDocs, doc, collection, where, setDoc } from "firebase/firestore"
import { useFirestore, useCollection, useDocument } from 'vuefire'

const db = useFirestore()
const q = query(collection(db, `realms`), where(`takingSubmissions`, `==`, true))
// reference firestore
const storage = getStorage()

// data refs
const realmNames = ref([
	{ title: `Uncertain`, value: `uncertain`}
])
const imageUrlsArray = ref([])

const setImageSrc = async (e, index) => {
	imageUrlsArray.value[index] = URL.createObjectURL(e.target.files[0])
}

const querySnapshot = await getDocs(q)
querySnapshot.forEach((doc) => {
	realmNames.value.push({title: doc.data().title, value: doc.id})
})

// Get a new write batch
const batch = writeBatch(db)

const initalFormValues = {
	realm: null,
	imageUrl: null,
	lore: null,
	imageName: null,
	altText: null
}

const { values, handleSubmit, errors, meta } = useForm({
	initialValues: { 
		submissions: [
			initalFormValues,
		]
	},
	validationSchema: yup.object().shape({
		submissions: yup.array().of(
			yup.object().shape({
				realm: yup.string().required().label(`Realm Name`),
				imageUrl: yup.array().required().label(`Image Upload`),
				imageName: yup.string().label(`Image Name`),
				altText: yup.string().max(150).label(`Image Alt Text`),
				lore: yup.string().max(120).required().label(`Image Lore`)
			})
		)
	})
})
	
const { remove, push, fields } = useFieldArray(`submissions`)

const submitRealms = handleSubmit(values => {
	values.submissions.forEach((submission) => {
		// figure out how to submit to storage with auto id
		const storageRef = firebaseRef(storage, `${submission.realm}`)
		// sets a batch reference to the collection "submissions"
		const batchRef = doc(collection(db, `submissions`))
		// 
		uploadBytes(storageRef, values.submissions[0].imageUrl[0]).then((snapshot) => {
			console.log(snapshot)
			console.log(`Uploaded a blob or file!`)
		})
		batch.set(batchRef, {
			
		})
	})
})
</script>
