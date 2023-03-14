<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="landing">
		<v-container class="my-5"
			tabindex="0"
			v-on:keydown.esc="keypadOpen = !keypadOpen">
			<v-row>
				<v-col cols="12"
					class="d-flex align-center justify-center">
					<div >
						<v-card
							variant="outlined"
							color="deep-orange-darken-4"
							class="pa-10 mb-5 text-primary">
							<v-overlay contained
								v-model="keypadOpen">
								<p class="text-primary">
									hello
								</p>
							</v-overlay>
							<div 
								class="d-flex flex-column align-center justify-center">
								<h1 class="text-deep-orange-darken-4 text-center text-h1">
									ACCESS DENIED 
								</h1>
				
								<h2 class="text-deep-orange-darken-4 text-center text-h2 mb-8">
									ARE YOU LOST, OPERATOR?
								</h2>
								<p class="text-deep-orange-darken-4 text-center text-body-1">Your operation status is insufficient.</p>
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-15">Please review /BRIEFING.</p>
								<div class="d-flex align-center justify-center mb-5">
									<v-img class="errorAbberation"
										height="200"
										width="200"
										contain
										:aspect-ratio="1"
										src="/images/error.png"
										alt="geometric shape"></v-img>
								</div>
							</div>
						</v-card>
						<BackButton class="mr-2"
							variant="outlined"
							text="Back To /Briefing"
							:realm-icons="['map-search-outline']"
							link-name="/briefing" />
					</div>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
	error: String
})

const keypadOpen = ref(false)

</script>

<style scoped>
	:focus{
   outline:0;
}
</style>