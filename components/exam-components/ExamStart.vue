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
						class="pa-15 text-primary customBackground">
						
						<div 
							class="d-flex flex-column align-center justify-center">
							<p class="text-body-1">Stop.</p>
							<h1 class="text-deep-orange-darken-4 text-center text-h1 mb-4">
								THINK <strong class="font-weight-black">CAREFULLY</strong>.
							</h1>
							<p class="text-deep-orange-darken-4 text-center text-body-1 mb-10">Please consider your understanding of the following.</p>
							<ul class="text-deep-orange-darken-4 text-body-1 mb-10">
								<li class="mb-1">
									Are you paying attention?
								</li>
								<li class="mb-1">
									Are you confident in you observations?
								</li>
								<li class="mb-1">
									Have you gained the correct insights?
								</li>
								<li class="mb-1">
									Can you recognize the documented realms?
								</li>
								<li>
									Do you understand everything available to you?
								</li>
							</ul>
							
							<p class="text-deep-orange-darken-4 text-center text-body-1 mb-8">Still feeling lost? Not certain you're ready? It would be best to brush up in /briefing before the exam.</p>
							
							<p class="text-deep-orange-darken-4 text-center text-body-1 mb-8">Be certain, once started you will have 30 seconds per question.</p>
							
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
										text="Begin Exam"
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
const emit = defineEmits([`solved`])
const startExam = () => {
	emit(`solved`)
}
</script>

