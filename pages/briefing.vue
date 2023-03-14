<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="default">
			<BreadcrumbHeading text="BRIEFING"/>
			<v-card  color="primary-darken-1"
				class="pa-8 py-12">
				<v-row class="mt-5">
					<v-spacer/>
					<v-col cols="12"
						md="12"
						lg="8"
						class="text-primary">
						<v-row
							class="mb-lg-15">
							<v-spacer/>
							<v-col cols="12"
								sm="8"
								md="6"
								lg="6"
								xl="12"
								class="d-flex justify-center"
							>
								<v-img 
									class="abberation"
									max-width="472px" 
									max-height="311px"
									:src="`/images/mocks/itemdumpBackup.png`"
									alt="a scrap of paper with a dotted circle around a geometric shape. a barcode is on the left of the paper surrounding the word semiotic."
								/>
							</v-col>
							<v-col cols="12"
								sm="12"
								md="5"
								lg="6"
								xl="12"
								class="d-flex justify-center"
							>
								<h3 class="text-h3">
									Very good, you made it here.
								</h3>
							</v-col>
							<v-spacer/>   
						</v-row> 

						<v-row class="mb-lg-15">
							<v-col cols="12"
								sm="12"
								md="6"
								class="text-body-1">
								<h3 class="text-h3 mb-3">
									This may be your calling. 
								</h3>
								<h4 class="text-h4 mb-5">
									Keep an open mind.
								</h4>
                            
								<p class="mb-3">
									Start by journaling, capture moments. Build strong foundations for your future travels through age. Explore and tune yourself to the nuance of your own experience.
								</p>
								<p class="mb-3">Spread roots as you are able. Experience anywhere you've not experienced. Explore the aggregate of adjacent realities that flow beside ours (yours). </p>
							</v-col>
							<v-spacer v-if="lgAndUp"/>
							<v-col cols="12"
								sm="12"
								md="5"
								class="text-body-1">
								<h3 class="mb-5 text-h3">These archives will prepare you to gain insights by navigating the overlapping realms.</h3>
								<p>The <strong class="font-weight-black">Crickburrow Archives</strong> are meant to be used as a field guide. No matter your encounters in the ever growing catalogue of realms, you will be prepared for what you find.
								</p>
							</v-col>
						</v-row>

						<v-row
							class="mb-lg-15"
							align="center">
							<v-spacer/>
							<v-col cols="12"
								sm="12"
								md="5">
								<v-img 
									class="abberation"
									max-height="488px"
									max-width="592px"
									src="/images/mocks/hidscrap1.png"
									alt="a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper."
								/>
							</v-col>
							<v-spacer v-if="lgAndUp"/>
							<v-col cols="12"
								sm="12"
								md="5">
								<h4 class="text-h4">
									<strong class="font-weight-black">Restricted</strong>  access to Crickburrow's archives has no prerequisites.
								</h4>
							</v-col>
							<v-spacer/>
						</v-row>

						<v-row>
							<v-spacer/>
							<v-col cols="12"
								sm="12"
								md="8"
								class="text-body-1 mb-5">
								<p class="mb-3">
									Effective immediately, you are granted <strong class="font-weight-black">Trial Operator</strong> status. To obtain additional clearance, study the <strong class="font-weight-black">Semiotics</strong> within the /REALMS gallery.
								</p>
								<p class="mb-3">
									<strong class="font-weight-black">Semiotics</strong> in the realms will provide insight, seek them out in your own travels and glean what you can from the records of past and present Operators.
								</p>
                                
								<p class="mb-3">
									The Crickburrow Archives are in the process of documenting new realms as of <strong class="font-weight-black">MAR 05 2023</strong>, keep a watchful  <strong class="font-weight-black">eye.</strong>
								</p>
							</v-col>
							<v-spacer/>
						</v-row>

						<div class="text-primary mb-5">
							<div class="d-flex align-center">
								<v-img v-show="mdAndUp"
									class="mt-9 text-center abberation"
									contain
									width="`1037`"
									height="347"
									aspect-ratio="1037/347"
									src="/images/mocks/message.png"
									alt="a message written in a strange alphabet"></v-img>
								<v-img v-show="smAndDown"
									class="mt-9 text-center abberation"
									contain
									width="390"
									height="528"
									aspect-ratio="390/528"
									src="/images/mocks/mobilemessage.png"
									alt="a message written in a strange alphabet"></v-img>
							</div>
						</div>
					</v-col>
					<v-spacer/>
				</v-row>
			</v-card>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp, lgAndUp, smAndDown } = useDisplay()

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
