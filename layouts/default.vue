<template>
<v-app style="background: var(--v-background-base)">
	<v-main>
		<v-container class="my-5">
			<div class="text-h1 mb-5 primary--text">CRICKBURROW ARCHIVES</div>
			<div class="ma-2">
				<BackButton class="mr-2" text="Briefing" :realm-icons="['puzzle']" link-name="/briefing" />
				<BackButton class="mr-2" text="Realms" :realm-icons="['city-variant-outline']" link-name="/realms" />
				<BackButton text="Artifacts" :realm-icons="['diamond-stone']" link-name="/artifacts" />
			</div>
		</v-container>
		<Nuxt />
	</v-main>
	<v-container>
		<v-footer
			class="d-flex justify-end align-center pa-0"
			height="200"
			color="background"
		>
			<div class="primary--text text-subtitle mr-5">
				CRICKBURROW, &copy; 2021 
			</div>	
			<div class="mr-5">
				<v-icon color="primary">mdi-eye-circle</v-icon>
			</div>
			<div>
				<ExternalSiteButton text="SeanYager.com" link-name="https://www.seanyager.com" />
			</div>
		</v-footer>
	</v-container>
</v-app>
</template>

<script>
import BackButton from '@/components/backButton.vue'
import ExternalSiteButton from '@/components/externalSiteButton.vue'

export default {
	name: "DefaultLayout",
    components: {
        BackButton,
		ExternalSiteButton
    },
}
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