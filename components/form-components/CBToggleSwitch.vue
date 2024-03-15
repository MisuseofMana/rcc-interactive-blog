<template>
	<v-switch v-model="value"
		:label="label"
		:color="color"
		hide-details></v-switch>
</template>

<script setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
	label: {
		type: String,
		default: `Toggle Switch`
	},
	name: {
		type: String,
	},
	color: {
		type: String,
		default: `primary`
	},
})
const name = toRef(props, `name`)
const { value } = useField(name, undefined)
</script>

<!-- <style lang="scss" scoped>
:deep(.v-switch__track) {
	background-color: rgb(var(--v-theme-primary)) !important;
}
</style> -->