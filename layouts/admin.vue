<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<v-app>
		<v-container>
			<v-row>
				<v-col cols="12"
					sm="12"
					md="12"
					lg="12"
					xl="8"
					class="offset-xl-2">
					<p
						v-if="showDebug"
						class="text-deep-orange-darken-4 text-body-1"
					>
						{{ name }}
					</p>
					<v-row class="mx-1">
						<v-col cols="12"
							sm="6"
							md="4"
							xl="4">
							<BackButton
								warning
								variant="outlined"
								text="Leave Operations"
								front-icon="arrow-left"
								link-name="/brainwash" />
						</v-col>
						<v-col cols="12"
							sm="6"
							md="4"
							xl="4"
							class="offset-md-4">
							<BackButton
								variant="outlined"
								text="Sign Out"
								front-icon="radiology-box-outline"
								@click="logOut()"/>
						</v-col>
					</v-row>

					<v-main class="text-primary">
						<slot class="mt-8"></slot>
					</v-main>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth"
const showDebug = false
const logOut = () => {
	const auth = getAuth()
	signOut(auth).then(() => {
		// eslint-disable-next-line no-undef
		navigateTo(`/brainwash`)
	}).catch((error) => {
		console.log(error)
	})
}
</script>


<style scoped>
v-app {
	overflow:hidden;
	max-width:100vw;
	max-height:100vh;
	margin:0;
	padding:0;
}

.blur-enter-active,
.blur-leave-active {
  transition: all 200ms;
}
.blur-enter-from,
.blur-leave-to {
  opacity: .1;
  filter: blur(.8rem);
}
</style>