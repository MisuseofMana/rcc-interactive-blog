<template>
	<NuxtLayout name="default">
		<h2 class="text-h3 my-5 my-10 text-primary">
			REALMS
		</h2>
		<v-row dense no-gutters>
			<v-col v-for="(posts, index) in pages" :key="index" sm="12" md="6" xl="4" class="mb-3">
				<div class="border">
					<div class="px-8">
						<div class="d-flex justify-space-between align-end">
							<h3 class="text-h3" :class="[posts.clearanceNeeded ? 'grey--text darken-1' : 'primary--text']">
								{{ posts.abbTitle ? posts.abbTitle : posts.title }}
							</h3>
							<h4 class="text-h4" :class="[posts.clearanceNeeded ? 'grey--text darken-1' : 'primary--text']">
								{{ daysSince(posts.publishDate) }}d
							</h4>
						</div>
						<p class="text-body-1"
							:class="[posts.clearanceNeeded ? 'grey--text darken-1' : 'primary--text']">{{
								posts.subtitle }}
						</p>
					</div>

					<div class="shadow" :class="[posts.clearanceNeeded ? '' : 'grow']">
						<NuxtLink :to="`insights/${posts.slug}`" :disabled="posts.clearanceNeeded">
							<v-img cover :class="[posts.clearanceNeeded ? 'clearanceRealmImage' : 'realmImage']"
								lazy-src="/images/mocks/placeholder.jpg" :aspect-ratio="1"
								:src="`/images/${posts.imagesDirectory}/${posts.titlePhoto}.jpg`"
								alt="a photo representing the realm you're visiting">
							</v-img>
						</NuxtLink>
					</div>

					<div class="px-8 d-flex justify-space-between">
						<div>
							<v-icon class="p-0" :color="posts.clearanceNeeded ? 'grey darken-1' : 'primary'"
								v-for="(items, index) in posts.iconNames" :key="items + index">mdi-{{ items }}</v-icon>
						</div>
						<div>
							<v-icon v-if="compareDates(posts.publishDate, 365)" color="teal accent-3">
								mdi-eye-circle
							</v-icon>
							<v-icon v-if="compareDates(posts.publishDate, 60)" color="teal accent-3">
								mdi-alert-decagram
							</v-icon>
						</div>
					</div>
				</div>
			</v-col>
		</v-row>
	</NuxtLayout>
</template>

<script setup>
// import moment from 'moment/dist/moment.js'
import { pages } from './realms.data'
import { useDisplay } from 'vuetify'
const { smAndDown, mdAndUp, name } = useDisplay()

console.log('pages')
const compareDates = (dateString, limit) => {
	return dateString
	return this.daysSince(dateString) <= limit
}

const daysSince = (pastDay) => {
	return 0
	return Math.abs(moment().diff(moment(pastDay, `YYYY-MM-DD`), `days`))
}
</script>

<style scoped>
.border {
	/* background: var(--v-primary-darken3); */
	transform: scale(1);
	padding: 30px;
	z-index: -2;
	transition: all .25s;
}

.grow {
	padding: 15px 15px;
	transition: all .25s;
}

.grow:hover {
	cursor: pointer;
	padding: 0px 0px;
	transition: all .25s;
}

.realmImage {
	filter: sepia() hue-rotate(35deg);
	z-index: -1;
}

.clearanceRealmImage {
	filter: saturate(0);
	z-index: -1;
}

.shadow {
	box-shadow: inset 30px 30px 10px #101010, inset -30px -30px 10px #101010, inset 4px 4px 0px #101010, inset -4px -4px 0px #101010;
}
</style>
