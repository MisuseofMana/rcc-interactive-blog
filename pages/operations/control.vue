<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					sm="8"
					md="6"
					lg="6"
					xl="6"
					class="offset-sm-2 offset-md-3">
					<p class="text-body-1 text-center">Hello <span class="text-white">Operator Name.</span></p>
					<h1 class="text-h1 text-center mb-6">Control Panel</h1>
					<p class="text-subtitle-1 text-center mb-10">{{ musings[chosenMusing] }}</p>
					
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12"
					sm="8"
					md="6"
					lg="4"
					xl="4"
					class="offset-sm-2 offset-md-3 offset-lg-4">
					<BackButton class="mb-3"
						text="/Existing Realm Submission"
						:realm-icons="['earth']"
						link-name="/operations/realm-submission"/>
					<BackButton class="mb-15"
						text="/Realm Submission Approval"
						:realm-icons="['map-search-outline']"
						:disabled="!isAdmin"
						link-name="/operations/realm-approval"/>

					<p class="text-body-1 mb-5 text-center text-primary"> Coming soon...</p>
					<BackButton class="mb-3"
						text="/New Realm Submission"
						:realm-icons="['earth']"
						disabled/>
					<BackButton class="mb-3"
						text="/Artifact Submission"
						:realm-icons="['diamond-stone']"
						disabled/>
					<BackButton text="/Operator Settings"
						:realm-icons="['cog']"
						disabled/>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { useRandomNumber } from '~/composables/useRandomNumber'
const musings = [
	`Stumble upon any new realms?`,
	`The realms seem calm today. What's in store?`,
	`Remember to submit to the appropriate realm.`,
	`You seem focused. Did you discover a new realm?`,
	`Hello there, glad to see you.`,
]
const chosenMusing = useRandomNumber(musings.length)
const isAdmin = true
</script>

