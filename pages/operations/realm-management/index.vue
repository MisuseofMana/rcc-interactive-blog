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
					v-for="(realm, index) in realmList"
					sm="8"
					md="6"
					lg="3"
					xl="3"
					class="mb-10 grow"
					:class="index === 0 || index % 2 === 0 ? `offset-sm-2 offset-md-3 offset-lg-0` : ``"
					:key="realm.title"
					@click="sendToEditRealm(realm.slug)">
					<h2 class="text-h6 text-primary">{{ realm.abbTitle ? realm.abbTitle : realm.title }}</h2>
					<div class="mt-1 mb-2">
						<v-icon
							:size="iconWidth"
							v-if="useLastUpdated(realm.lastUpdated).isRecent.value"
							color="yellow">mdi-alert-decagram</v-icon>
						<v-icon v-if="realm.iconNames"
							:size="iconWidth"
							v-for="(items, index) in realm?.iconNames.split(',')"
							:key="items + index"
							color="primary">mdi-{{ items }}</v-icon>
						<v-icon v-else
							:size="iconWidth"
							v-for="(icon, index) in ['help', 'help', 'help']"
							:key="realm.slug + index"
							color="primary">mdi-{{ icon }}</v-icon>
					</div>
					<v-img class="abberation"
						max-height="500"
						max-width="400"
						:src="realm.sigilImageLink ||`/images/icons/placeholder-sigil.png`"
						alt="a radial icon representing the realm you're visiting"></v-img>
				</v-col>	
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'
import { pages } from '~/data/realms.data.js'
import { useManageableRealms } from '~/composables/firebase/useRealmNames'
import { useLastUpdated } from '~/composables/useLastUpdated'
import { useClassifyRealm } from '~/composables/useClassifyRealm'
import { useDisplay } from 'vuetify'

// eslint-disable-next-line no-undef
definePageMeta({
	middleware: [`auth`],
})

const { realmList } = useManageableRealms()

const { smAndDown } = useDisplay()
const iconWidth = computed(() => {
	return smAndDown ? `30px` : `20px`
})

const { classifiedRealms } = useClassifyRealm(pages)

const sendToEditRealm = (slug) => {
	// eslint-disable-next-line no-undef
	navigateTo(`/operations/realm-management/${slug}`)
}
</script>

