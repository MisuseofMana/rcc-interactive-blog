<template>
    <v-container class="my-5">
        <v-row>
            <v-col cols="12">
                <h2 class="text-h2 mb-8 primary--text">
                    ARTIFACTS
                </h2>
            </v-col>
        </v-row>

        <div v-for="(items, index) in realms" :key="index + items.realmIcon" class="mb-10">
            <div class="d-flex justify-start align-center mb-5">
                <v-img class="abberation mr-8" height="100px" width="100px" max-width="100px" max-height="100px" :src="require(`@/assets/images/icons/${items.realmIcon}.png`)" alt="an icon representing the currently viewed realm"></v-img>
                <h3 class="primary--text text-h3">
                    {{ items.realmName }}
                </h3>
            </div>
            
                <v-row>
                    <v-col v-for="(artifacts, index) in items.artifacts" :key="index" md="6">
                        <v-card color="light-green darken-4" class="pa-10 mb-5 primary--text">
                            <v-img class="abberation mb-2 ml-5" :max-height="getMaxHeight(artifacts.imageVertical)" :max-width="getMaxWidth(artifacts.imageVertical)" :src="require(`@/assets/images/artifacts/${artifacts.path}.jpg`)" alt="an image representing an artifact of the realm"/>
                            <div>

                                <h4 class="text-h4 mb-3">{{ artifacts.title }}</h4>
                                <p class="text-body-1 mb-3">{{ artifacts.description }}</p>
                                <p class="text-body-1">{{ artifacts.description2 }}</p>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
        </div>
    </v-container>
</template>

<script>
import pageMusic from '@/plugins/pageMusic'
import { mapState } from 'vuex'

export default {
	name: `Artifacts`,
	music: `artifacts`,
	transition: `fadeSwitch`,
	mixins: [pageMusic],
	computed: {
		...mapState(`artifacts`, [
			`realms`,
		])
	},
	methods:{
		getMaxWidth(isVertical) {
			return isVertical ? `100px` : `250px`
		},
		getMaxHeight(isVertical) {
			return isVertical ? `250px` : `100px`
		},
	}
}
</script>

<style scoped>
.bar {
    background: var(--v-primary-darken4);
}
</style>