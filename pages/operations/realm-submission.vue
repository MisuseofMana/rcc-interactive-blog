<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-5">Existing Realm Submission</h1>
					<p class="text-body-1 text-center mb-3">Submit one or multiple photos to a realm of your choosing.</p>
					<p class="text-body-1 text-center mb-10">If you are unsure which realm you are submitting to, please select "Uncertain" as the Realm Name.</p>
				</v-col>
			</v-row>
			<v-row v-for="(field, idx) in fields"
				:key="field.key"
				:class="idx > 0 ? 'mt-10' : 'mt-0'">
				<v-col cols="12">
					<div class="text-subtitle-1">
						{{ field }}
					</div>
				</v-col>
				<v-col cols="12">
					<div class="text-subtitle-1 text-deep-orange-darken-4">
						{{ errors }}
					</div>
				</v-col>
				<v-col cols="12">
					<div class="text-subtitle-1 text-white">
						{{ meta }}
					</div>
				</v-col>
				<v-col cols="12">
					<h2 class="text-h4">
						Submission #{{ idx + 1 }}
					</h2>
				</v-col>
				<v-col cols="12"
					xl="12"
					class="mb-5 text-primary">
					<CBDropdownSelect 
						:errors="errors[`submissions[${idx}].realm`]"
						hint="Be sure you select the realm you wish to submit evidence of."
						:items="realmNames"
						label="Realm Name"
						:name="`submissions[${idx}].realm`"
					/>
				</v-col>	
				<v-col cols="12"
					xl="6">
					<CBFileInput
						:errors="errors[`submissions[${idx}].imageUrl`]"
						hint="Upload an image representing one of the existing realms."
						:items="realmNames"
						label="Realm Name"
						:name="`submissions[${idx}].imageUrl`"
					/>
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
import { useFieldArray, useForm } from 'vee-validate'
import * as yup from 'yup'

const blankSubmission = {
	realm: null,
	imageUrl: null,
	lore: null
}

const { handleSubmit, errors, meta } = useForm({
	initialValues: { 
		submissions: [
			blankSubmission,
		]
	},
	validationSchema: yup.object().shape({
		submissions: yup.array().of(
			yup.object().shape({
				realm: yup.string().required().label(`Realm Name`),
				imageUrl: yup.array().required().label(`Image Upload`),
				lore: yup.string().required().label(`Image Lore`)
			})
		)
	})
})

const { remove, push, fields } = useFieldArray(`submissions`)

const submitRealms = handleSubmit(values => {
	console.log(values)
})

const realmNames = [
	`Uncertain`,
	`Silent Shores`,
	`Lost Colony`,
	`Fenced City`,
]
</script>

