<!-- 
TODO - Image Size Validataion
-->

<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12">
					<h1 class="text-h1 text-center mb-5">Submit Evidence Of Realms</h1>
					<p class="text-body-1 text-center mb-3">Submit one or multiple photos to a realm(s) of your choosing.</p>
					<p class="text-body-1 text-center mb-10">If you are unsure which realm you've captured, please select "Uncertain" as the Realm Name and another Operator will categorize your submission.</p>
				</v-col>
			</v-row>
			<form>
				<v-row>
					<v-col cols="12">
					</v-col>
					<v-col cols="12"
						md="5"
						class="mb-5 text-primary">
						<CBDropdownSelect
							class="mb-5"
							:errors="errors.realm"
							hint="Be sure you select the realm you wish to submit evidence of."
							:items="nameList"
							label="Realm Name"
							:name="`realm`"
						/>
						<CBFileInput
							class="mb-5"
							:errors="errors.imageFile"
							hint="Upload an image representing one of the existing realms."
							label="Image Upload"
							:name="`imageFile`"
							@change="setImageSrc($event)"
						/>
						<CBTextField
							class="mb-5"
							label="Image Alt Text"
							:name="`altText`"
							hint="The alternative text to be used by screen readers. If left blank, Lore will become the alt text. "
							:error-messages="errors.altText"
						/>
						<CBTextArea
							:name="`lore`"
							label="Image Lore"
							:errors="errors.lore"
						/>
					</v-col>	
					<v-col cols="12"
						md="7">
						<v-img
							:src="imageUrlsArray[0]"
							:id="`imagePreview`"
							class="realmImage"
							aspect-ratio="1.5"
							contain
							lazy-src="/images/mocks/placeholder-wide.jpg"
							alt="an image to submit documented from another realm">
						</v-img>
						<p class="text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"> {{ values.lore }}</p>
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
						xl="6">
						<BackButton
							:caution="true"
							variant="outlined"
							link-name="/operations/control"
							:isLoading="isUploadInProgress"
							text="Cancel"/>
					</v-col>
					<v-col cols="6"
						xl="6">
						<BackButton
							@click="submitRealms"
							color="primary-darken-1"
							class="text-primary"
							:isLoading="isUploadInProgress"
							text="Submit"/>
					</v-col>
				</v-row>
				<v-row v-if="isUploadInProgress">
					<v-col cols="12"
						md="6"
						class="mb-4 offset-md-3">
						<v-progress-linear
							bg-color="primary"
							color="primary"
							rounded
							stream
							height="12px"
							v-model="uploadProgress"
							class="mb-3"
						/>
						<div v-if="true"
							class="text-body-1 text-deep-orange-darken-4">
							{{ uploadError }}
						</div>
					</v-col>
				</v-row>
			</form>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { getStorage, ref as firebaseRef, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { useFirestore } from 'vuefire'
import { useRealmNames } from '~/composables/firebase/useRealmNames'

import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet(`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`, 15)

const { nameList } = useRealmNames()

// reference firestore
const db = useFirestore()
const storage = getStorage()

// eslint-disable-next-line no-undef
const user = await getCurrentUser()

const uploadProgress = ref(0)
const imageUrlsArray = ref([])
const isUploadInProgress = ref(false)
const uploadError = ref(``)

const blankSubmission = {
	realm: ``,
	imageFile: [],
	lore: ``,
	altText: ``,
}

// methods
// trigger with file event, create temp reference URL from blob
const setImageSrc = async (e) => {
	imageUrlsArray.value[0] = URL.createObjectURL(e.target.files[0])
}

// destructure useForm from vv4
const { values, handleSubmit, errors, resetForm } = useForm({
	initialValues: { 
		submissions: [blankSubmission]
	},
	// validation schema
	validationSchema: yup.object().shape({
		realm: yup.string().required().label(`Realm Name`),
		imageFile: yup.array().required().label(`Image Upload`),
		altText: yup.string().nullable().max(150).label(`Image Alt Text`),
		lore: yup.string().max(120).required().label(`Image Lore`)
	})
})

const findRealmName = (id) => {
	const result = nameList.value.find(obj => {
		return obj.value === id
	})
	return result.title
}

// submit function which uploads 
const submitRealms = handleSubmit(values => {
	if(isUploadInProgress.value === true) return
	// swap variable to disable submission while loading
	isUploadInProgress.value = true
	// initalize a value for how many individual submissions exist
	uploadProgress.value = 0

	// iterate over form values
	const imageId = nanoid()
	const storageRef = firebaseRef(storage, `${values.realm}/${imageId}`)
	
	const uploadTask = uploadBytesResumable(storageRef, values.imageFile[0])
	uploadTask.on(`state_changed`, 
		(snapshot) => {
			console.log(uploadProgress.value)
			uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
		}, 
		(error) => {
			uploadError.value = error
		}, 
		() => {
			getDownloadURL(firebaseRef(storage, `${values.realm}/${imageId}`))
				.then((url) => {
					setDoc(doc(db, `realms`, values.realm, `photographs`, imageId), {
						realm: values.realm,
						altText: values.altText,
						lore: values.lore,
						submittedAt: serverTimestamp(),
						submittedBy: user.displayName,
						realmName: findRealmName(values.realm),
						published: false,
						imageLink: url,
					}).then(() => {
						isUploadInProgress.value = false
						resetForm()
						imageUrlsArray.value = []
					})
				})
		}
	)
})
</script>