<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="sub-admin">
			<v-container class="my-5">
				<v-row>
					<v-col cols="12">
						<h1 class="text-h1 text-center mb-5">Realm Management</h1>
						<p class="text-body-1 text-center mb-10">Choose a realm to manage.</p>
					</v-col>
				</v-row>
				<v-row align="center"
					justify="center">
					<v-col cols="12"
						v-for="realm in realmList"
						sm="8"
						md="6"
						lg="6"
						xl="6"
						class="mb-5"
						:key="realm.title">
						<v-card variant="outlined"
							class="pa-5">
							<div class="d-flex">
								<div class="mr-3">
									<v-img class="abberation cursor"
										max-height="500"
										min-width="100"
										min-height="100"
										max-width="400"
										:src="realm.sigilImageLink ||`/images/icons/placeholder-sigil.png`"
										alt="a radial icon representing the realm you're visiting"></v-img>
								</div>
								<div>
									<h2 class="text-h4 text-primary">{{ realm.abbTitle ? realm.abbTitle : realm.title }}</h2>
									<div class="d-flex">
										<v-icon
											class="mr-2"
											:size="iconWidth"
											v-if="useLastUpdated(realm.lastUpdated).isRecent.value"
											color="yellow">mdi-alert-decagram</v-icon>
										<div v-if="realm.iconNames">
											<v-icon
												class="mr-2"
												:size="iconWidth"
												v-for="(items, index) in realm?.iconNames.split(',')"
												:key="items + index"
												color="primary">mdi-{{ items }}</v-icon>
										</div>
										<v-icon v-else
											:size="iconWidth"
											v-for="(icon, index) in ['help', 'help', 'help']"
											:key="realm.slug + index"
											color="primary">mdi-{{ icon }}</v-icon>
									</div>
								</div>
							</div>
							<div class="mt-1 mb-2 d-flex">
							</div>
							<div class="mt-5">
								<div>
									<BackButton
										text="Realm"
										class="mb-2"
										:realm-icons="['camera-control']"
										:link-name="`/operations/realm-management/${realm.slug}`"
									/>
									<BackButton
										text="Photos"
										:realm-icons="['camera-enhance']"
										:link-name="`/operations/realm-management/${realm.slug}/photographs`"
									/>
								</div>
							</div>
						</v-card>
					</v-col>	
				</v-row>
			</v-container>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useManageableRealms } from '~/composables/firebase/useRealmNames'
import { useLastUpdated } from '~/composables/useLastUpdated'
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
</script>

