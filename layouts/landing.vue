<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app full-height>
		<v-no-ssr>
			<slot />
		</v-no-ssr>
	</v-app>
</template>

<style scoped>
	v-app {
		overflow:hidden;
		max-width:100vw;
		max-height:100vh;
		margin:0;
		padding:0;
	}
</style>