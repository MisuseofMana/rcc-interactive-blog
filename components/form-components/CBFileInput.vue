<template>
	<v-file-input :label="label"
		:error-messages="errors"
		:hint="hint"
		:name="name"
		prepend-icon="mdi-camera"
		:disabled="disabled"
		v-model="value"
	></v-file-input>
</template>

<script setup>
import { toRef } from 'vue'
import { useField } from 'vee-validate'

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
		type: [String, Array], 
		default: () => []
	},
	hint: {
		type: String, 
		default: `YOU FORGOT TO WRITE THE HINT`
	},
	items: {
		type: Array, 
		default: () => [`Some`, `Default`, `Options`]
	},
	disabled: {
		type: Boolean,
		default: false
	}
})

const name = toRef(props, `name`)
const { value } = useField(name, undefined)

</script>