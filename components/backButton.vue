<template>
    <v-btn nuxt :to="linkName" class="text-decoration-none" :min-height="[smAndDown ? `75px` : `50px`]" :min-width="[smAndDown ? `100%` : ``]" color="primary darken-3">
		<div v-if="frontIcon">
			<v-icon class="mr-2" :size="[smAndDown ? `28px` : `25px`]" color="primary">{{ frontIcon }}</v-icon>
		</div>
		<div class="text-body-1 primary--text mr-2">
			{{ text }}
		</div>
		<div v-if="realmIcons">
			<v-icon :size="[smAndDown ? `28px` : `25px`]" v-for="(items, index) in realmIcons" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
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

<style lang="scss" scoped>

</style>