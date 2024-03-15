<template>
	<div>
		<NuxtLayout name="signup">
			<v-container class="my-5"
				v-if="passedCheck">
				<v-row>
					<v-col cols="12">
						<v-card
							variant="outlined"
							color="primary"
							width="100%"
							class="px-15 py-6 text-primary">
							<h1 class="text-h1 text-center mb-5">SIGN UP</h1>
							<p class="text-body-1 mb-3">Well done, you are hereby granted category one Operator clearance, pending review.</p>
							<p class="text-body-1 mb-10">Submit the following form and await further instructions.</p>
							<form>
								<v-row>
									<v-col cols="12"
										xl="8"
										class="offset-xl-2">
										<CBTextField
											label="Username *"
											name="username"
											hint="Your desired Operator identifier. Will be displayed alongside your realm submissions."
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
											autocomplete="off"
											hint="Make it secure."
											:errors="errors.password"
										/>
									</v-col>
									<v-col cols="12"
										xl="8"
										class="offset-xl-2">
										<CBPasswordField
											name="confirmPassword"
											autocomplete="off"
											label="Confirm Password *"
											hint="Retype your password to make sure it's as intended."
											:errors="errors.confirmPassword"
										/>
									</v-col>
									<v-col cols="12"
										xl="5"
										class="offset-xl-2 mb-5">
										<p class="text-center text-deep-orange-darken-4 text-body-1 mb-3">{{ logInError }}</p>
										<BackButton
											@click="createUser"
											caution
											disabled
											color="primary-darken-1 mb-5"
											class="text-primary"
											text="Apply to the Operations Team"/>
									</v-col>
									<v-col cols="12"
										xl="3"
										class="mb-10 text-right text-subtitle-1 text-primary">
										<NuxtLink class="text-primary text-decoration-none"
											to="/login">
											Or Log In
										</NuxtLink>
									</v-col>
								</v-row>
							</form>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useFirestore } from 'vuefire'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

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
		email: yup.string().email().label(`Email`),
		password: yup.string().min(9).max(20).required().label(`Password`),
		// confirmed validation on password field
		confirmPassword: yup.string().test(`passwords-match`, `Passwords must match`, value => { return values.password === value }).required().label(`Confirm Password`),
	}),
})

const auth = getAuth()
const db = useFirestore()

const logInError = ref(``)
const passedCheck = ref(false)

onBeforeMount(() => {
	if(localStorage.passedExam === `true`) {
		passedCheck.value = true
		return
	}
	// eslint-disable-next-line no-undef
	navigateTo(`/brainwash`)
})

const createUser = handleSubmit(values => {
	const email = values.email ? values.email : `${values.username}@CBArchives.com`
	createUserWithEmailAndPassword(auth, email, values.confirmPassword)
		.then(() => {
			updateProfile(auth.currentUser, {
				displayName: values.username
			})
			setDoc(doc(db, `users`, auth.currentUser.uid), {
				displayName: values.username,
				
			})
			// eslint-disable-next-line no-undef
			navigateTo(`/operations/control`)
		})
		.catch((error) => {
			if(error){
				logInError.value = `Sorry, something isn't quite right.`
			}
		})
})
</script>

