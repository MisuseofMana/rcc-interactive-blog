<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="default">
			<BreadcrumbHeading text="BRIEFING"/>
			<v-card  color="primary-darken-1"
				class="pa-8 py-12 text-primary">
				<v-row
					:align="mdAndUp ? 'center' : ''"
					class="mb-sm-10 mb-md-5 text-sm-center text-md-left">
					<v-col cols="12"
						sm="8"
						md="6"
						lg="4"
						xl="4"
						class="mb-sm-10 mb-md-0 offset-sm-2 offset-md-1"
					>
						<h3 class="text-h3">
							Hello there.
						</h3>

						<p class="text-body-1">Good of you to arrive on time, you're officially on the clock.</p>
					</v-col>
					<v-col cols="12"
						sm="8"
						md="4"
						lg="3"
						xl="3"
						class="offset-sm-2 offset-md-0 offset-lg-3"
					>
						<v-img 
							class="abberation"
							max-width="600px" 
							:src="`/images/mocks/itemdumpBackup.png`"
							alt="a scrap of paper with a dotted circle around a geometric shape. a barcode is on the left of the paper surrounding the word semiotic."
						/>
					</v-col>
				</v-row> 

				<v-row class="text-sm-left">
					<v-col cols="12"
						sm="10"
						md="10"
						lg="10"
						class="offset-sm-1 offset-md-1 text-body-1 mb-5">
						<h3 class="text-h3">

						</h3>
						<p class="mb-5">
							Effective immediately, you are granted <strong class="font-weight-black">Trial Operator</strong> status. To obtain additional clearance please study the <strong class="font-weight-black">semiotics</strong> present in each documented realm, accessible through the /REALMS gallery. Subsequently complete the Operator Exam.
						</p>
						<p class="mb-5">
							<strong class="font-weight-black">Semiotics</strong> in the realms can provide insight if you are inclined to notice. Seek them out in the gallery and your own travels. Glean what you can from the records of past and present <strong class="font-weight-black">Operators</strong>.
						</p>
						<p>
							The Crickburrow Archives are in the process of documenting new realms as of <strong class="font-weight-black">MAR 05 2023</strong>, keep a watchful  <strong class="font-weight-black">eye.</strong>
						</p>
					</v-col>
				</v-row>

				<v-row class="">
					<v-col cols="12"
						sm="10"
						md="10"
						lg="10"
						class="text-body-1 offset-sm-1 offset-md-1">
						<h3 class="text-h3 mb-8">
							First and foremost, you should begin with an open mind.
						</h3>
						<p class="mb-5">
							Start by taking notes, capture moments. Build strong foundations for your future travels through your age. Explore and tune yourself to the nuance of each realm.
						</p>
						<p class="mb-5">Spread roots as you are able. Experience anywhere you've not experienced. Explore the aggregate of adjacent realities that flow beside ours (yours). </p>
						<p class="mb-5 text-body-1">These archives will prepare you to gain insights by navigating the overlapping realms.</p>
						<p>The <strong class="font-weight-black">Crickburrow Archives</strong> are meant to be used as a field guide. No matter your encounters in the ever growing catalogue of realms, studying here will prepare you for any cross-realm travel.
						</p>
					</v-col>
				</v-row>

				<v-row
					class="mb-8 mb-md-0">
					<v-col cols="12"
						sm="10"
						md="10"
						lg="10"
						class="mb-8 mb-md-8 offset-sm-1">
						<h4 class="text-h4 mb-8">
							There are no prerequisites for accessing the Crickburrow Archives at a <strong class="font-weight-black">restricted</strong> level. 
						</h4>
						<p class="text-body-1">
							Best of luck. Your experience will be your own.	
						</p>
					</v-col>
					<v-col cols="12"
						sm="8"
						md="6"
						lg="6"
						class="offset-sm-2 offset-md-3 offset-lg-3">
						<v-img 
							class="abberation"
							max-height="488px"
							max-width="592px"
							src="/images/mocks/hidscrap1.png"
							alt="a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper."
						/>
					</v-col>
				</v-row>

			</v-card>
			<v-row class="text-primary mb-5">
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
const { mdAndUp, smAndUp } = useDisplay()


// TODO
// import pageMusic from '@/plugins/pageMusic'
// music: `aboutTheme`,
// transition: `fadeSwitch`,
// mixins: [pageMusic],
</script>

<style scoped>
.colorize {
    filter: hue-rotate(190deg) saturate(1.4)
}
</style>
