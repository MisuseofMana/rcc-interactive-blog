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
							xl="3">
							<BackButton
								warning
								variant="outlined"
								text="Leave Sign Up"
								front-icon="arrow-left"
								link-name="/brainwash" />
						</v-col>
					</v-row>

					<v-main class="text-primary">
						<slot class="mt-8"></slot>
					</v-main>
						
			
					<v-footer
						class="d-flex flex-column align-end pa-0 mb-5"
						:class="smAndDown ? 'justify-center flex-column' : 'justify-end'"
						color="background"
					>
						<div class="text-primary text-body-1 mr-0 mr-md-5 mb-3">
							CRICKBURROW, &copy;2023 
						</div>
						<div class="text-primary text-body-1 mr-0 mr-md-5 mb-1">
							Privacy Policy
						</div>
						<div class="text-primary text-body-2 mr-0 mr-md-5">
							Crickburrow will <strong>never</strong> sell your information.
						</div>
					</v-footer>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown, name } = useDisplay()
const showDebug = false
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