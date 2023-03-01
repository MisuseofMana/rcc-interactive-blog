<template>
	<v-container>
		<div class="text-h2 primary--text">
			REALMS
		</div>
		<v-row>
			<v-col v-for="(posts) in pages" :key="posts.slug" cols="12" md="6" class="mb-8">
				<div class="border">
					<div class="px-8">
						<div class="d-flex justify-space-between align-end">
							<h3 class="text-h3" :class="[posts.clearanceNeeded ? 'grey--text darken-1' : 'primary--text']">
								{{ posts.abbTitle ? posts.abbTitle : posts.title }}
							</h3>
							<h4 class="text-h4" :class="[posts.clearanceNeeded ? 'grey--text darken-1' : 'primary--text']">
								{{ daysSince(posts.publishDate) }}
							</h4>
						</div>
						<p class="text-subtitle-1 mb-5"
							:class="[posts.clearanceNeeded ? 'grey--text darken-1' : 'primary--text']">{{
								posts.subtitle }}
						</p>
					</div>

					<div class="my-2 shadow" :class="[posts.clearanceNeeded ? '' : 'grow']">
						<NuxtLink :to="`insights/${posts.slug}`" :disabled="posts.clearanceNeeded">
							<v-img :class="[posts.clearanceNeeded ? 'clearanceRealmImage' : 'realmImage']"
								lazy-src="/images/realmPlaceholder.jpg" :aspect-ratio="1"
								:src="require(`@/assets/images/${posts.imagesDirectory}/${posts.titlePhoto}.jpg`)"
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
	</v-container>
</template>

<script>
import pageMusic from '@/plugins/pageMusic'
import { mapState } from 'vuex'

export default {
	name: `Gallery`,
	music: `realmsTheme`,
	transition: `fadeSwitch`,
	mixins: [pageMusic],
	computed: {
		...mapState(`gallery`, [
			`pages`,
		]),
	},
	mounted() {
		console.log(this.$vuetify.breakpoint)
	},
	methods: {
		compareDates(dateString, limit) {
			return this.daysSince(dateString) <= limit
		},
		daysSince(pastDay) {
			const days = Math.abs(this.$moment().diff(this.$moment(pastDay, `YYYY-MM-DD`), `days`))
			const years = Math.abs(this.$moment().diff(this.$moment(pastDay, `YYYY-MM-DD`), `years`))
			return days > 365 ? `${years}y` : `${days}d`
		}
	}
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

.border {
	color: var(--v-primary-base);
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
	box-shadow: inset 30px 30px 10px var(--v-background-base), inset -30px -30px 10px var(--v-background-base), inset 4px 4px 0px var(--v-background-base), inset -4px -4px 0px var(--v-background-base);
}
</style>
