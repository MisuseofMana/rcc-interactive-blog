<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="default">
			<BreadcrumbHeading text="INTRO"/>
			<v-card  color="primary-darken-1"
				class="pa-8 py-12 mb-15 text-primary">
				<v-row
					:align="mdAndUp ? 'center' : ''"
					class="mb-sm-10 mb-md-5"
					dense
					no-gutter>
					<v-col cols="12"
						md="10"
						class="mb-sm-10 mb-md-0 offset-sm-1"
					>
						<h3 class="text-h4 mb-10">
							There are realms overlapping your own, they churn & muddy your unique experiences.
						</h3>
					</v-col>
					<v-col cols="8"
						md="8"
						class="offset-2 mb-10">
						<p class="text-body-1 mb-5">
							For now, these archives contain imagery, observations, and solitary musings pertaining to the investigation of these realms. The realms are documented by an individual Operator, though recruitment is on the near horizon.
						</p>

						<p class="text-body-1 mb-5">
							The contents within are established protocols, terminology, realm classifications, and limited briefing of the realms.
						</p>

						<p class="text-body-1 mb-5">
							Return often, new realms are added as they are discovered. Operator Exams will begin in early 2024.
						</p>
					</v-col>
					<v-col cols="12"
						md="4"
						class="offset-md-4"
					>
						<v-img 
							class="abberation"
							max-width="600px" 
							:src="`/images/mocks/itemdumpBackup.png`"
							alt="a scrap of paper with a dotted circle around a geometric shape. a barcode is on the left of the paper surrounding the word semiotic."
						/>
					</v-col>
				</v-row> 
			</v-card>
			<v-row class="text-primary mb-15">
				<v-col cols="12"
					sm="10"
					class="offset-sm-1">
					<v-img v-if="smAndUp"
						class="mt-9 text-center abberation"
						contain
						max-width="`1037`"
						max-height="347"
						aspect-ratio="1037/347"
						src="/images/mocks/message.png"
						alt="a message written in a strange alphabet"></v-img>
					<v-img v-else
						class="mt-9 text-center abberation"
						contain
						max-width="550"
						max-height="528"
						aspect-ratio="390/528"
						src="/images/mocks/mobilemessage.png"
						alt="a message written in a strange alphabet"></v-img>
				</v-col>
			</v-row>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { useSiteStore } from '~/store/useSiteStore.js'

const { mdAndUp, smAndUp } = useDisplay()
const siteStore = useSiteStore()
siteStore.$patch({currentSound: `audio/intro.mp3`, volume: 0.08})
</script>

<style scoped>
.colorize {
    filter: hue-rotate(190deg) saturate(1.4)
}
</style>
