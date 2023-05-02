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
						<h1 class="text-h1 text-center mb-10">SIGN UP</h1>
						<v-row>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<v-text-field variant="outlined"
									label="Username *"
									hint="Your desired Operator identifier. Will be obfuscated and displayed alongside submissions."
									:error-messages="errors.Username"
									v-model="Username.value.value"
								></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<v-text-field variant="outlined"
									label="Email"
									hint="An email to reach you at. Not necessary to make an account, though recommended."
									:error-messages="errors.Email"
									v-model="Email.value.value"
								></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<v-text-field variant="outlined"
									label="Password *"
									:append-icon="passwordShown ? 'mdi-eye' : 'mdi-eye-off'"
									:type="passwordShown ? 'text' : 'password'"
									@click:append="passwordShown = !passwordShown"
									hint="Make it secure."
									:error-messages="errors.Password"
									v-model="Password.value.value"></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<v-text-field variant="outlined"
									name="Confirm Password"
									label="Confirm Password *"
									hint="Confirm your password."
									:append-icon="confirmPasswordShown ? 'mdi-eye' : 'mdi-eye-off'"
									:type="confirmPasswordShown ? 'text' : 'password'"
									@click:append="confirmPasswordShown = !confirmPasswordShown"
									:error-messages="errors.ConfirmPassword"
									v-model="ConfirmPassword.value.value"></v-text-field>
							</v-col>
							<v-col cols="12"
								xl="5"
								class="offset-xl-2">
								<p class="text-center text-deep-orange-darken-4 text-body-1 mb-3">{{ logInError }}</p>
								<BackButton
									@click="createUser"
									color="primary-darken-1"
									class="text-primary"
									text="Apply to the Operations Team"/>
							</v-col>
							<v-col cols="12"
								xl="3"
								class="text-right text-subtitle-1 text-primary d-flex align-start justify-end">
								<NuxtLink class="text-primary text-decoration-none"
									to="/login">
									I'm Already Registered
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
import { useField, useForm } from 'vee-validate'


const passwordShown = ref(false)
const confirmPasswordShown = ref(false)

const { handleSubmit, errors, } = useForm({
	validationSchema: {
		Username: {
			required: [true, 'Username'],
			alpha: true,
			min: 5,
			max: 20,
		},
		Email: {
			email: true,
		},
		Password: {
			required: [true, 'Password'],
			min: 9,
			max: 20,
		},
		ConfirmPassword: {
			required: [true, 'Confirm Password'],
			confirmed: ['@Password', 'Confirm Password', 'Password'],
		}
	},
})

const auth = getAuth()
const Username = useField(`Username`)
const Password = useField(`Password`)
const Email = useField(`Email`)
const ConfirmPassword = useField(`ConfirmPassword`)

const logInError = ref(``)

const createUser = handleSubmit(values => {
	const fakeUserEmail = `${values.Username}@CBArchives.com`

	createUserWithEmailAndPassword(auth, fakeUserEmail, values.Password)
		.then(() => {
			updateProfile(auth.currentUser, {
				displayName: values.Username
			})
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

