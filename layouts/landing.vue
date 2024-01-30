<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app full-height
		class="text-primary">
		<v-no-ssr>
			<p
				v-if="showDebug"
				class="text-deep-orange-darken-4 text-body-1" 
			>
				{{ name }}
			</p>
			<slot />
		</v-no-ssr>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { name } = useDisplay()
const showDebug = false
import { usePageAudio } from '~/composables/usePageAudio'
usePageAudio()
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