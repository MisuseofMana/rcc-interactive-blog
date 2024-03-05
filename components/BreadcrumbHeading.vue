<template>
	<div class="mt-7 mb-3 text-primary">
		<v-row>
			<v-col
				cols="12"
				sm="8"
				class="offset-sm-2 offset-md-0">
				<p class="text-body-1 mb-1">current directory</p>
				<h2
					class="text-h2 mt-n2">
					>: {{text}}
				</h2>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
defineProps({
	text: String
})
</script>
