<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="realm-viewing">
			<BreadcrumbHeading text="ARTIFACTS"/>
			<div
				class="mb-15"
			>
				<!-- ARTIFACT REALM ICON -->
				<v-row align="end"
					class="mb-5"
					v-if="artifacts.length > 0">
					<v-col cols="8"
						sm="6"
						md="3"
						lg="3"
						xl="3"
						class="offset-2 offset-sm-3 offset-md-1 offset-lg-0 offset-xl-0"
						:class="smAndDown ? 'd-flex justify-center' : ''">
						<v-img class="abberation"
							aspect-ratio="1"
							:src="realm.sigilImageLink"
							alt="an icon representing the currently viewed realm">
						</v-img>
					</v-col>

					<!-- REALM DESCRIPTION -->
					<v-col cols="8"
						sm="6"
						md="6"
						lg="6"
						xl="5"
						class="offset-2 offset-sm-3 offset-md-0 offset-xl-0"
						:class="smAndDown ? 'text-center' : ''"
					>
						<h3 class="text-primary text-h3">
							{{ realm.title }}
						</h3>
						<p class="text-primary text-body-1 mb-4">
							{{ realm.subtitle }}
						</p>
						<p class="text-primary text-body-1 mb-3">
							{{ realm.narrative }}
						</p>
						<v-icon class="p-0 mr-2"
							color="primary"
							v-for="(items, index) in realm.iconNames"
							:key="items + index">mdi-{{ items }}</v-icon>
					</v-col>
				</v-row>

				<v-row
					class="mt-1">
					<v-col cols="12"
						md="5">
						<BackButton
							frontIcon="arrow-left"
							text="Abandon This Realm"
							linkName="/realms" />
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="4">
						<BackButton
							text="/Realm Photos"
							:realm-icons="['camera']"
							:link-name="`/insights/${route.params.realm}`" />
					</v-col>
					<v-col cols="4">
						<BackButton
							text="/Realm Artifacts"
							:realm-icons="['diamond-stone']"
							disabled
							:link-name="`/insights/${route.params.realm}/artifacts`" />
					</v-col>
				</v-row>
		
				<!-- ITERATE OVER ARTIFACTS -->
				<v-row class="mb-5">
					<v-col 
						v-for="(artifact, innerIndex) in artifacts"
						:key="innerIndex"
						cols="12"
						sm="10"
						md="6"
						lg="6"
						xl="6"
						class="offset-sm-1 offset-md-0">
						<v-card
							color="primary-darken-1"
							class="pa-5 text-primary"
							height="100%">
							<v-row dense>
								<v-col cols="12"
									md="12"
									:lg="artifact?.isVertical ? `6` : `12`"
									class="pa-5">
									<h4 class="text-h4 mb-8">{{ artifact.title }}</h4>
									<p class="text-body-1 mb-3">{{ artifact.lore }}</p>
								</v-col>
								<v-col cols="12"
									md="12"
									:lg="artifact?.isVertical ? `6` : `12`"
								>
									<v-img class="artifactImage"
										cover
										:aspect-ratio="artifact.isVertical ? `1/5` : `8/3`"
										:src="artifact.imageLink"
										alt="an image representing an artifact of the realm"/>
								</v-col>
							</v-row>
						</v-card>
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
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
import { useRealmData, useRealmArtifacts } from '~/composables/firebase/useRealmData'

// eslint-disable-next-line no-undef
const route = useRoute()
const realm = ref({})
const artifacts = ref({})

onMounted(() => {
	useRealmData(route.params.realm).then(({realmData}) => {
		realm.value = realmData.value
	})
	useRealmArtifacts(route.params.realm).then(({artifactsData}) => {
		artifacts.value = artifactsData.value
	})
}) 

</script>

<style lang="scss" scoped>
.artifactImage::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: inset 1px 1px 5px 5px #151b16,
}
</style>