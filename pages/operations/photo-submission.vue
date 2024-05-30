<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="sub-admin">
			<v-container class="my-5">
				<v-row>
					<v-col cols="12"
						sm="2"
						class="mb-5 d-flex align-center justify-center">
						<DisLogo/>
					</v-col>
					<v-col cols="12"
						sm="5"
						class="mb-5 d-flex align-center">
						<h1 class="text-h1 mb-5">Submit New Photo</h1>
					</v-col>
					<v-col cols="12"
						sm="5"
						class="mb-5 d-flex align-center">
						<v-card
							variant="outlined"
							class="pa-5 mr-5">
							<p class="text-body-1 ml-10">Form N-PHT:C1</p>
							<p class="text-body-2 ml-10 mb-3">New Photo - Clearance 1</p>
							<ol class="text-decoration-none">
								<li class="text-body-1 ml-10 mb-1">Use form N-PHT to submit a new photo to the archives.</li>
								<li class="text-body-1 ml-10">Submitted photos will be approved by a Director at the DIS.</li>
							</ol>
						</v-card>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12"
						class="mb-5 text-info">
						<p class="text-subtitle-1">Read N-PHT Submission Guidelines before using this form.</p>
						<p class="text-subtitle-1">Improper submissions will be rejected and potentially lead to forefiture of your clearance.</p>
					</v-col>
				</v-row>
				<v-row>
					<v-col class="mb-5">
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-title>
									N-PHT Submission Guidelines
								</v-expansion-panel-title>
								<v-expansion-panel-text>
									<v-list lines="two">
										<v-list-item 
											title="Briefing"
											subtitle="Realm photos are intended to be thematic representations of a realm and follow the rules below."
										>				
										</v-list-item>
										<ul class="px-8 text-subtitle-2">
											<li>Realm Photos should avoid depicting humans or animals unless narratively important to the Lore of the realm.</li>
											<ul class="ml-5">
												<li>If deemed necessary to realm Lore, human and animal depictions should be obfuscated in some way. The people or animals in question should be depicted in and unidentifiable way to protect an overall feeling of liminal space.</li>
											</ul>
											<li>Realm photos should depict the world first and foremost.</li>
											<li>Photos must be landscape orientation.</li>
										</ul>
										<v-list-item 
											title="Toggle Switches"
											subtitle="There are two toggle switches for this form, they are to be used for the following situations."
										>				
										</v-list-item>
										<ul class="px-8 text-subtitle-2">
											<li>"Use as Cover Image" should be toggled on if the image submitted should be displayed as the portal image on the /realms directory.</li>
											<li>"Image has Semiotics" should be toggled on if the image has been modified to contain a numeric semiotic. Denotes that this image will be used for the Operator Exam.</li>
										</ul>
									</v-list>
								</v-expansion-panel-text>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-col>
				</v-row>
				<form>
					<v-row>
						<v-col cols="3">
							<CBToggleSwitch
								:name="`isCoverImage`"
								label="Use as Cover Image"
							/>
						</v-col>  	
						<v-col cols="3">
							<CBToggleSwitch
								:name="`hasSemiotic`"
								label="Image Has Semiotic"
							/>
						</v-col>  
					</v-row>
					<v-row>	
						<v-col cols="12"
							md="5"
							class="mb-5 text-primary">
							<CBDropdownSelect
								class="mb-5"
								:errors="errors.realm"
								hint="Select the realm you wish to submit evidence of."
								:items="nameList"
								label="Submit To Which Realm?"
								:name="`realm`"
							/>
							<CBFileInput
								class="mb-5"
								:errors="errors.imageFile"
								hint="Upload an image representing one of the existing realms."
								label="Realm Image Upload"
								:name="`imageFile`"
								@change="setImageSrc($event)"
							/>
							<CBTextField
								class="mb-5"
								label="Realm Image Alt Text"
								:name="`altText`"
								hint="The alternative text to be used by screen readers. If left blank, Lore will become the alt text. "
								:error-messages="errors.altText"
							/>
							<CBTextArea
								:name="`lore`"
								label="Realm Image Lore"
								:errors="errors.lore"
								hint="Should be musing information about the realm. Two short sentences or sentence fragments are appropriate."
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
					<v-row class="mt-10">
						<v-col cols="6"
							xl="6">
							<BackButton
								warning
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
					timer
					timeout="1500"
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

			<CBDropdownSelect
				class="mb-5"
				hint="Which semiotic should be attached to this image?"
				:items="semioticsList"
				label="Which Semiotic?"
				:name="`whichSemiotic`"
				@update:modelValue="drawSemioticOnCanvas"
			/>

			<CBDropdownSelect
				class="mb-5"
				hint="Which render mode should be used?"
				:items="renderModes"
				label="Which Render Mode?"
				:name="`renderMode`"
				@update:modelValue="drawSemioticOnCanvas"
			/>

			<canvas
				id="compression-canvas"
				width="700"
				height="466"></canvas>
		</NuxtLayout>
	</div>
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
	isCoverImage: false,
	hasSemiotic: false,
}

// methods
const drawPhotoToCanvas = () => {
	const helperImg = new Image()
	helperImg.src = imageUrlsArray.value[0]

	helperImg.onload = () => {
		// window.URL.revokeObjectURL(blobURL)
		const [newWidth, newHeight] = calculateSize(helperImg, 700, 466)
		const canvas = document.getElementById(`compression-canvas`)
		const ctx = canvas.getContext(`2d`)
		ctx.globalCompositeOperation = 'normal'
		ctx.drawImage(helperImg, 0, 0, newWidth, newHeight)
	}
}

// trigger with file event, create temp reference URL from blob
const setImageSrc = async (e) => {
	imageUrlsArray.value[0] = URL.createObjectURL(e.target.files[0])
	drawPhotoToCanvas()
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
		isCoverImage: yup.boolean().label(`Use As Cover Image`),
		hasSemiotic: yup.boolean().label(`Image has Semiotic`)
	})
})

// submit function which uploads 
const submitRealms = handleSubmit(values => {
	// initalize a value for how many individual submissions exist
	uploadProgress.value = 0
	// iterate over form values
	const imageId = nanoid()
	const storageRef = firebaseRef(storage, `${values.realm}/photographs/${imageId}`)

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
				getDownloadURL(storageRef)
					.then((url) => {
						setDoc(doc(db, `realms`, values.realm, `photographs`, imageId), {
							realmId: values.realm,
							altText: values.altText ? values.altText : values.lore,
							lore: values.lore,
							submittedAt: serverTimestamp(),
							submittedBy: user.displayName,
							published: false,
							imageLink: url,
							useAsCoverImage: values.isCoverImage,
							hasSemiotic: values.hasSemiotic,
							order: null,
						}).then(() => {
							resetForm({
								values: {
									realm: values.realm,
									imageFile: [],
									lore: ``,
									altText: ``,
									isCoverImage: false,
									hasSemiotic: false,
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