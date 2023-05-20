<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app>
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="d-flex align-center justify-center">
					<div v-if="error.statusCode === 404">
						<v-card
							variant="outlined"
							color="deep-orange-darken-4"
						class="pa-15 mb-5 text-deep-orange-darken-4">>
							<div 
								class="d-flex flex-column align-center justify-center">
								<h1 class="text-deep-orange-darken-4 text-center text-h1 mb-5">
									ARCHIVE ERROR - 404
								</h1>
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-15"> PAGE NOT FOUND</p>
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
							text="Return To Realms"
							:realm-icons="['safe-square']"
							link-name="/realms" />
					</div>
					<div v-else>
						<h1>An error occurred</h1>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script setup>
defineProps({
	error: String
})
</script>