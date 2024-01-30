<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLink to="/brainwash">
			<NuxtLayout name="landing">
				<v-row dense
					no-gutters>
					<v-col cols="12"
						class="d-flex align-center justify-center">
						<v-img v-show="smAndDown"
							max-width="150px"
							class="abberation cursor"
							src="/images/icons/pigpen.png"></v-img>
						<v-img v-show="mdAndUp"
							max-width="100px"
							class="abberation cursor"
							src="/images/icons/pigpen.png"></v-img>
					</v-col>
				</v-row>
			</NuxtLayout>
		</NuxtLink>
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
</style>