<template>
	<v-app :full-height="isFullHeight"
		class="text-primary">
		<p
			v-if="showDebug"
			class="text-deep-orange-darken-4 text-body-1" 
		>
			{{ name }}
		</p>
		<NuxtPage/>
	</v-app>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { usePageAudio } from '~/composables/usePageAudio'

const { name } = useDisplay()
const showDebug = false

usePageAudio()

const isFullHeight = computed(() => {
	const route = useRoute()
	if(route?.path === `/brainwash`) {
		return true
	}
	else {
		return false
	}
})

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