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
						<h1 class="text-h1 text-center mb-10">SIGN UP</h1>
						<v-row>
							<v-col cols="12"
								xl="6"
								class="offset-xl-3">
								<v-text-field variant="outlined"
									counter="20"
									label="Username *"
									hint="Your desired Operator identifier. Will be obfuscated and displayed alongside submissions."
									v-model="username"
									></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="6"
								class="offset-xl-3">
								<v-text-field variant="outlined"
									counter="20"
									label="Email"
									hint="An email to reach you at. Not necessary to make an account, though recommended."
									v-model="email"
									></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="6"
								class="offset-xl-3">
								<v-text-field variant="outlined"
									counter="30"
									label="Password *"
									hint="Make it secure."
									v-model="password"></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="6"
								class="offset-xl-3">
								<v-text-field variant="outlined"
									counter="30"
									label="Confirm Password *"
									hint="Confirm your password."
									v-model="confirmPassword"></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="3">
								<BackButton
									color="primary-darken-1"
									class="text-primary"
									text="Apply to the Operations Team"
									@click="createUser"/>
							</v-col>
							<v-col cols="12"
								xl="2"
								class="offset-xl-1 text-right text-h6 text-primary d-flex align-center justify-end">
								<NuxtLink class="text-primary text-decoration-none"
									to="/login">
									Or Log In
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
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

const auth = getAuth()
const username = ref(``)
const email = ref(``)
const password = ref(``)
const confirmPassword = ref(``)

const createUser = () => {
	if(password.value != confirmPassword.value) return
	if(password.value.length <= 8) return
	const fakeUserEmail = `${username.value}@CBArchives.com`

	createUserWithEmailAndPassword(auth, fakeUserEmail, password.value)
		.then(() => {
			updateProfile(auth.currentUser, {
				displayName: username.value
			})
			// eslint-disable-next-line no-undef
			navigateTo(`/operations/control`)
		})
		.catch((error) => {
			console.log(error.code)
			console.log(error.message)
		})
}
</script>

