<template>
    <v-container class="my-5">
         <v-row class="mb-8">
            <v-col>
            <NuxtLink to="/realms">
                <div class= "d-flex justify-start align-center">
                    <v-btn color="primary darken-4 pa-5">
                    <v-icon class="mr-2" large color="primary">mdi-arrow-left</v-icon>
                    <div class="text-h4 primary--text mr-2">
                        depart this realm
                    </div>
                    <v-icon v-for="(items, index) in currentRealm.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
                    </v-btn>
                </div>
            </NuxtLink>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="4" class="border pa-0 mb-8">
                <v-img :src="require(`@/assets/images/${currentRealm.imagesDirectory}/${currentRealm.titlePhoto}.jpg`)" alt=""></v-img>
            </v-col>
            <v-col cols="8" class="py-0">
                <div class="text-h2 primary--text">{{ currentRealm.title }}</div>
                <div class="text-h4 primary--text">{{ currentRealm.subtitle }}</div>
                <div class="text-subtitle-1 primary--text">{{ currentRealm.narrative }}</div>
                 <v-icon v-for="(items, index) in currentRealm.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" v-for="(item, index) in currentRealm.photos" :key="index+item.filePath">
                <v-img class="abberation" :src="require(`@/assets/images/${currentRealm.imagesDirectory}/${item.filePath}.jpg`)"></v-img>
                <div class="bar pa-2 mt-4 mb-8">
                <div class="text-body-1 primary--text text-center">{{ item.copy }}</div>
                </div>
            </v-col>
        </v-row>

        <v-row class="mb-8">
            <v-col>
            <NuxtLink to="/realms">
                <div class= "d-flex justify-end align-center">
                    <v-btn color="primary darken-4 pa-5">
                    <v-icon class="mr-2" large color="primary">mdi-arrow-left</v-icon>
                    <div class="text-h4 primary--text mr-2">
                        depart this realm
                    </div>
                    <v-icon v-for="(items, index) in currentRealm.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
                    </v-btn>
                </div>
            </NuxtLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        async asyncData({ params }) {
            const slug = params.expandedInsights
            return { slug }
         },
        computed: {
            ...mapState('gallery', 
                [
                    'pages',
                ]
            ),
            currentRealm() {
                return this.pages.find(object => object.slug === this.slug)
            }
        },
        mounted() {
            console.log(this.slug)
        }
    }
</script>

<style scoped>
.border {
    padding:0;
    border: solid 2px var(--v-primary-base);
    height:175px;
    overflow:hidden;
    filter: hue-rotate(45deg);
}

.abberation {
    padding:0;
    border: solid 2px var(--v-primary-base);
    overflow:hidden;
    filter: hue-rotate(20deg);
}

.bar {
    background: var(--v-primary-darken4);
}

a, a:-webkit-any-link {
    text-decoration: none;
}
</style>