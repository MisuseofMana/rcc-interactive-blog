<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="landing">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					sm="12"
					md="12"
					lg="10"
					xl="8"
					class="offset-lg-1 offset-xl-2">
					<div >
						<v-card
							variant="outlined"
							color="deep-orange-darken-4"
							class="pa-15 text-deep-orange-darken-4">
							
							<v-col cols="12"
								sm="8"
								md="4"
								lg="10"
								xl="10"
								class="offset-sm-2 offset-md-1 offset-lg-1 text-center"
								justify-self="center">
								<h2 class="text-h2 mb-3">Not quite right,</h2>
								<h3 class="text-h3 mb-10">that's a shame.</h3>
								<p v-if="remainingAttempts >= 1"
									class="text-body-1 mb-5">However, you have {{ remainingAttempts }} attempts remaining today.</p>
								<div v-else>
									<p class="text-body-1 mb-5">You're grasping at straws, now.</p>
									<p class="text-body-1 mb-10">Your Trial Operator access is revoked for today.</p>
								</div>
							</v-col>
							<v-col cols="12"
								sm="8"
								md="4"
								lg="10"
								xl="4"
								class="offset-sm-2 offset-md-1 offset-lg-4 mb-10"
								justify-self="center">
								<v-img 
									class="errorAbberation"
									max-height="200px"
									max-width="400px"
									src="/images/mocks/hidscrap1.png"
									alt="a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper."
								/>
							</v-col>
							<v-row>
								<v-col cols="12"
									sm="6">
									<BackButton class="mr-2"
										variant="outlined"
										text="/Briefing"
										:realm-icons="['map-search-outline']"
										link-name="/briefing" />
								</v-col>
								<v-col cols="12"
									sm="6">
									<BackButton class="mr-2"
										:caution="true"
										variant="outlined"
										text="Retake Exam"
										:realm-icons="['key']"
										:disabled="remainingAttempts <= 0"
										@click="flagExamForImmediateStart()"
										link-name="/operator-exam" />
								</v-col>
							</v-row>
						</v-card>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSiteStore } from '~/store/useSiteStore.js'

const siteStore = useSiteStore()
const remainingAttempts = ref(5)

onMounted(() => {
	remainingAttempts.value = localStorage.remainingAttempts
})

const flagExamForImmediateStart = () => {
	siteStore.examAutoStart = true
}
</script>