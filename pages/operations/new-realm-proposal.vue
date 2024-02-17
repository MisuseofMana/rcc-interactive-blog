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
					<h1 class="text-h1 mb-5">Submit a New Realm</h1>
				</v-col>
				<v-col cols="12"
					sm="5"
					class="mb-5 d-flex align-center">
					<v-card
						variant="outlined"
						class="pa-5 mr-5">
						<p class="text-body-1 ml-10">Form N-RLM:C1</p>
						<p class="text-body-2 ml-10 mb-3">New Realm - Clearance 1</p>
						<ol class="text-decoration-none">
							<li class="text-body-1 ml-10 mb-1">Use form N-RLM to submit a new realm to the archives.</li>
							<li class="text-body-1 ml-10">Submitted realms will be approved by a Director at the DIS.</li>
						</ol>
					</v-card>
				</v-col>
			</v-row>
			<form>
				<v-row>
					<v-col cols="12"
						class="mb-10">
						<!-- After Submission Options -->
						<!-- Icons 1 through 3 - must be mdi icons (iconNames) array -->
						<!-- Realm Sigil - Image Submission (realmSigil) -->
						<p class="text-body-1 mb-1">Toggle Options</p>
						<p class="text-body-2">Toggle "Has Semiotics" if you'd like the realm to be used in the Operator exam.</p>
						<p class="text-body-2">Toggle "Accepting Submissions" if the realm should allow other Operators to submit imagery.</p>
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
							name="subtitle"
							:errors="errors[`subtitle`]"
							hint="An adjective then noun works well here, e.g. Bountiful Archeology "
							label="Realm Subtitle*"
						/>
						<CBTextField
							v-if="values.hasSemiotics"
							:name="`realmCode`"
							:errors="errors[`realmCode`]"
							hint="If a realm has Semiotics it requires a 4 digit code comprised of 0 to 9, *, and # "
							label="Realm Code*"
						/>
					</v-col>
					<v-col cols="12"
						md="6">
						<CBTextField
							class="mb-5"
							:name="`slug`"
							:errors="errors[`slug`]"
							hint="A hyphenated URL path, lowercase letters & hyphens only. e.g. silent-shores"
							label="Realm Slug*"
						/>
						<CBTextArea
							:name="`narrative`"
							label="Realm Narrative*"
							hint="Should be musing information about the realm. Two short sentences or sentence fragments are appropriate."
							:errors="errors[`narrative`]"
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<div class="d-flex align-center align-md-start">
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
				<v-row class="mt-5">
					<v-col cols="6"
						xl="6"
						class="mb-1">
						<BackButton
							caution
							variant="outlined"
							link-name="/operations/control"
							:disabled="isSubmitting"
							text="Cancel"/>
					</v-col>
					<v-col cols="6"
						xl="6"
						class="mb-1">
						<BackButton
							@click="submitRealms"
							color="primary-darken-1"
							class="text-primary"
							:disabled="isSubmitting"
							text="Submit"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12"
						class="mb-4">
						<div class="d-flex align-end justify-end">
							<v-progress-circular
								v-if="isSubmitting"
								size="50"
								width="6"
								bg-color="primary-darken-1"
								color="primary"
								indeterminate
								class="mb-3"
							/>
						</div>
						<div v-if="uploadError"
							class="text-body-1 text-right text-deep-orange-darken-4">
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
	</NuxtLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useForm } from 'vee-validate'
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { useFirestore } from 'vuefire'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

// eslint-disable-next-line no-undef
const user = await getCurrentUser()

// reference firestore
const db = useFirestore()

const uploadError = ref(``)
const successfulUpload = ref(false)

// methods
const validationSchema = {
	title: `required|alphaAndSpace|min:5|max:20`,
	abbTitle: `requiredAbbreviation:title,15|alphaSpaceAndDot|max:12`,
	slug: `required|slug|min:3|max:20`,
	narrative: `required|narrativeString|max:150`,
	realmCode: `requiredIf:hasSemiotics`
}

// destructure useForm from vv4
const { values, handleSubmit, errors, isSubmitting, resetForm } = useForm({
	initialValues: {
		hasSemiotics: false,
		clearanceNeeded: false,
		takingSubmissions: false,
		title: ``,
		abbTitle: ``,
		narrative: ``,
		slug: ``,
	},
	validationSchema,
})

const realmNameTruncationLabel = computed(() => {
	return values.title.length > 12 ? `Realm Name Truncation*` : `Realm Name Truncation`
})

const submitRealms = handleSubmit( values => {

	setDoc(doc(db, `realms`, values.slug), {
		...values,
		iconNames: ``,
		active: false,
		submittedBy: user.displayName,
		lastUpdated: serverTimestamp()
	}).then(() => {
		successfulUpload.value = true
		resetForm()
	})
		.catch((error) => {
			uploadError.value = error
		})
})
</script>