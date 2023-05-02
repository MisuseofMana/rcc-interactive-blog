<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12">
					<v-card
						variant="outlined"
						color="primary"
						width="100%"
						class="pa-15 text-primary">
						<h1 class="text-h1 text-center mb-10">LOG IN</h1>
						<div>
							<v-row>
								<v-col cols="12"
									xl="8"
									class="offset-xl-2">
									<v-text-field variant="outlined"
										label="Username or Email *"
										hint="Your assigned Operator identifier."
										:error-messages="errors.Username"
										v-model="Username.value.value"></v-text-field>
								</v-col>	
								<v-col cols="12"
									xl="8"
									class="offset-xl-2">
									<v-text-field variant="outlined"
										label="Password *"
										:append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
										:type="passwordShown ? 'text' : 'password'"
										hint="Your password."
										@click:append="passwordShown = !passwordShown"
										:error-messages="errors.Password"
										v-model="Password.value.value"></v-text-field>
								</v-col>
								<v-col cols="12"
									xl="5"
									class="offset-xl-2">
									<p class="text-center text-deep-orange-darken-4 text-body-1 mb-3">{{ logInError }}</p>
									<BackButton
										@click="logIn"
										color="primary-darken-1"
										class="text-primary"
										text="Log In"/>
								</v-col>
								<v-col cols="12"
									xl="3"
									class="text-right text-subtitle-1 text-primary d-flex align-center justify-end">
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

const { handleSubmit, errors } = useForm({
	validationSchema: {
		Username: {
			required: [true, 'Username'],
			alpha: true,
			min: 5,
			max: 20,
		},
		Password: {
			required: [true, 'Password'],
			min: 9,
			max: 20,
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

