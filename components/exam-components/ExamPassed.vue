<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="landing">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					sm="12"
					md="12"
					lg="10"
					xl="6"
					class="offset-lg-1 offset-xl-3">
					<v-card
						variant="outlined"
						color="primary"
						width="100%"
						class="pa-15 text-primary">
				
						<div 
							class="text-center mb-8">
							<h1 class="text-primary text-center text-h1 mb-8">
								ACCESS GRANTED
							</h1>
							<p class="text-body-1 mb-3">If you take a moment to consider your accomplishment, you may ask yourself "what's next?"</p>
							<p class="text-body-1 mb-8">For now, consider yourself a friend of the archives.</p>
							<h2 class="text-h4">More coming soon.</h2>
							<!-- <p class="text-body-1 mb-8">You may wish to join in documenting the myriad of realms to greater this project.</p></p> -->
							<!-- <p class="text-body-1">If you find yourself uninterested in this task, you may go <strong class="font-weight-black">elsewhere</strong>.</p> -->
						</div>
						
						<!-- <v-row class="mb-15"
							no-gutters
							dense>
							<v-col cols="12"
								md="8"
								class="offset-md-2">
								<BackButton class="mr-2"
									:caution="true"
									variant="outlined"
									text="/Elsewhere"
									:realm-icons="['alert-octagon']"
									link-name="/briefing" />
							</v-col>
						</v-row> -->

						<!-- <div class="text-center mb-12">
							<p class="mb-3">
								<span class="text-body-1">
									If you wish to aid in Crossrealm Documentation visit the nearest Crickburrow headquarters and 
								</span>
								<span class="text-subtitle-2">
									▛ ▙▏▜▜▎▓ ▜▛ ▙▏▜▐▜ ▜▜█▐▎▓ █▛ ▜█▜ █▛ ▜█▚▋▎╽.
								</span>
							</p>
							<p class="text-body-1">Alternatively - apply electronically below.</p>
						</div> -->
						
						<v-row
							class="mb-2"
							no-gutters
							dense>
							<v-col cols="12"
								md="8"
								class="offset-md-2">
								<BackButton
									color="primary-darken-1"
									link-name="/realms"
									class="text-primary"
									text="/Realms">
								</BackButton>
							</v-col>
						</v-row>
						<v-row
							class="mb-2"
							no-gutters
							dense>
							<v-col cols="12"
								md="8"
								class="offset-md-2">
								<BackButton
									color="primary-darken-1"
									link-name="/artifacts"
									class="text-primary"
									text="/Artifacts">
								</BackButton>
							</v-col>
						</v-row>
						<v-row
							class="mb-2"
							no-gutters
							dense>
							<v-col cols="12"
								md="8"
								class="offset-md-2">
								<BackButton
									color="primary-darken-1"
									link-name="/briefing"
									class="text-primary"
									text="/Briefing">
								</BackButton>
							</v-col>
						</v-row>

						<!-- <v-row class="mb-15"
							no-gutters
							dense>
							<v-col cols="12"
								md="8"
								class="offset-md-2">
								<BackButton
									color="primary-darken-1"
									link-name="/apply"
									class="text-primary mb-15"
									text="Apply to the Operations Team">
								</BackButton>
							</v-col>
						</v-row> -->
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
	localStorage.remainingAttempts++
})
</script>

