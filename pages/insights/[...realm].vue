<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="default">
		<v-row no-gutters
			class="mb-10 mx-10 mx-md-0">
			<v-col cols="12">
				<BackButton class="mt-8"
					:width="smAndDown ? `100%` : ``"
					frontIcon="mdi-arrow-left"
					text="Abandon This Realm"
					linkName="/realms" />
			</v-col>
		</v-row>

		<v-row class="mb-1">
			<v-col cols="12"
				sm="5"
				md="4"
				class="mb-5 px-15 px-sm-5 mb-md-0 ">
				<v-img class="abberation"
					max-height="500"
					max-width="500"
					:src="`/images/icons/${currentRealm.slug}.png`"
					alt="a radial icon representing the realm you're visting"></v-img>
			</v-col>
			<v-col cols="12"
				sm="7"
				md="5"
				class="mb-2">
				<div>
					<h2 class="text-h2">{{ currentRealm.title }}</h2>
					<h3 class="text-h3 mb-7">{{ currentRealm.subtitle }}</h3>
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

		<v-row class="mb-10"
			no-gutters
			dense>
			<v-col cols="12"
				sm="12"
				lg="6"
				v-for="(item, index) in currentRealm.documents"
				:key="index + item.filePath"
				class="d-flex justify-center flex-column mb-10">
				<v-img contain
					class="realmImage"
					lazy-src="/images/mocks/placeholder.jpg"
					aspect-ratio="1.5"
					:src="`/images/${currentRealm.slug}/${item.filePath}.jpg`" />
				<v-card
					color="primary-darken-1"
					class="mx-8 d-flex align-center justify-center px-5 py-5">
					<p class="text-primary text-body-1 text-center"> {{ item.copy }}<v-icon class="ml-1 mt-2"
						v-if="item.hint"
						size="6px"
						color="primary">mdi-eye-circle</v-icon></p>

				</v-card>
			</v-col>
		</v-row>

		<v-row class="mb-8">
			<v-col class="d-flex justify-end">
				<BackButton frontIcon="mdi-arrow-left"
					:width="smAndDown ? `100%` : ``"
					text="Return from this Realm"
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
	currentRealm.value = classifiedRealms.value.find(object => object.slug === route.params.realm[0])
})

const iconWidth = computed(() => {
	return smAndDown ? `40px` : `32px`
})
</script>

<style scoped>
.realmImage::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: inset 30px 30px 10px #101010, inset -30px -30px 10px #101010, inset 4px 4px 0px #101010, inset -4px -4px 0px #101010;
}
</style>