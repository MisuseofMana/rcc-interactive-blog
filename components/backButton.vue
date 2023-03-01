<template>
    <v-btn nuxt :to="linkName" class="text-decoration-none" :min-height="buttonHeight" :min-width="buttonWidth" color="primary darken-3">
		<div v-if="frontIcon">
			<v-icon class="mr-2" :size="iconSize" color="primary">{{ frontIcon }}</v-icon>
		</div>
		<div class="primary--text mr-3" :class="[smDownScreens ? 'text-h3' : 'text-body-1']">
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
	data() {
		return {
			isMounted: false,
		}
	},
	mounted() {
		this.isMounted = true
	},
	computed: {
		smDownScreens() {
			return (this.isMounted && this.$vuetify.breakpoint.mdAndDown)
		},
		iconSize() {
			return this.smDownScreens ? `40px` : `25px`
		},
		buttonWidth() {
			return this.smDownScreens ? `100%` : ``
		},
		buttonHeight() {
			return this.smDownScreens ? `100px` : `50px`
		}
	}
}
</script>

<style lang="scss" scoped>

</style>