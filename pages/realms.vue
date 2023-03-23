<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="default">
			<BreadcrumbHeading text="REALMS"/>
			<v-row class="mt-15">
				<v-col v-for="(post, index) in classifiedRealms"
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
							<p class="text-body-1 mb-4"
								:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
								{{ post.subtitle }}
							</p>
							<div class="d-flex justify-space-between align-center mb-1">
								<p
									class="text-subtitle-1"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ post.realmCipher }}
								</p>
								<v-chip class="text-subtitle-1"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ post.designation }}
								</v-chip>
							</div>
							<div class="d-flex justify-space-between align-center mb-2">
								<h4 class="text-h5"
									:class="[post.clearanceNeeded ? 'text-grey-darken-1' : 'text-primary']">
									{{ post.lastUpdated }}
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
			
						<div class="shadow"
							:class="[post.clearanceNeeded ? '' : 'grow']">
							<NuxtLink v-if="!post.clearanceNeeded"
								:to="`insights/${post.slug}`">
								<v-img cover
									class="realmImage"
									lazy-src="/images/mocks/placeholder.jpg"
									:src="`/images/${post.slug}/${getIndexOfCover(post, post.slug)}.jpg`"
									alt="a photo representing the realm you're visiting">
								</v-img>
							</NuxtLink>
							<v-img v-else
								cover
								class="clearanceRealmImage"
								lazy-src="/images/mocks/placeholder.jpg"
								:src="`/images/${post.slug}/${getIndexOfCover(post, post.slug)}.jpg`"
								alt="a photo representing the realm you're visiting">
							</v-img>
						</div>

						<div class="px-8">
							<div>
								<v-icon class="p-0 mr-2"
									:color="post.clearanceNeeded ? 'grey-darken-1' : 'primary'"
									v-for="(items, index) in post.iconNames"
									:key="items + index"
									size="20px">mdi-{{ items }}</v-icon>
							</div>
						</div>
					</div>
				</v-col>
			</v-row>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { pages } from './realms.data'
import { useClassifyRealm } from '~/composables/useClassifyRealm'
import { useRandomNumber } from '~/composables/useRandomNumber'
const { classifiedRealms } = useClassifyRealm(pages)

const getIndexOfCover = ({ documents }) => {
	const randomIndex = useRandomNumber(documents.length)
	const target = documents[randomIndex]
	return target.filePath
}

const checkSemiotic = (realm) => {
	const indexOfRealm = realmsWithSemiotics.findIndex(item => {
		return item.slug === realm.slug
	})
	return indexOfRealm === new Date().getDay()

}

const realmsWithSemiotics = pages.filter(realm => {
	if(realm.semiotics) return realm
})

</script>

<style scoped>
.border {
	transform: scale(1);
	transition: all .25s;
}

.grow {
	padding: 20px 20px;
	transition: all .5s;
}

.grow:hover {
	cursor: pointer;
	padding: 10px 10px;
	transition: all .5s;
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
