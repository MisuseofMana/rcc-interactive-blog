<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app>
		<slot />
	</v-app>
</template>

<script setup>
import { usePageAudio } from '~/composables/usePageAudio'
usePageAudio()

</script>
