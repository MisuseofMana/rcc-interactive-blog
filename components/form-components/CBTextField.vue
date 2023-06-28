<template>
	<v-text-field
		variant="outlined"
		:name="name"
		autocomplete="off"
		:label="label"
		:hint="hint"
		:error-messages="errors"
		v-model="value"></v-text-field>
</template>

<script setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

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

const name = toRef(props, `name`)
const { value } = useField(name, undefined)
</script>