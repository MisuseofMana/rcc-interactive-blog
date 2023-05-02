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
					<p class="text-body-1 text-center">Hello <span class="text-deep-orange-darken-4">{{ user.displayName }}.</span></p>
					<p class="text-subtitle-1 text-center mb-10">{{ musings[chosenMusing] }}</p>
					<h1 class="text-h1 text-center mb-3">Control Panel</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12"
					sm="8"
					md="6"
					lg="4"
					xl="4"
					class="offset-sm-2 offset-md-3 offset-lg-4">
					{{ realms }}
					<p class="text-primary text-body-1 mb-3">Operator Clearance</p>
					<BackButton class="mb-15"
						text="/Submit a Photo"
						:realm-icons="['camera']"
						link-name="/operations/realm-submission"/>
					
					<p class="text-primary text-body-1 mb-3">Classified Clearance</p>
					<BackButton class="mb-3"
						text="/Realm Approval"
						:realm-icons="['map-search-outline']"
						:disabled="!isAdmin"
						link-name="/operations/realm-approval"/>
					<BackButton class="mb-15"
						text="/Realm Management"
						:realm-icons="['pencil']"
						:disabled="!isAdmin"
						link-name="/operations/realm-management"/>

					<p class="text-body-1 mb-3 mt-15 text-primary"> Coming Soon...</p>
					<BackButton class="mb-3"
						text="/New Realm Proposal"
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
import { onMounted } from 'vue'
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

// eslint-disable-next-line no-undef
const user = await getCurrentUser()
const db = useFirestore()

const realms = useCollection(collection(db, `realms`))

onMounted(() => {
	realms.value = useCollection(collection(db, `realms`))
})

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
]
const chosenMusing = useRandomNumber(musings.length)
const isAdmin = true
</script>

