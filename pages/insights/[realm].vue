<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="default">
		<v-row
			class="mt-1 mb-15">
			<v-col cols="12"
				md="5">
				<BackButton
					frontIcon="arrow-left"
					text="Abandon This Realm"
					linkName="/realms" />
			</v-col>
		</v-row>

		<v-row class="mb-1">
			<v-col cols="4"
				sm="5"
				md="4">
				<v-img class="abberation"
					max-height="500"
					max-width="500"
					:src="`/images/icons/${realm.slug}.png`"
					alt="a radial icon representing the realm you're visiting"></v-img>
			</v-col>
			<v-col cols="12"
				sm="7"
				md="6"
				class="mb-2">
				<div>
					<h2 class="text-h2 mb-2">{{ realm.title }}</h2>
					<h3 class="text-h3 mb-4">{{ realm.subtitle }}</h3>
					<p class="text-body-1 mb-4">{{ realm.narrative }}</p>
					<div class="d-flex justify-space-between align-center">
						<div>
							<v-icon class="mr-4"
								:size="iconWidth"
								v-if="realm.publishedRecently"
								color="yellow">mdi-alert-decagram</v-icon>
							<div v-if="realm?.iconNames?.length">
								<v-icon class="my-5"
									:size="iconWidth"
									v-for="(items, index) in realm?.iconNames.split(',')"
									:key="items + index"
									color="primary">mdi-{{ items }}</v-icon>
							</div>
						</div>
						<p class="text-h4">{{ useLastUpdated(realm.lastUpdated).lastUpdated.value }}</p>
					</div>
				</div>
			</v-col>
		</v-row>

		<v-row class="mb-10">
			<v-col cols="12"
				sm="12"
				lg="6"
				v-for="(item, index) in photos"
				:key="index + `photo`"
				class="d-flex justify-center flex-column">
				<v-img contain
					class="realmImage"
					lazy-src="/images/mocks/placeholder-wide.jpg"
					aspect-ratio="1.5"
					:src="item.imageLink" />	
				<span class="pl-2 mr-5 mt-n2 mb-1 zUp text-subtitle-2 text-subtitle-1 d-flex align-center justify-space-between">
					<p class="mt-2">
						{{ item.submittedBy }}
					</p>
					<v-badge floating
						dot
						color="primary"
						v-if="item.hasSemiotic"></v-badge>
				</span>
				<p class="text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"> {{ item.lore }}</p>
			</v-col>
		</v-row>

		<v-row dense
			class="mb-1">
			<v-col cols="5"
				class="offset-xl-8">
				<BackButton
					frontIcon="arrow-left"
					text="Return From This Realm"
					linkName="/realms" />
			</v-col>
		</v-row>
	</NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRealmData, useRealmPhotos } from '~/composables/firebase/useRealmData'

// eslint-disable-next-line no-undef
const route = useRoute()
const { smAndDown } = useDisplay()
const { realm } = useRealmData(route.params.realm)
const { photos } = useRealmPhotos(`bizOcbX97wMTvAR`)

const iconWidth = computed(() => {
	return smAndDown ? `40px` : `32px`
})
</script>

<style scoped>
.minHeight {
	min-height: 150px;
}
</style>