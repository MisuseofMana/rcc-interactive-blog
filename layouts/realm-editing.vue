<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app>
		<v-container>
			<v-row>
				<v-col cols="12"
					sm="6"
					md="4"
					xl="4">
					<BackButton
						text="Return to Control Panel"
						front-icon="eye-settings"
						link-name="/operations/control" />
				</v-col>
			</v-row>
			<v-row class="mb-10 mt-10">
				<v-col cols="12"
					sm="7"
					md="10"
					class="mb-2">
					<div>
						<h2 class="text-h2 text-deep-orange-darken-4 ">CAUTION: CONSEQUENCES</h2>
						<h3 class="text-h3 text-deep-orange-darken-4 mb-10">You are editing {{ siteStore.realmData[route.params.realm]?.title ?? `...` }}</h3>
						<p class="text-body-1 text-deep-orange-darken-4 mb-15">Changes to the text are permenant. Image ommission is reversible, image deletion is not.</p>
						<div class="d-flex justify-space-between align-center ">
							<p class="text-body-1 text-primary">Realm last modified {{ sinceUpdated }}</p>
						</div>
					</div>
				</v-col>
			</v-row>

			<v-row class="mb-8">
				<v-col cols="12"
					md="4">
					<ControlButton class="mb-3"
						text=">: Data"
						:realm-icons="['clipboard']"
						:link-name="`/operations/realm-management/${route.params.realm}`"/>
				</v-col>
				<v-col cols="12"
					md="4">
					<ControlButton class="mb-3"
						text=">: Photographs"
						:realm-icons="['camera']"
						:link-name="`/operations/realm-management/${route.params.realm}/photographs`"/>
				</v-col>
				<v-col cols="12"
					md="4">
					<ControlButton class="mb-3"
						text="X: Artifacts"
						:realm-icons="['diamond']"
						:disabled="true"
						link-name="/"/>
				</v-col>
			</v-row>
						
			<v-main class="text-primary">
				<slot class="mt-8"></slot>
			</v-main>
						
			
			<v-footer
				class="d-flex align-center pa-0 mt-15 mb-5"
				:class="smAndDown ? 'justify-center flex-column' : 'justify-end'"
				color="background"
			>
				<div class="text-primary text-body-1 mr-0 mr-md-5 mb-3 mb-md-0">
					CRICKBURROW, &copy;2023 
				</div>
			</v-footer>
		</v-container>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { computed } from 'vue'
import { usePageAudio } from '~/composables/usePageAudio'
import { useSiteStore } from '~/store/useSiteStore.js'

const siteStore = useSiteStore()
usePageAudio()

// eslint-disable-next-line no-undef
const route = useRoute()

const sinceUpdated = computed(() => {
	// Funky code
	const sinceUpdate = Date(siteStore.realmData[route.params.realm]?.updatedAt) ?? null
	if ( sinceUpdate ) {
		return sinceUpdate
	}
	return `...`
})

const { smAndDown, name } = useDisplay()
const showDebug = false
</script>


<style scoped>
v-app {
	overflow:hidden;
	max-width:100vw;
	max-height:100vh;
	margin:0;
	padding:0;
}

.blur-enter-active,
.blur-leave-active {
  transition: all 200ms;
}
.blur-enter-from,
.blur-leave-to {
  opacity: .1;
  filter: blur(.8rem);
}
</style>