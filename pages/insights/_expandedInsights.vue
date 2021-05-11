<template>
    <v-container class="my-5">
        <v-row>
            <v-col cols="4" class="border pa-0">
                <v-img :src="require(`@/assets/images/${currentRealm.imagesDirectory}/${currentRealm.titlePhoto}`)" alt=""></v-img>
            </v-col>
            <v-col cols="8">
                <div class="text-h2 primary--text">{{ currentRealm.title }}</div>
                <div class="text-h4 primary--text">{{ currentRealm.subtitle }}</div>
                <div class="text-subtitle-1 primary--text">{{ currentRealm.narrative }}</div>
                 <v-icon v-for="(items, index) in currentRealm.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

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
    filter: sepia() hue-rotate(70deg);
}

img {
    height:200px;
}
</style>