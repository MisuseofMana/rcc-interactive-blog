<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="default">
			<BreadcrumbHeading text="REALMS"/>
			<v-row class="mt-15">
				<v-col v-for="(post, index) in realmList"
					:key="index"
					cols="12"
					sm="6"
					md="6"
					lg="4"
					xl="4"
					class="mb-15">
					<div class="border mx-5">
						<div class="px-8">
							<div class="d-flex justify-space-between align-end mb-1">
								<h3 class="text-h4"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ post.abbTitle ? post.abbTitle : post.title }}
								</h3>
							</div>
							<div>
								<p class="text-body-2 mb-4"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ post.subtitle }}
								</p>
							</div>
							<div class="d-flex justify-space-between align-center mb-3">
								<v-chip
									class="text-subtitle-1"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-info']">
									{{ useRealmCipher(post.title).realmCipher }}
								</v-chip>
								<v-chip class="text-subtitle-1"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ useLastUpdated(post.lastUpdated).designation.value }}
								</v-chip>
							</div>
							<div class="d-flex justify-space-between align-center mb-2">
								<h4 class="text-h5"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ useLastUpdated(post.lastUpdated).lastUpdated.value }}
								</h4>
								<div>
									<v-icon v-if="checkSemiotic(post, index)"
										class="mr-2"
										:color="post.clearanceNeeded ? 'grey-darken-1' : 'teal-accent-3'"
										size="20px">
										mdi-eye-circle
									</v-icon>
									<v-icon v-if="post.isRecent"
										:color="post.clearanceNeeded ? 'grey-darken-1' : 'yellow-accent-3'"
										size="20px">
										mdi-alert-decagram
									</v-icon>
								</div>
							</div>
						</div>
			
						<div class="shadow mt-n6"
							:class="[post.clearanceNeeded ? '' : 'grow']">
							<NuxtLink v-if="true"
								:to="`insights/${post.slug}`">
								<v-img cover
									class="realmImage"
									lazy-src="/images/mocks/placeholder.jpg"
									:src="coverPhotos?.find(photo => { return photo.realmId === post.id})?.imageLink"
									alt="a photo representing the realm you're visiting">
								</v-img>
							</NuxtLink>
							<v-img v-else
								cover
								class="clearanceRealmImage"
								lazy-src="/images/mocks/placeholder.jpg"
								:src="coverPhotos?.find(photo => { return photo.realmId === post.id}).imageLink"
								alt="a photo representing the realm you're visiting">
							</v-img>
						</div>

						<div class="px-8 mt-n5">
							<div>
								<v-icon v-if="useLastUpdated(post.lastUpdated).isRecent.value"
									class="mr-2"
									:color="post.clearanceNeeded ? 'grey-darken-1' : 'info'"
									size="40px">
									mdi-alert-decagram
								</v-icon>
								<v-icon class="p-0 mr-2"
									:color="post.clearanceNeeded ? 'grey-darken-1' : 'primary'"
									v-for="(items, index) in post.iconNames.split(',')"
									:key="items + index"
									size="40px">mdi-{{ items }}</v-icon>
							</div>
						</div>
					</div>
				</v-col>
			</v-row>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue' 
import { useManageableRealms } from '~/composables/firebase/useRealmNames'
import { useCoverPhotos } from '~/composables/firebase/useRealmData'

import { useRealmCipher } from '~/composables/useRealmCipher'
import { useSiteStore } from '~/store/useSiteStore.js'

const siteStore = useSiteStore()
siteStore.$patch({currentSound: `audio/realms.mp3`})

const { realmList } = useManageableRealms()
const coverPhotos = ref([])

onMounted(() => {
	useCoverPhotos().then(({coverPhotosData}) => {
		coverPhotos.value = coverPhotosData.value
	})
}) 

const checkSemiotic = (realm) => {
	const indexOfRealm = realmsWithSemiotics.value.findIndex(item => {
		return item.slug === realm.slug
	})
	return indexOfRealm === new Date().getDay()
}

const realmsWithSemiotics = computed(() => {
	return realmList.value.filter(realm => {
		if(realm.hasSemiotics) return realm
	})	
})

</script>

<style scoped>
.border {
	transform: scale(1);
	transition: all .25s;
}

.realmImage {
	filter: sepia() hue-rotate(60deg);
	z-index: -1;
}

.clearanceRealmImage {
	filter: saturate(0) hue-rotate(-100deg) brightness(1.5) blur(6px);
	z-index: -1;
}

.shadow {
	box-shadow: inset 30px 30px 15px 10px #000, inset -30px -30px 15px 10px #000;
	overflow: hidden;
}
</style>
