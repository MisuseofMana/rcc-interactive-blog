<template>
	<div class="mt-7 mb-3 text-primary">
		<p class="text-body-1 ">current directory</p>
		<h2
			class="text-h2 mt-n2">
			>: {{text}}
		</h2>
	</div>
</template>

<script setup>
defineProps({
	text: String
})
</script>
