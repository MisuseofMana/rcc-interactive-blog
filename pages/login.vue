<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					sm="12"
					md="12"
					lg="10"
					xl="10"
					class="offset-lg-1">
					<v-card
						variant="outlined"
						color="primary"
						width="100%"
						class="pa-15 text-primary">
						<h1 class="text-h1 text-center mb-10">LOG IN</h1>
						<v-row>
							<v-col cols="12"
								xl="6"
								class="offset-xl-3">
								<v-text-field variant="outlined"
									counter="20"
									label="Username"
									hint="Your assigned Operator identifier."></v-text-field>
							</v-col>	
							<v-col cols="12"
								xl="6"
								class="offset-xl-3">
								<v-text-field variant="outlined"
									counter="30"
									label="Password"
									hint="Your password."></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="3"
								class="offset-xl-3">
								<BackButton
									color="primary-darken-1"
									class="text-primary"
									text="Log In"/>
							</v-col>
							<v-col cols="12" xl="2" class="offset-xl-1 text-right text-h6 text-primary d-flex align-center justify-end">
								<NuxtLink class="text-primary text-decoration-none" to="/apply">
									Or Sign Up
								</NuxtLink>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>

</script>

