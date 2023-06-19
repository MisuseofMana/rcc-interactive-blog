<template>
    <v-text-field
    variant="outlined"
    :name="name"
    :label="label"
    :hint="hint"
    :append-icon="confirmPasswordShown ? 'mdi-eye' : 'mdi-eye-off'"
    :type="confirmPasswordShown ? 'text' : 'password'"
    @click:append="confirmPasswordShown = !confirmPasswordShown"
    :error-messages="errors"
    v-model="value"></v-text-field>
</template>

<script setup>
import { ref, toRef } from 'vue'
import { useField } from 'vee-validate'
const confirmPasswordShown = ref(false)

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