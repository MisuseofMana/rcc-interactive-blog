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
						<div>
							<v-row>
								<v-col cols="12"
									xl="6"
									class="offset-xl-3">
									<v-text-field variant="outlined"
										counter="20"
										label="Username or Email *"
										hint="Your assigned Operator identifier."
										:error-messages="username.errorMessage.value"
										v-model="username.value.value"></v-text-field>
								</v-col>	
								<v-col cols="12"
									xl="6"
									class="offset-xl-3">
									<v-text-field variant="outlined"
										counter="20"
										label="Password *"
										:append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
										:type="passwordShown ? 'text' : 'password'"
										hint="Your password."
										@click:append="passwordShown = !passwordShown"
										:error-messages="password.errorMessage.value"
										v-model="password.value.value"></v-text-field>
								</v-col>
								<v-col cols="12"
									xl="3"
									class="offset-xl-3">
									<p class="text-center text-deep-orange-darken-4 text-body-1 mb-3">{{ logInError }}</p>
									<BackButton
										@click="logIn"
										color="primary-darken-1"
										class="text-primary"
										text="Log In"/>
								</v-col>
								<v-col cols="12"
									xl="2"
									class="offset-xl-1 text-right text-h6 text-primary d-flex align-center justify-end">
									<NuxtLink class="text-primary text-decoration-none"
										to="/apply">
										Or Sign Up
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
import { ref, computed } from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useField, useForm } from 'vee-validate'

const passwordShown = ref(false)

const { handleSubmit } = useForm({
	validationSchema: {
		username (value) {
			if (value?.length < 3) return `Username must be more than 2 characters.`
			if (!value) return `Username is required.`
			return true
		},
		password (value) {
			if (value?.length > 9) return true

			return `Password must be at least 9 characters.`
		},
	},
})

const auth = getAuth()
const username = useField(`username`)
const password = useField(`password`)
const logInError = ref(``)

const userLoginString = computed(() => {
	if(username?.value?.value && username?.value?.value.includes(`@`)) {
		return username?.value.value
	}
	else return `${username?.value.value}@CBArchives.com`
})

const logIn = handleSubmit(values => {
	signInWithEmailAndPassword(auth, userLoginString.value, password.value)
		.then(() => {
			// eslint-disable-next-line no-undef
			navigateTo(`/operations/control`)
		})
		.catch((error) => {
			if(error){
				logInError.value = `Sorry, something isn't quite right.`
			}
			console.log(error)
		})
})
</script>

