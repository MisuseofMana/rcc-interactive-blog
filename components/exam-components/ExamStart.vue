<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-container class="my-5">
		<v-row>
			<v-col cols="12"
				sm="12"
				md="12"
				lg="10"
				xl="8"
				class="offset-lg-1 offset-xl-2">
				<div>
					<v-card
						variant="outlined"
						color="deep-orange-darken-4"
						class="pa-15 text-deep-orange-darken-4">
						<div 
							class="d-flex flex-column align-center justify-center">
							<h1 class="text-h1 mb-10">
								OPERATOR EXAM
							</h1>
							<p class="text-body-1 mb-8">This exam will test the following:</p>
							<ul class="text-body-1 mb-8">
								<li class="mb-1">
									Are you knowledgeable of the core realms?
								</li>
								<li class="mb-1">
									Do you understand the semiotics?
								</li>
								<li class="mb-1">
									Can you intuit the path when there is little guidance?
								</li>
							</ul>
							
							<p class="text-body-1 mb-3">Still feeling lost or uncertain?</p>
							<p class="text-body-1 mb-3">It would be best to brush up in <strong class="font-weight-black">/briefing</strong> before the exam.</p>
							<p class="text-body-1 mb-6">Once started you will have 30 seconds to answer each question.</p>
							<p class="text-body-1 mb-15">You have {{ remainingAttempts }} attempts remaining today.</p>
							
							<v-row>
								<v-col cols="12"
									sm="12">
									<BackButton class="mr-2"
										variant="outlined"
										text="Back to /Briefing"
										:realm-icons="['map-search-outline']"
										link-name="/briefing" />
								</v-col>
								<v-col cols="12"
									sm="12">
									<BackButton class="mr-2"
										warning
										variant="outlined"
										text="Begin Exam"
										:disabled="examDisabled"
										:realm-icons="['key']"
										@click="startExam"/>
								</v-col>
							</v-row>
						</div>
					</v-card>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits([`solved`])
const startExam = () => {
	localStorage.remainingAttempts--
	emit(`solved`)
}
const examDisabled = ref(false)
const remainingAttempts = ref(0)

onMounted(() => {
	remainingAttempts.value = localStorage.remainingAttempts || 5
	if(localStorage.remainingAttempts <= 0) {
		examDisabled.value = true
	}
})

</script>

<style scoped>
ul {
	margin-block-start: 0;
}
</style>

