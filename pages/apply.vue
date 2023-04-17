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
						<div>
							<v-row>
								<v-col cols="12"
									xl="6"
									class="offset-xl-3">
									<v-text-field variant="outlined"
										counter="20"
										label="Username *"
										hint="Your desired Operator identifier. Will be obfuscated and displayed alongside submissions."
										:error-messages="username.errorMessage.value"
										v-model="username.value.value"
									></v-text-field>
								</v-col>
								<v-col cols="12"
									xl="6"
									class="offset-xl-3">
									<v-text-field variant="outlined"
										counter="20"
										label="Email"
										hint="An email to reach you at. Not necessary to make an account, though recommended."
										:error-messages="email.errorMessage.value"
										v-model="email.value.value"
									></v-text-field>
								</v-col>
								<v-col cols="12"
									xl="6"
									class="offset-xl-3">
									<v-text-field variant="outlined"
										counter="20"
										label="Password *"
										:append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
										:type="passwordShown ? 'text' : 'password'"
										@click:append="passwordShown = !passwordShown"
										hint="Make it secure."
										:error-messages="password.errorMessage.value"
										v-model="password.value.value"></v-text-field>
								</v-col>
								<v-col cols="12"
									xl="6"
									class="offset-xl-3">
									<v-text-field variant="outlined"
										counter="20"
										label="Confirm Password *"
										hint="Confirm your password."
										:append-icon="confirmPasswordShown ? 'mdi-eye' : 'mdi-eye-off'"
										:type="confirmPasswordShown ? 'text' : 'password'"
										@click:append="confirmPasswordShown = !confirmPasswordShown"
										:error-messages="confirmPassword.errorMessage.value"
										v-model="confirmPassword.value.value"></v-text-field>
								</v-col>
								<v-col cols="12"
									xl="3">
									<BackButton
										@click="createUser"
										color="primary-darken-1"
										class="text-primary"
										text="Apply to the Operations Team"/>
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
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useField, useForm } from 'vee-validate'

const passwordShown = ref(false)
const confirmPasswordShown = ref(false)

const { handleSubmit } = useForm({
	validationSchema: {
		username (value) {
			if(!/^[A-Za-z]+$/.test( value )) return `Username may only contain the letters "a" to "z".`
			if (value?.length < 3) return `Username must be more than 2 characters.`
			if (value?.length > 20) return `Username must be under 21 characters.`
			if (!value) return `Username is required.`
			return true
		},
		email (value) {
			if(!value) return true
			if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) return `Must be a valid email.`
			return true
		},
		password (value) {
			if (value?.length < 9) return `Password must be at least 9 characters.`
			if (value?.length > 20) return `Password cannot be greater than 20 characters.`
			return true
		},
		confirmPassword (value) {
			if (value != password.value.value) return `Passwords do not match. Please double check.`
			if (value?.length > 20) return `Password cannot be greater than 20 characters.`
			return true
		},
	},
})

const auth = getAuth()
const username = useField(`username`)
const password = useField(`password`)
const email = useField(`email`)
const confirmPassword = useField(`confirmPassword`)

const createUser = handleSubmit(values => {
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
})
</script>

