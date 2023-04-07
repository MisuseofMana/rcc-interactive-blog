<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="default">
		<v-row
			class="mt-1 mb-15">
			<v-col cols="12"
				md="4">
				<BackButton
					frontIcon="mdi-arrow-left"
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
					:src="`/images/icons/${currentRealm.slug}.png`"
					alt="a radial icon representing the realm you're visiting"></v-img>
			</v-col>
			<v-col cols="12"
				sm="7"
				md="5"
				class="mb-2">
				<div>
					<h2 class="text-h2">{{ currentRealm.title }}</h2>
					<h3 class="text-h3">{{ currentRealm.subtitle }}</h3>
					<p class="text-body-1">{{ currentRealm.narrative }}</p>
					<div class="d-flex justify-space-between align-center ">
						<p class="text-subtitle-1">{{ currentRealm.lastUpdated }}</p>
						<p class="text-subtitle-1"></p>
					</div>

					<v-icon class="mr-4"
						:size="iconWidth"
						v-if="currentRealm.publishedRecently"
						color="yellow">mdi-alert-decagram</v-icon>
					<v-icon class="my-5"
						:size="iconWidth"
						v-for="(items, index) in currentRealm.iconNames"
						:key="items + index"
						color="primary">mdi-{{ items }}</v-icon>
				</div>
			</v-col>
		</v-row>

		<v-row class="mb-10">
			<v-col cols="12"
				sm="12"
				lg="6"
				v-for="(item, index) in currentRealm.documents"
				:key="index + item.filePath"
				class="d-flex justify-center flex-column">
				<v-img contain
					class="realmImage"
					lazy-src="/images/mocks/placeholder.jpg"
					aspect-ratio="1.5"
					:src="`/images/${currentRealm.slug}/${item.filePath}.jpg`" />	
				<span class="pl-2 mr-5 mt-n2 mb-1 zUp text-primary text-subtitle-1 d-flex align-center justify-space-between">
					<p>
						{{ item.operator }}
					</p>
					<v-badge floating
						dot
						color="primary"
						v-if="item.hint"></v-badge>
				</span>
				<p class="text-primary minHeight text-body-1 mx-8 px-5 py-5 text-center"> {{ item.copy }}</p>
			</v-col>
		</v-row>

		<v-row dense
			class="mb-1">
			<v-col cols="4"
				class="offset-xl-8">
				<BackButton
					frontIcon="mdi-arrow-left"
					text="Return From This Realm"
					linkName="/realms" />
			</v-col>
		</v-row>
	</NuxtLayout>
</template>

<script setup>
import { pages } from '../realms.data'
import { onMounted, ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useClassifyRealm } from '~/composables/useClassifyRealm'

const { smAndDown } = useDisplay()
const { classifiedRealms } = useClassifyRealm(pages)

// eslint-disable-next-line no-undef
const route = useRoute()

const currentRealm = ref({})

onMounted(() => {
	currentRealm.value = classifiedRealms.value.find(object => object.slug === route.params.realm)
})

const iconWidth = computed(() => {
	return smAndDown ? `40px` : `32px`
})
</script>

<style scoped>
.minHeight {
	min-height: 150px;
}
</style>