<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				sm="12"
				md="12"
				lg="10"
				xl="8"
				class="offset-lg-1 offset-xl-2">
				<v-card
					variant="outlined"
					color="primary"
					width="100%"
					class="pa-15 text-primary">
		
					<div 
						class="text-center mb-8 d-flex flex-column align-center">
						<DisLogo width="45%" class="mb-5"/>
						<h1 class="text-primary text-center text-h3 mb-5">
							Operator Exam Passed
						</h1>
						<p class="text-body-1 mb-3">The D.I.S recognizes your attention to detail.</p>
						<p class="text-body-1 mb-4">Take the exam often to recieve further instructions.</p>
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
							▛▙▜▜▎▓▛ ▙▏▜▐▜ ▜▜█▐▎▓ █▛ ▜█▜ █▛ ▜█▚▋▎╽.
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
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
	localStorage.remainingAttempts++
	localStorage.passedExam = true
})
</script>

