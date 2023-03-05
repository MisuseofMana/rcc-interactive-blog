<template>
	<v-app>
		<v-container>
		<v-main class="text-primary mb-8">
				<h1 :class="smAndDown ? 'text-center text-h2' : 'text-h1'">CRICKBURROW ARCHIVES</h1>
				<div class="my-2" :class="[smAndDown ? 'd-flex flex-column' : '']">
					<BackButton class="mb-2 mr-md-3 mb-md-0"  text="Briefing" :realm-icons="['puzzle']" link-name="/briefing" />
					<BackButton class="mb-2 mr-md-3 mb-md-0" :class="[smAndDown ? '' : 'mr-2']" text="Realms" :realm-icons="['city-variant-outline']" link-name="/realms" />
					<BackButton text="Artifacts" :realm-icons="['diamond-stone']" link-name="/artifacts" />
				</div>
				<slot class="mt-8"/>
				<div class="mt-8" :class="[smAndDown ? 'd-flex flex-column' : '']">
					<BackButton class="mb-2 mr-md-3 mb-md-0"  text="Briefing" :realm-icons="['puzzle']" link-name="/briefing" />
					<BackButton class="mb-2 mr-md-3 mb-md-0" :class="[smAndDown ? '' : 'mr-2']" text="Realms" :realm-icons="['city-variant-outline']" link-name="/realms" />
					<BackButton text="Artifacts" :realm-icons="['diamond-stone']" link-name="/artifacts" />
				</div>
			</v-main>
			
			<v-footer
			class="d-flex align-center pa-0 mb-5"
			:class="[smAndDown ? 'justify-center flex-column' : 'justify-end']"
			height="200"
			color="background"
			>
			<div class="text-primary text-body-1 mr-0 mr-md-2 mb-3 mb-md-0">
				CRICKBURROW, &copy;2023 <v-icon size="small" color="primary">mdi-eye-circle</v-icon>
			</div>
			<div class="mr-0 mr-md-2 mb-3 mb-md-0">
				<ExternalSiteButton text="SeanYager.com" link-name="https://www.seanyager.com" />
			</div>
			<div class="mb-3 mb-md-0">
				<v-img contain width="100px" height="20px" src="/images/mocks/observe.png"
				alt="another message written in an odd alphabet"/>
			</div>
		</v-footer>
		<v-snackbar
			v-model="showDebug"
			class="text-primary"
			variant="flat"
			location="top right"
			color="primary"
			max-width="50px"
			timeout="-1"
			>
			{{ name }}
		</v-snackbar>
	</v-container>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown, mdAndUp, name } = useDisplay()
const showDebug = true
</script>


<style scoped>
v-app {
	overflow:hidden;
	max-width:100vw;
	max-height:100vh;
	margin:0;
	padding:0;
}
</style>