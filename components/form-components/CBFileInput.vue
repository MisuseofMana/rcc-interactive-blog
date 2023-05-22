<template>
	<v-file-input :label="label"
		:error-messages="errors"
		:hint="hint"
		:name="name"
		prepend-icon="mdi-camera"
		v-model="value"
	></v-file-input>
</template>

<script setup>
import { useField } from 'vee-validate'

const { value } = useField(props.name)

// const fieldName = useField(props.name)

const props = defineProps({
	label: {
		type: String,
		default: `File Input`
	},
	name: {
		type: String,
		default: `fileinput`
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