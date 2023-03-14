<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app full-height="">
		<v-no-ssr>
			<!-- <v-toolbar color="primary-darken-1">
			<v-btn icon>
				<v-icon color="primary">mdi-console</v-icon>
			</v-btn>
			<v-toolbar-title>
			</v-toolbar-title>
		</v-toolbar> -->
			<v-container>
				<p
					v-if="showDebug"
					class="text-warning text-body-1" 
				>
					{{ name }}
				</p>

				<h1 class="text-primary mb-15"
					:class="smAndDown ? ' text-center text-h1' : 'text-h1'">
					CRICKBURROW ARCHIVES
				</h1>

				<SiteNavigation />

				<v-main class="text-primary mb-8">
					<slot class="mt-8"></slot>
				</v-main>

				<SiteNavigation/>
			
				<v-footer
					class="d-flex align-center pa-0 mt-15 mb-5"
					:class="smAndDown ? 'justify-center flex-column' : 'justify-end'"
					color="background"
				>
					<div class="mr-md-5 mb-3 mb-md-0">
						<v-img contain
							width="100px"
							height="20px"
							src="/images/mocks/observe.png"
							alt="another message written in an odd alphabet"/>
					</div>
					<div class="text-primary text-body-1 mr-0 mr-md-5 mb-3 mb-md-0">
						CRICKBURROW, &copy;2023 
					</div>
					<v-icon size="large"
						class="mr-0 mr-md-5 mb-8 mb-md-0"
						color="primary">mdi-eye-circle</v-icon>
					<div class="mr-0 mb-8 mb-md-0">
						<ExternalSiteButton text="SeanYager.com"
							link-name="https://www.seanyager.com" />
					</div>
				</v-footer>
			</v-container>
		</v-no-ssr>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown, name } = useDisplay()
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