<template>
<v-app style="background: var(--v-background-base)">
	<v-container class="pa-10 pt-12 my-5" >
		<h1 class="text-body-1 primary--text" v-if="breakpointDebuggerOn && showDebug">
			<pre>{{ JSON.stringify($vuetify.breakpoint.name) }}</pre>
		</h1>

		<v-main>
			<h1 class="primary--text" :class="[smDownScreens ? 'text-h1 text-center' : 'text-h1' ]">CRICKBURROW ARCHIVES</h1>
			<div class="my-5">
				<BackButton :class="[smDownScreens ? 'mb-6' : 'mr-2']" text="Briefing" :realm-icons="['puzzle']" link-name="/briefing" />
				<BackButton :class="[smDownScreens ? 'mb-6' : 'mr-2']" text="Realms" :realm-icons="['city-variant-outline']" link-name="/realms" />
				<BackButton text="Artifacts" :realm-icons="['diamond-stone']" link-name="/artifacts" />
			</div>
			<Nuxt class="mt-8"/>
			<div class="mt-8">
				<BackButton :class="[smDownScreens ? 'mb-6' : 'mr-2']" text="Briefing" :realm-icons="['puzzle']" link-name="/briefing" />
				<BackButton :class="[smDownScreens ? 'mb-6' : 'mr-2']" text="Realms" :realm-icons="['city-variant-outline']" link-name="/realms" />
				<BackButton text="Artifacts" :realm-icons="['diamond-stone']" link-name="/artifacts" />
			</div>
		</v-main>

		<h1 class="text-h3 primary--text" v-if="breakpointDebuggerOn && showDebug">
			<div v-if="$vuetify.breakpoint.xs">XS</div>
			<div v-if="$vuetify.breakpoint.sm">SM</div>
			<div v-if="$vuetify.breakpoint.md">MD</div>
			<div v-if="$vuetify.breakpoint.lg">LG</div>
			<div v-if="$vuetify.breakpoint.xl">XL</div>
		</h1>
	
			<v-footer
				class="d-flex align-center pa-0"
				:class="[$vuetify.breakpoint.smAndDown ? 'justify-center flex-column' : 'justify-end']"
				height="200"
				color="background"
			>
				<div class="mr-5">
					<v-img contain width="100px" height="20px" :src="require(`@/assets/images/mocks/observe.png`)"
					alt="another message written in an odd alphabet"/>
				</div>
				<div class="primary--text text-subtitle-1 mr-5 mb-1">
					CRICKBURROW, &copy;2023 
				</div>	
				<div class="mr-5 mb-3">
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
import Vue from 'vue'
import BackButton from '@/components/backButton.vue'
import ExternalSiteButton from '@/components/externalSiteButton.vue'

export default {
	name: `DefaultLayout`,
	components: {
		BackButton,
		ExternalSiteButton
	},
	data() {
		return {
			isMounted: false,
			showDebug: true,
			breakpointDebuggerOn: Vue.config.devtools,
		}
	},
	mounted() {
		this.isMounted = true
	},
	computed: {
		smDownScreens() {
			return (this.isMounted && this.$vuetify.breakpoint.smAndDown)
		},
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