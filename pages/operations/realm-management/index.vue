<!-- Add Data Table -->
<!-- Add Pagination -->
<!-- Limit to 10 realms at a time -->
<!-- Hook up to a BE -->

<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="sub-admin">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12"
					class="">
					<h1 class="text-h1 text-center mb-5">Realm Management</h1>
					<p class="text-body-1 text-center mb-10">Choose a realm to manage.</p>
				</v-col>
			</v-row>
			<v-row align="center"
				justify="center">
				<v-col cols="12"
					v-for="(realm, index) in accessibleRealms"
					sm="8"
					md="6"
					lg="3"
					xl="3"
					class="mb-10 grow"
					:class="index === 0 || index % 2 === 0 ? `offset-sm-2 offset-md-3 offset-lg-0` : ``"
					:key="realm.title"
					@click="sendToEditRealm(realm.slug)">
					<h2 v-if="realm.abbTitle"
						class="text-h6 text-primary">{{ realm.abbTitle }}</h2>
					<h2 v-else
						class="text-h6 text-primary">{{ realm.title }}</h2>
					<v-icon class="mr-4"
						:size="iconWidth"
						v-if="realm.publishedRecently"
						color="yellow">mdi-alert-decagram</v-icon>
					<v-icon class="mt-1 mb-4"
						:size="iconWidth"
						v-for="(items, index) in realm.iconNames"
						:key="items + index"
						color="primary">mdi-{{ items }}</v-icon>
					<v-img class="abberation"
						max-height="500"
						max-width="400"
						:src="`/images/icons/${realm.slug}.png`"
						alt="a radial icon representing the realm you're visiting"></v-img>
				</v-col>	
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'
import { pages } from '~/data/realms.data.js'
import { useClassifyRealm } from '~/composables/useClassifyRealm'
import { useDisplay } from 'vuetify'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const { smAndDown } = useDisplay()
const iconWidth = computed(() => {
	return smAndDown ? `30px` : `20px`
})

const { classifiedRealms } = useClassifyRealm(pages)
const accessibleRealms = computed(() => {
	const destructableRealmsArray = [...classifiedRealms.value]
	destructableRealmsArray.splice(destructableRealmsArray.indexOf(item => item.abbTitle === `Redacted`))[0]
	return destructableRealmsArray
})
const sendToEditRealm = (slug) => {
	// eslint-disable-next-line no-undef
	navigateTo(`/operations/realm-management/${slug}`)
}
</script>

