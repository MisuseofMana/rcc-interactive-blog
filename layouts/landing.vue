<template>
<v-app style="background: var(--v-background-base)">
	<v-main>
		<Nuxt />
	</v-main>
</v-app>
</template>

<script>
export default {
	name: 'LandingLayout',
	head () {
		return {
			meta: [
				{ hid: 'og:image', property: 'og:image', content: '/images/ogimage.png' }
			]
		}
	}
}
</script>


<style scoped>
v-app {
	overflow:hidden;
	max-width:100vw;
	max-height:100vh;
	margin:0;
	padding:0;
}
</style>