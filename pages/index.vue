<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="landing">
			<div class="fullScreen d-flex align-center justify-center">
				<NuxtLink
					to="/brainwash">
					<div class="imageContainer">
						<v-img v-show="smAndDown"
							max-width="100px"
							width="100px"
							height="100px"
							class="abberation cursor"
							src="/images/icons/pigpen.png"></v-img>
						<v-img v-show="mdAndUp"
							max-width="100px"
							class="abberation cursor"
							src="/images/icons/pigpen.png"></v-img>
					</div>
				</NuxtLink>
			</div>
		</NuxtLayout>
	</div>
</template> 
  
<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown, mdAndUp } = useDisplay()
</script>
  
<style scoped>
.cursor:hover {
    cursor: pointer;
}

a,
a:-webkit-any-link {
    text-decoration: none;
}

.imageContainer {
	min-height: 100px;
	min-width: 100px;
}

.fullScreen { 
	min-width: 100vw;
	min-height: 100vh;
}
</style>