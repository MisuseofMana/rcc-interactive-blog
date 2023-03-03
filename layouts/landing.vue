<template>
	<v-app full-height>
		<slot />
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