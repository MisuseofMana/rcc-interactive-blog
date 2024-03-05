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

					<h1 class="text-primary mb-3"
						:class="smAndDown ? ' text-center text-h1' : 'text-h1'">
						CRICKBURROW ARCHIVES
					</h1>

					<SiteNavigation />

					<v-main class="text-primary">
						<slot class="mt-8"></slot>
					</v-main>
						
					<SiteNavigation alignRight/>
			
					<v-footer
						class="d-flex align-center pa-0 mt-15 mb-5"
						:class="smAndDown ? 'justify-center flex-column' : 'justify-end'"
						color="background"
					>
						<div class="mr-md-5 mb-3 mb-md-0">
							<v-img contain
								width="100px"
								height="20px"
								src="/images/mocks/observe.png"
								alt="another message written in an odd alphabet"/>
						</div>
						<div class="text-primary text-body-1 mr-0 mr-md-5 mb-3 mb-md-0">
							CRICKBURROW, &copy;2023 
						</div>
						<v-icon size="large"
							class="mr-0 mr-md-5 mb-8 mb-md-0"
							color="primary">mdi-eye-circle</v-icon>
						<div class="mr-2 mb-8 mb-md-0">
							<ExternalSiteButton text="SeanYager.com"
								link-name="https://www.seanyager.com" />
						</div>
						<div>
							<BackButton
								text="/credits"
								:link-name="`/credits`" />
						</div>
					</v-footer>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { usePageAudio } from '~/composables/usePageAudio'
usePageAudio()
const { smAndDown, name } = useDisplay()
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