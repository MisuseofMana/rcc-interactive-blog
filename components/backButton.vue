<template>
    <v-btn nuxt :to="linkName" class="text-decoration-none" min-height="50px" :min-width="[smAndDown ? `40%` : ``]" color="primary-darken-1">
		<div v-if="frontIcon">
			<v-icon class="mr-2" :size="[smAndDown ? `28px` : `25px`]" color="primary">{{ frontIcon }}</v-icon>
		</div>
		<div class="text-body-1 text-uppercase text-primary mr-2" :class="smAndDown ? '' : ''">
			{{ text }}
		</div>
		<div v-if="realmIcons">
			<v-icon :icon="`mdi-${items}`" :size="[smAndDown ? `25px` : `25px`]" v-for="(items, index) in realmIcons" :key="items+index" color="primary"></v-icon>
		</div>
    </v-btn>
</template> 

<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
const props = defineProps({
	frontIcon: String,
	text: String,
	realmIcons: Array,
	linkName: String,
})
</script>