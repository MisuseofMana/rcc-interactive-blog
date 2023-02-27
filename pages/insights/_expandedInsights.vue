<template>
    <v-container class="my-5">
        <v-row class="mb-8">
            <v-col>
                <BackButton frontIcon="mdi-arrow-left" text="Leave This Realm" :realmIcons="currentRealm.iconNames"
                    linkName="/realms" />
            </v-col>
        </v-row>

        <v-row class="mb-8">
            <v-col cols="6" class="py-0">
                <div class="text-h1 primary--text">{{ currentRealm.title }}</div>
                <div class="text-h2 primary--text">{{ currentRealm.subtitle }}</div>
                <div class="text-body-1 primary--text">{{ currentRealm.narrative }}</div>
                <v-icon class="mr-4" :size="iconWidth" v-if="currentRealm.publishedRecently"
                    color="yellow">mdi-alert-decagram</v-icon>
                <v-icon class="my-5" :size="iconWidth" v-for="(items, index) in currentRealm.iconNames" :key="items + index"
                    color="primary">mdi-{{ items }}</v-icon>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
                <v-img class="abberation" max-height="300" max-width="300" :aspect-ratio="1"
                    :src="require(`@/assets/images/icons/${currentRealm.artifactPath}.png`)"
                    alt="a radial icon representing the realm you're visting"></v-img>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" lg="6" sm="12" v-for="(item, index) in currentRealm.photos" :key="index + item.filePath">
                <v-img class="imageBorderFilter" lazy-src="/images/lazyload.jpg"
                    :src="require(`@/assets/images/${currentRealm.imagesDirectory}/${item.filePath}.jpg`)" />
                <div class="bar pa-5 mb-8">
                    <div class="text-body-1 primary--text text-center">{{ item.copy }}</div>
                </div>
            </v-col>
        </v-row>

        <v-row class="mb-8">
            <v-col class="d-flex justify-end">
                <BackButton frontIcon="mdi-arrow-left" text="Leave This Realm" :realmIcons="currentRealm.iconNames"
                    linkName="/realms" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
import BackButton from '@/components/backButton.vue'
import pageMusic from '@/plugins/pageMusic'

export default {
	transition: `fadeSwitch`,
	mixins: [pageMusic],
	async asyncData({ params }) {
		const slug = params.expandedInsights
		return { slug }
	},
	components: {
		BackButton,
	},
	computed: {
		...mapState(`gallery`,
			[
				`pages`,
			]
		),
		currentRealm() {
			return this.pages.find(object => object.slug === this.slug)
		},
		iconWidth() {
			return this.$vuetify.breakpoint.sm ? `75px` : `45px`
		}
	},
}
</script>

<style scoped>
.imageBorderFilter {
    padding: 0;
    border: solid 2px var(--v-primary-base);
    overflow: hidden;
    filter: hue-rotate(20deg);
}

.bar {
    background: var(--v-primary-darken4);
}

a,
a:-webkit-any-link {
    text-decoration: none;
}</style>