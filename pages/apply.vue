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
								<CBTextField
									label="Username *"
									name="username"
									hint="Your desired Operator identifier. Will be obfuscated and displayed alongside submissions."
									:error-messages="errors.username"
								/>
							</v-col>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<CBTextField
									label="Email"
									name="email"
									hint="An email to reach you at. Not necessary to make an account, though recommended."
									:error-messages="errors.email"
								/>
							</v-col>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<CBPasswordField
									name="password"
									label="Password *"
									hint="Make it secure."
									:errors="errors.password"
								/>
							</v-col>
							<v-col cols="12"
								xl="8"
								class="offset-xl-2">
								<CBPasswordField
									name="confirmPassword"
									label="Confirm Password *"
									hint="Retype your password to make sure it's as intended."
									:errors="errors.confirmPassword"
								/>
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
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit, values, errors } = useForm({
	initialValues: { 
		username: ``,
		email: ``,
		password: ``,
		confirmPassword: ``,
	},
	validationSchema: yup.object().shape({
		// alpha validation
		username: yup.string().matches(/^[a-zA-Z]+$/, `Username may only contain letters "a" to "z"`).min(5).max(20).required().label(`Username`),
		email: yup.string().email().required().label(`Email`),
		password: yup.string().min(9).max(20).required().label(`Password`),
		// confirmed validation on password field
		confirmPassword: yup.string().test(`passwords-match`, `Passwords must match`, value => { return values.password === value }).required().label(`Confirm Password`),
	}),
})

const auth = getAuth()

const logInError = ref(``)

const createUser = handleSubmit(values => {
	const email = values.email ? values.email : `${values.username}@CBArchives.com`
	createUserWithEmailAndPassword(auth, email, values.password)
		.then(() => {
			updateProfile(auth.currentUser, {
				displayName: values.username
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

