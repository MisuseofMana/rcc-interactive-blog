<template>
<v-app full-height style="background-color: #212121;">
	<v-main>
		<slot />
	</v-main>
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