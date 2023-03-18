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
							class="pa-15 text-primary customBackground">
							
							<div 
								class="d-flex flex-column align-center justify-center">
								<p class="text-body-1 mb-2">Not quite, that's a shame.</p>
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-10">Please consider your understanding of the following.</p>
								<ul class="text-deep-orange-darken-4 text-body-1 mb-6">
									<li class="mb-1">
										Are you paying attention?
									</li>
									<li class="mb-1">
										Are you confident in you memory?
									</li>
									<li class="mb-1">
										Have you gained the correct insights?
									</li>
									<li>
										Can you recognize the documented realms?
									</li>
								</ul>
								
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-1">Still feeling lost?</p>
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-8">Review /BRIEFING for instructions.</p>
								
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
											link-name="/operator-exam" />
									</v-col>
								</v-row>
							</div>
						</v-card>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>