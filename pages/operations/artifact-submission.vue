<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
					<h1 class="text-h1 mb-5">Submit New Artifact</h1>
				</v-col>
				<v-col cols="12"
					sm="5"
					class="mb-5 d-flex align-center">
					<v-card
						variant="outlined"
						class="pa-5 mr-5">
						<p class="text-body-1 ml-10">Form N-RTFCT:C1</p>
						<p class="text-body-2 ml-10 mb-3">New Artifact - Clearance 1</p>
						<ol class="text-decoration-none">
							<li class="text-body-1 ml-10 mb-1">Use form N-RTFCT to submit a new artifact to the archives.</li>
							<li class="text-body-1 ml-10">Submitted artifacts will be approved by a Director at the DIS.</li>
						</ol>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12"
					class="mb-5 text-info">
					<p class="text-subtitle-1">Read N-RTFCT Submission Guidelines before using this form.</p>
					<p class="text-subtitle-1">Improper submissions will be rejected and potentially lead to forefiture of your clearance.</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="mb-5">
					<v-expansion-panels>
						<v-expansion-panel>
							<v-expansion-panel-title>
								N-RTFCT Submission Guidelines
							</v-expansion-panel-title>
							<v-expansion-panel-text>
								<v-list lines="two">
									<v-list-item 
										title="Briefing"
										subtitle="Artifacts are intended to be narrative aids for the realms. When submitting artifacts, they must be imagery taken from thrifted publications, vintage illustrations, or otherwise physical scans of historic media."
									>										
									</v-list-item>
									<v-list-item 
										title="Preservation"
										subtitle="The aim of archiving these thrifted or otherwise images is to preserve and repurpose old imagery that would have otherwise gone to waste."
									>										
									</v-list-item>
									<v-list-item 
										title="Requirements"
										subtitle="All submitted artifacts must be categorized and submitted to the appropriate realm. If you are uncertain which realm to submit to, select UNCERTAIN."
									>										
									</v-list-item>
									<v-list-item 
										title="Appearance"
										subtitle="Artifacts must be high quality scans, aim for 300dpi. Artifacts should be preferrably of illustrative imagery, and be submitted in black and white."
									>										
									</v-list-item>
								</v-list>
							</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
				</v-col>
			</v-row>
			<form>
				<v-row>
					<v-col cols="12"
						md="5"
						class="mb-5 text-primary">
						<CBDropdownSelect
							class="mb-5"
							:errors="errors.realm"
							hint="Select the realm you wish to submit to."
							:items="nameList"
							label="Submit To Which Realm?"
							:name="`realm`"
						/>
						<CBFileInput
							class="mb-5"
							:errors="errors.imageFile"
							hint="Upload an image representing one of the existing realms."
							label="Artifact Image Upload"
							:name="`imageFile`"
							@change="setImageSrc($event)"
						/>
						<CBTextField
							class="mb-5"
							label="Artifact Image Name"
							:name="`imageName`"
							hint="A name to display alongside the artifact."
							:error-messages="errors.imageName"
						/>
						<CBTextField
							class="mb-5"
							label="Artifact Image Alt Text"
							:name="`altText`"
							hint="The alternative text to be used by screen readers. If left blank, Artifact Lore will become the alt text. "
							:error-messages="errors.altText"
						/>
						<CBTextArea
							:name="`lore`"
							label="Artifact Lore"
							counter="200"
							:errors="errors.lore"
							hint="Should be musing information about the artifact. One or two short sentences or sentence fragments are appropriate."
						/>
					</v-col>	
					<v-col cols="12"
						md="7">
						<v-img
							:src="imageUrlsArray[0]"
							:id="`imagePreview`"
							class="realmImage"
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
			width="500"
			height="500"></canvas>
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

const isVertical = ref(false)

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
	const helperImg = new Image()
	helperImg.src = imageUrlsArray.value[0]

	helperImg.onload = () => {
		const [newWidth, newHeight] = calculateSize(helperImg, 700, 700)
		const canvas = document.getElementById(`compression-canvas`)
		canvas.width = helperImg.width
		canvas.height = helperImg.height
		const ctx = canvas.getContext(`2d`)
		ctx.drawImage(helperImg, 0, 0, newWidth, newHeight)
	}
}

const calculateSize = (img, maxWidth, maxHeight) => {
	let width = img.width
	let height = img.height

	// calculate the width and height, constraining the proportions
	if (width > height) {
		isVertical.value = false
		if (width > maxWidth) {
			height = Math.round((height * maxWidth) / width)
			width = maxWidth
		}
	} else {
		isVertical.value = true
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
		lore: yup.string().max(200).required().label(`Image Lore`),
		imageName: yup.string().label(`Image Name`)
	})
})

// submit function which uploads 
const submitRealms = handleSubmit(values => {
	// initalize a value for how many individual submissions exist
	uploadProgress.value = 0
	// iterate over form values
	const imageId = nanoid()
	const storageRef = firebaseRef(storage, `${values.realm}/artifacts/${imageId}`)

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
						setDoc(doc(db, `realms`, values.realm, `artifacts`, imageId), {
							realmId: values.realm,
							altText: values.altText ? values.altText : values.lore,
							lore: values.lore,
							submittedAt: serverTimestamp(),
							submittedBy: user.displayName,
							published: false,
							imageLink: url,
							title: values.imageName,
							isVertical: isVertical.value
						}).then(() => {
							resetForm({
								values: {
									realm: values.realm,
									imageFile: [],
									lore: ``,
									altText: ``,
									imageName: ``,
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