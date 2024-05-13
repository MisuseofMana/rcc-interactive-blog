<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-container class="my-5">
		<v-row >
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
						<div>
							<h1 class="text-h1 mb-5">
								OPERATOR EXAM
							</h1>
							<h2 class="text-h4 mb-5">This exam will test the following:</h2>
							<ul class="text-body-1 mb-10 ml-10">
								<li class="mb-1">
									Are you knowledgeable of the realms?
								</li>
								<li class="mb-1">
									Do you understand the semiotics in the realms?
								</li>
								<li class="mb-1">
									Can you intuit the path when there is little guidance?
								</li>
							</ul>
							
							<h2 class="text-h4 mb-5">Still feeling lost or uncertain?</h2>
							<p class="text-body-1 mb-15">It would be best to brush up in <strong class="font-weight-black">/info</strong> before the exam. Once started you will have 30 seconds to answer each question.</p>
							<p class="text-body-1 mb-10">You have {{ remainingAttempts }} attempts remaining today.</p>
							
							<v-row>
								<v-col cols="12"
									sm="12"
									md="6">
									<BackButton class="mr-2"
										text="Back to /Intro"
										:realm-icons="['map-search-outline']"
										link-name="/intro" 
										front-icon="arrow-left-bold"/>
								</v-col>
								<v-col cols="12"
									sm="12"
									md="6">
									<BackButton class="mr-2"
										warning
										text="Begin Exam"
										:disabled="examDisabled"
										front-icon="key"
										:realm-icons="['arrow-right-bold']"
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
import { ref, onMounted, } from 'vue'
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

