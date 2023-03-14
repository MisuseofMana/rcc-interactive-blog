<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="default">
		<BreadcrumbHeading text="ARTIFACTS"/>

		<div v-for="(items, outerIndex) in pages"
			:key="outerIndex + items.slug"
			class="mb-15 mt-15"
		>
			<!-- ARTIFACT REALM ICON -->
			<v-row class="px-sm-15"
				v-if="items.artifacts.length > 0">
				<v-spacer v-if="smAndDown"/>
				<v-col cols="8"
					sm="6"
					md="5"
					lg="3"
					xl="2"
					class="offset-xl-2"
					:class="smAndDown ? 'd-flex justify-center' : ''">
					<v-img class="abberation"
						aspect-ratio="1"
						:src="`/images/icons/${items.slug}.png`"
						alt="an icon representing the currently viewed realm">
					</v-img>
				</v-col>
			</v-row>

			<v-row class="mb-7 px-sm-15"
				v-if="items.artifacts.length > 0">
				<!-- ARTIFACT REALM DESCRIPTION -->
				<v-col cols="12"
					sm="8"
					md="12"
					xl="5"
					class="offset-sm-2 offset-md-0 offset-xl-2"
					:class="smAndDown ? 'text-center' : ''"
				>
					<h3 class="text-primary text-h3">
						{{ items.title }}
					</h3>
					<p class="text-primary text-body-1 mb-4">
						{{ items.subtitle }}
					</p>
					<p class="text-primary text-body-1 mb-8">
						{{ items.narrative }}
					</p>
					<v-icon class="p-0 mr-2"
						color="primary"
						v-for="(items, index) in items.iconNames"
						:key="items + index">mdi-{{ items }}</v-icon>
				</v-col>
			</v-row>
		
			<!-- ITERATE OVER ARTIFACTS -->
			<v-row class="px-sm-15">
				<v-col 
					v-for="(artifacts, innerIndex) in items.artifacts"
					:key="innerIndex"
					cols="12"
					sm="8"
					md="6"
					lg="6"
					xl="4"
					class="offset-sm-2 offset-md-0"
					:class="(innerIndex) % 2 === 0 || innerIndex === 0 ? `offset-xl-2` : ``">
					<v-card
						color="primary-darken-1"
						class="pa-5 text-primary"
						height="100%">
						<v-row dense>

							<v-col cols="12"
								md="12"
								:lg="artifacts?.imageVertical ? `6` : `12`"
								class="pa-5">
								<h4 class="text-h4 mb-8">{{ artifacts.title }}</h4>
								<p class="text-body-1 mb-3">{{ artifacts.description }}</p>
								<p class="text-body-1">{{ artifacts.description2 }}</p>
							</v-col>
							<v-col cols="12"
								md="12"
								:lg="artifacts?.imageVertical ? `6` : `12`"
							>
								<v-img class="artifactImage"
									contain
									:aspect-ratio="artifacts.imageVertical ? `1/5` : `8/3`"
									:src="`/images/artifacts/${artifacts.path}.jpg`"
									alt="an image representing an artifact of the realm"/>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { pages } from './realms.data'
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
</script>

<style lang="scss" scoped>
.artifactImage::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: inset 10px 10px 5px 2px #007d30, inset -10px -10px 5px 2px #007d30, inset 4px 4px 0px #007d30, inset -4px -4px 0px #007d30;
}
</style>