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
									<CBTextField
										label="Username *"
										name="username"
										hint=""
										:error-messages="errors.username"
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
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit, values, errors } = useForm({
	initialValues: { 
		username: ``,
		email: ``,
	},
	validationSchema: yup.object().shape({
		username: yup.string().matches(/^[a-zA-Z]+$/, `Username may only contain letters "a" to "z"`).min(5).max(20).required().label(`Username`),
		password: yup.string().min(9).max(20).required().label(`Password`),
	})
})

const auth = getAuth()
const logInError = ref(``)

const userLoginString = computed(() => {
	if(values.username && values.username.includes(`@`)) {
		return values.username
	}
	else return `${values.username}@CBArchives.com`
})

const logIn = handleSubmit(values => {
	signInWithEmailAndPassword(auth, userLoginString.value, values.password)
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

