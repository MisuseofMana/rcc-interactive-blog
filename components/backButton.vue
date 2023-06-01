<template>
	<v-btn nuxt
		:to="linkName"
		class="text-decoration-none"
		min-height="50px"
		:loading="isLoading"
		:height="smAndDown ? '55px' : '50px'"
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
	warning: Boolean,
	isLoading: Boolean,
})

const { smAndDown } = useDisplay()

const computedColor = computed(() => {
	if(props.caution) return `deep-orange-darken-4`
	if(props.warning) return `yellow-darken-2`
	return `primary-darken-1`
})

const computedIconColor = computed(() => {
	if(props.caution) return `deep-orange-darken-4`
	if(props.warning) return `yellow-darken-2`
	return `primary`
})

const computedTextColor = computed(() => {
	if(props.caution) return `text-deep-orange-darken-4`
	if(props.warning) return `text-yellow-darken-2`
	return `text-primary`
})
</script>