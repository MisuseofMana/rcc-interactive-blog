<template>
	<v-btn nuxt
		:to="linkName"
		class="text-decoration-none"
		:loading="isLoading"
		:disabled="caution"
		:height="smAndDown ? '55px' : '50px'"
		min-width="100%"
		:color="computedColor">
		<div class="d-flex align-center justify-center">
			<div v-if="frontIcon">
				<v-icon class="mr-2"
					size="x-large"
					:color="computedIconColor"
					:icon="`mdi-${frontIcon}`"></v-icon>
			</div>
			<div class="text-body-1 text-uppercase mr-2"
				:class="computedTextColor">
				{{ text }}
			</div>
			<div v-if="realmIcons">
				<v-icon 
					v-for="(items, index) in realmIcons"
					size="x-large"
					:icon="`mdi-${items}`"
					:key="items+index"
					:color="computedIconColor"></v-icon>
			</div>
		</div>
	</v-btn>
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
	disabled: Boolean,
	warning: Boolean,
	isLoading: Boolean,
})

const { smAndDown } = useDisplay()

const computedColor = computed(() => {
	if(props.caution) return `grey-darken-4`
	if(props.warning) return `deep-orange-darken-4`
	return `primary-darken-1`
})

const computedIconColor = computed(() => {
	if(props.caution) return `grey-darken-3`
	if(props.warning) return `yellow`
	return `primary`
})

const computedTextColor = computed(() => {
	if(props.caution) return `text-grey-darken-3`
	if(props.warning) return `text-yellow`
	return `text-primary`
})
</script>