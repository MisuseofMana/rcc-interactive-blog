<template>
    <v-textarea
        class="text-primary primary"
        prepend-icon="mdi-comment"
        variant="filled"
        :name="name"
        :label="label"
        :error-messages="errors"
        counter="120"
        auto-grow
        v-model="value"
    ></v-textarea>
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