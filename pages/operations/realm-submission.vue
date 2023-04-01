<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-10">Realm Submission</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12"
					xl="12"
					class="mb-10">
					<v-select
						label="Realm Name"
						:items="realmNames"
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
						prepend-icon="mdi-comment"
						name="input-7-1"
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
const realmNames = [
	`Silent Shores`,
	`Lost Colony`,
	`Fenced City`
]
</script>

