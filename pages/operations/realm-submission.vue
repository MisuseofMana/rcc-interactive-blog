<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-5">Realm Submission</h1>
					<p class="text-body-1 text-center mb-3">Submit one or multiple photos to a realm of your choosing.</p>
					<p class="text-body-1 text-center mb-10">If you are unsure which realm you are submitting to, please select "Uncertain" as the Realm Name.</p>
				</v-col>
			</v-row>
			<v-row v-for="(field, idx) in fields" :key="field.key">
				<v-col cols="12"
					xl="12"
					class="mb-10">
					<v-select
						label="Realm Name"
						:name="`submissions[${idx}]`"
						:items="realmNames"
						:error-messages="errors.TargetRealm"
						v-model="TargetRealm.value.value"
						hint="Be sure you select the realm you wish to submit evidence of."
					></v-select>
				</v-col>	
				<v-col cols="12"
					xl="6">
					<v-file-input label="Image Upload"
						prepend-icon="mdi-camera"></v-file-input>
				</v-col>
				<v-col cols="12"
					xl="6">
					<v-textarea
						class="text-primary primary"
						prepend-icon="mdi-comment"
						variant="filled"
						label="Image Lore"
						counter="120"
						auto-grow
						model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
					></v-textarea>
				</v-col>
				<v-col cols="12"
					class="d-flex justify-end mb-15">
					<v-btn class="text-primary"
						color="primary-darken-1"
						rounded>
						+ Add another submission
					</v-btn>
				</v-col>
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
						color="primary-darken-1"
						class="text-primary"
						text="Submit"/>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFieldArray, useForm } from 'vee-validate'

const blankSubmission = {
	image: '',
	
}
const { remove, push, fields } = useFieldArray('submissions');

const { handleSubmit, errors } = useForm({
	initialValues: {
    	realms: [
			{ id: 1, url: 'https://github.com/logaretm' }
		],
  	},
	validationSchema: {
		Username: {
			required: [true, 'Username'],
			alpha: true,
			min: 5,
			max: 20,
		},
		Password: {
			required: [true, 'Password'],
			min: 9,
			max: 20,
		},
	},
})

const submitRealms = handleSubmit(values => {
	console.log(values)
})
const realmNames = [
	`Silent Shores`,
	`Lost Colony`,
	`Fenced City`
]
</script>

