<template>
	<v-card nuxt
		:to="linkName"
		:disabled="disabled"
		class="text-decoration-none d-flex align-center justify-center"
		min-height="100px"
		min-width="100%"
		:color="computedColor">
		<div v-if="frontIcon">
			<v-icon class="mr-2"
				size="25px"
				:color="computedIconColor"
				:icon="`mdi-${frontIcon}`"></v-icon>
		</div>
		<div class="text-body-1 text-uppercase mr-2"
			:class="computedTextColor">
			{{ text }}
		</div>
		<div v-if="realmIcons">
			<v-icon :icon="`mdi-${items}`"
				size="25px"
				v-for="(items, index) in realmIcons"
				:key="items+index"
				:color="computedIconColor"></v-icon>
		</div>
	</v-card>
</template> 

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
	frontIcon: String,
	text: String,
	realmIcons: Array,
	linkName: String,
	caution: Boolean,
	warning: Boolean,
	isLoading: Boolean,
	disabled: Boolean,
})

const { smAndDown } = useDisplay()

const computedColor = computed(() => {
	if(props.caution || props.disabled) return `grey-darken-4`
	if(props.warning) return `yellow-darken-2`
	return `primary-darken-1`
})

const computedIconColor = computed(() => {
	if(props.disabled) return `grey-darken-3`
	if(props.caution) return `deep-orange-darken-4`
	if(props.warning) return `yellow-darken-2`
	return `primary`
})

const computedTextColor = computed(() => {
	if(props.disabled) return `text-grey-darken-3`
	if(props.caution) return `text-deep-orange-darken-4`
	if(props.warning) return `text-yellow-darken-2`
	return `text-primary`
})
</script>