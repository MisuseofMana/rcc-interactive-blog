<template>
    <v-container class="my-5">
        <v-row>
            <v-col cols="12">
                <div class="text-h2 mb-8 primary--text">
                    Artifacts
                </div>
            </v-col>
        </v-row>

        <div v-for="(items, index) in realms" :key="index + items.realmIcon">
            <v-row class="text-h3 mb-10 primary--text" align="center" justify="center">
                <v-col cols="4">
                    <div class="mb-5">
                        {{ items.realmName }}
                    </div>
                </v-col>
                <v-col cols="4" class="d-flex justify-end">
                    <div>
                        <v-img class="abberation" height="300" width="300" :aspect-ratio="1" :src="require(`@/assets/images/icons/${items.realmIcon}.png`)" alt=""></v-img>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mb-8" justify="center">
                <v-col v-for="(artifacts, index) in items.artifacts" :key="index" lg="10" md="4" sm="12" class="primary--text mb-5">
                    <div class="pa-10 bar d-flex flex-row justify-start align-center">
                        <div class="mr-10">
                            <v-img class="abberation" contain height="300" width="300" lazy-src="/images/lazyload.jpg" :src="require(`@/assets/images/artifacts/${artifacts.path}.jpg`)" alt="">
                                <template v-slot:placeholder>
                                    <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                    >
                                    </v-row>
                                </template>
                            </v-img>
                        </div>
                        <div>
                            <div class="text-h3 mb-3">{{ artifacts.title }}</div>
                            <div class="text-body-1 mb-3">{{ artifacts.description }}</div>
                            <div class="text-body-1">{{ artifacts.description2 }}</div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import pageMusic from '@/plugins/pageMusic'
import { mapState } from 'vuex'

export default {
    name: 'Artifacts',
    music: 'artifacts',
    transition: 'fadeSwitch',
    mixins: [pageMusic],
    computed: {
        ...mapState('artifacts', [
            'realms',
        ])
    },
    }
</script>

<style scoped>
.bar {
    background: var(--v-primary-darken4);
}
</style>