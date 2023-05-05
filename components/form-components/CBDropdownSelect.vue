<template>
	<v-select
		:error-messages="errors"
		:hint="hint"
		:items="items"
		:label="label"
		:name="name"
		v-model="value"
	></v-select>
</template>

<script setup>
import { useField } from 'vee-validate'

const { value } = useField(props.name)

const props = defineProps({
	label: {
		type: String,
		default: `Text Field`
	},
	name: {
		type: String,
		default: `textfield`
	},
	errors: {
		type: String, 
		default: ``
	},
	hint: {
		type: String, 
		default: `YOU FORGOT TO WRITE THE HINT`
	},
	items: {
		type: Array, 
		default: () => [`Some`, `Default`, `Options`]
	}
})

</script>