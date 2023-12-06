<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12">
					<h1 class="text-h1 text-center mb-5">Photographic Proof Of Realms</h1>
					<p class="text-body-1 text-center mb-3">Submit photos to a realm of your choosing.</p>
					<p class="text-body-1 text-center mb-10">If you are unsure which realm you've captured, please select "Uncertain" as the Realm Name and another Operator will categorize your submission.</p>
				</v-col>
			</v-row>
			<form>
				<v-row>
					<v-col cols="12">
						<CBToggleSwitch
							:name="`isCoverImage`"
							label="Use as Cover Image"
						/>
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
							cover
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
							:isLoading="isSubmitting"
							:disabled="isSubmitting"
							text="Cancel"/>
					</v-col>
					<v-col cols="6"
						xl="6">
						<BackButton
							@click="submitRealms"
							color="primary-darken-1"
							class="text-primary"
							:isLoading="isSubmitting"
							:disabled="isSubmitting"
							text="Submit"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12"
						md="8"
						class="mb-4 offset-md-3">
						<v-progress-linear
							v-if="isSubmitting"
							bg-color="primary"
							color="primary"
							rounded
							stream
							height="12px"
							v-model="uploadProgress"
							class="mb-3"
						/>
						<div v-if="uploadError"
							class="text-body-1 text-deep-orange-darken-4">
							{{ uploadError }}
						</div>
					</v-col>
				</v-row>
			</form>
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
		</v-container>
		<canvas
			class="d-none"
			id="compression-canvas"
			width="700"
			height="466"></canvas>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
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
const uploadError = ref(``)
const successfulUpload = ref(false)

const blankSubmission = {
	realm: ``,
	imageFile: [],
	lore: ``,
	altText: ``,
	isCoverImage: false
}

// methods
// trigger with file event, create temp reference URL from blob
const setImageSrc = async (e) => {
	imageUrlsArray.value[0] = URL.createObjectURL(e.target.files[0])
	const helperImg = new Image()
	helperImg.src = imageUrlsArray.value[0]

	helperImg.onload = () => {
		// window.URL.revokeObjectURL(blobURL)
		const [newWidth, newHeight] = calculateSize(helperImg, 700, 466)
		const canvas = document.getElementById(`compression-canvas`)
		const ctx = canvas.getContext(`2d`)
		ctx.drawImage(helperImg, 0, 0, newWidth, newHeight)
	}
}

const calculateSize = (img, maxWidth, maxHeight) => {
	let width = img.width
	let height = img.height

	// calculate the width and height, constraining the proportions
	if (width > height) {
		if (width > maxWidth) {
			height = Math.round((height * maxWidth) / width)
			width = maxWidth
		}
	} else {
		if (height > maxHeight) {
			width = Math.round((width * maxHeight) / height)
			height = maxHeight
		}
	}
	return [width, height]
}

// destructure useForm from vv4
const { values, handleSubmit, errors, resetForm, isSubmitting } = useForm({
	initialValues: blankSubmission,
	// validation schema
	validationSchema: yup.object().shape({
		realm: yup.string().required().label(`Realm Name`),
		imageFile: yup.array().required().label(`Image Upload`),
		altText: yup.string().nullable().max(150).label(`Image Alt Text`),
		lore: yup.string().max(120).required().label(`Image Lore`),
		isCoverImage: yup.boolean().label(`Use As Cover Image`)
	})
})

// submit function which uploads 
const submitRealms = handleSubmit(values => {
	// initalize a value for how many individual submissions exist
	uploadProgress.value = 0
	// iterate over form values
	const imageId = nanoid()
	const storageRef = firebaseRef(storage, `${values.realm}/${imageId}`)

	const canvasRef = document.getElementById(`compression-canvas`)

	canvasRef.toBlob((blob) => {
		let compressedImage = new File([blob], values.imageFile[0].name)
		const uploadTask = uploadBytesResumable(storageRef, compressedImage)

		uploadTask.on(`state_changed`,
			(snapshot) => {
				uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
			}, 
			(error) => {
				uploadError.value = error
			}, 
			() => {
				getDownloadURL(firebaseRef(storage, `${values.realm}/${imageId}`))
					.then((url) => {
						setDoc(doc(db, `realms`, values.realm, `photographs`, imageId), {
							realmId: values.realm,
							altText: values.altText ? values.altText : values.lore,
							lore: values.lore,
							submittedAt: serverTimestamp(),
							submittedBy: user.displayName,
							published: false,
							imageLink: url,
							useAsCoverImage: values.isCoverImage
						}).then(() => {
							resetForm({
								values: {
									realm: values.realm,
									imageFile: [],
									lore: ``,
									altText: ``,
									isCoverImage: false
								}
							})
							imageUrlsArray.value = []
						})
					})
				successfulUpload.value = true
			}
		)
	}, `image/webp`, 1)

	
})
</script>