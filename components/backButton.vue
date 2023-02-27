<template>
    <v-btn nuxt :to="linkName" class="text-decoration-none" :min-height="buttonHeight" :min-width="buttonWidth" color="primary darken-3">
		<div v-if="frontIcon">
			<v-icon class="mr-2" :size="iconSize" color="primary">{{ frontIcon }}</v-icon>
		</div>
		<div class="text-body-1 primary--text mr-2">
			{{ text }}
		</div>
		<div v-if="realmIcons">
			<v-icon :size="iconSize" v-for="(items, index) in realmIcons" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
		</div>
    </v-btn>
</template>

<script>
export default {
	props: [
		`frontIcon`,
		`text`,
		`realmIcons`,
		`linkName`,
	],
	computed: {
		iconSize() {
			return this.$vuetify.breakpoint.smAndDown ? `28px` : `25px`
		},
		buttonWidth() {
			return this.$vuetify.breakpoint.smAndDown ? `100%` : ``
		},
		buttonHeight() {
			return this.$vuetify.breakpoint.smAndDown ? `75px` : `50px`
		}
	}
}
</script>

<style lang="scss" scoped>

</style>