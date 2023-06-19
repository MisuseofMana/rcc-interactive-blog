<!-- TODO - Setup User Permissions -->

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
					<p v-if="user.displayName"
						class="text-body-1 text-center">Hello <span class="text-deep-orange-darken-4">{{ user.displayName }}.</span></p>
					<p class="text-subtitle-1 text-center">{{ musings[chosenMusing] }}</p>
					<h1 class="text-h1 text-center mb-3">Control Panel</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12"
					sm="6"
					md="6"
					lg="6"
					xl="6">
					<p class="text-primary text-body-1 mb-3">Operator Clearance Options</p>
					<ControlButton class="mb-3"
						text=">: Submit a Photo"
						:realm-icons="['camera']"
						link-name="/operations/photo-submission"/>
					<ControlButton class="mb-3"
						text=">: Artifact Submission"
						:realm-icons="['diamond-stone']"
						disabled/>
					<ControlButton text=">: Operator Settings"
						:realm-icons="['cog']"
						disabled/>
				</v-col>
				<v-col cols="12"
					sm="6"
					md="6"
					lg="6"
					xl="6">
					<p class="text-primary text-body-1 mb-3">Director Clearance Options</p>
					<ControlButton class="mb-3"
						text=">: Photo Approval"
						:realm-icons="['check-decagram-outline']"
						:disabled="!isAdmin"
						link-name="/operations/realm-approval"/>
					<ControlButton class="mb-3"
						text=">: Realm Management"
						:realm-icons="['home-edit']"
						:disabled="!isAdmin"
						link-name="/operations/realm-management"/>
					<ControlButton
						text=">: New Realm Proposal"
						:realm-icons="['earth']"
						:disabled="!isAdmin"
						link-name="/operations/realm-proposal"/>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { useRandomNumber } from '~/composables/useRandomNumber'

// eslint-disable-next-line no-undef
const user = await getCurrentUser()

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const musings = [
	`Stumble upon any new realms?`,
	`The realms seem calm today. What's in store?`,
	`Remember to submit to the appropriate realm.`,
	`You seem focused. Did you discover a new realm?`,
	`So glad to see you.`,
	`You are paying attention, aren't you?`,
	`What's next?`,
	`Instabilities detected today, be cautious in the realms.`,
]
const chosenMusing = useRandomNumber(musings.length)
const isAdmin = true
</script>

