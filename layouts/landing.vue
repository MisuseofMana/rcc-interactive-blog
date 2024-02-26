<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<slot />
	</div>
</template>

<script setup>
import { usePageAudio } from '~/composables/usePageAudio'
usePageAudio()

</script>
