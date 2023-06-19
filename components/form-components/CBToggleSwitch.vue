<template>
	<v-switch v-model="value"
		:label="label"
		:color="color"
		inset
		hide-details></v-switch>
</template>

<script setup>
import { toRef, computed } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
	label: {
		type: String,
		default: `Toggle Switch`
	},
	name: {
		type: String,
		default: `default-switch-name`
	},
	color: {
		type: String,
		default: `primary`
	},
})
const name = toRef(props, `name`)
const { value } = useField(name, undefined)
</script>