<template>
	<v-textarea
		class="text-primary primary"
		prepend-icon="mdi-comment"
		variant="filled"
		:name="name"
		:label="label"
		:error-messages="errors"
		counter="120"
		density="compact"
		:hint="hint"
		auto-grow
		height="100px"
		v-model="value"
	></v-textarea>
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