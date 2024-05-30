<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="default">
			<v-container class="my-5">
				<v-row align="center"
					class="mb-15">
					<v-col cols="3">
						<DisLogo/>
					</v-col>
					<v-col cols="9">
						<h1 class="text-h1 mb-5">Credits</h1>
						<p class="text-body-1 mb-10">The Directorate of Interrealm Studies recognizes the contributions of the following honorary Operators.</p>
						<p class="text-body-1 mb-1">Without the generosity of those listed below these archives would be comparatively mundane.</p>
					</v-col>
				</v-row>
				<v-row align="center"
					justify="center">
					<v-col cols="12"
						v-for="credit in realmCredits"
						sm="8"
						md="6"
						lg="6"
						xl="6"
						:key="credit.title">
						<v-card variant="outlined"
							class="pa-5 d-flex justify-space-around align-center">
							<div class="mr-3">
								<v-img class="abberation"
									aspect-ratio="1"
									max-height="100"
									min-width="100"
									min-height="100"
									max-width="100"
									:src="credit?.sigilImageLink"
									alt="an icon representing the currently viewed realm">
								</v-img>
							</div>
							<div>
								<p class="text-body-1 mb-2">{{ credit.title }}</p>
								<ExternalSiteButton class="mb-3"
									width="100%"
									:text="credit.audioAuthorName"
									:link-name="credit.audioAuthorLink" />
								<ExternalSiteButton text="CC License"
									width="100%"
									:link-name="credit.audioLicenseLink" />  
							</div>
						</v-card>
					</v-col>	
				</v-row>
				<v-row align="center"
					class="mb-8">
					<v-col cols="12">
						<h1 class="text-h1 mb-5">Foley</h1>
					</v-col>
				</v-row>
				<v-row align="center"
					justify="center">
					<v-col cols="12"
						v-for="credit in foleyCredits"
						sm="8"
						md="6"
						lg="6"
						xl="6"
						:key="credit.title">
						<v-card variant="outlined"
							class="pa-5 d-flex justify-space-around align-center">
							<div>
								<p class="text-body-1 mb-2">{{ credit.title }}</p>
								<ExternalSiteButton class="mb-3"
									width="100%"
									:text="credit.audioAuthorName"
									:link-name="credit.audioAuthorLink" />
								<ExternalSiteButton text="CC License"
									width="100%"
									:link-name="credit.audioLicenseLink" />  
							</div>
						</v-card>
					</v-col>	
				</v-row>
			</v-container>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { useRealmCredits } from '~/composables/firebase/useRealmNames'
import { useAudioStore } from '~/store/useAudioStore.js'

const audioStore = useAudioStore()
audioStore.$patch((state) => {
	state.currentSound = { 
		soundLink: null,
	}
})

const { realmCredits } = useRealmCredits()

const foleyCredits = ref([
	{
		title: 'Ringing Phone',
		audioAuthorLink: 'https://freesound.org/people/Werra/sounds/78565/',
		audioAuthorName: 'Werra',
		audioLicenseLink: 'https://creativecommons.org/licenses/by/3.0/',
	},
	{
		title: 'Keypad Tones',
		audioAuthorLink: 'https://freesound.org/people/Felfa/sounds/178817/',
		audioAuthorName: 'Felfa',
		audioLicenseLink: 'https://creativecommons.org/publicdomain/zero/1.0/',
	},
	{
		title: 'Phone Pickup',
		audioAuthorLink: 'https://freesound.org/people/TRP/sounds/616840/',
		audioAuthorName: 'TRP',
		audioLicenseLink: 'https://creativecommons.org/publicdomain/zero/1.0/',
	},
])

</script>

