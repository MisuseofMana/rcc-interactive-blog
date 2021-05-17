<template>
    <v-container class="my-5">
         <v-row class="mb-8">
            <v-col>
             <BackButton frontIcon="mdi-arrow-left" text="Leave This Realm" :realmIcons="currentRealm.iconNames" linkName="/realms"/>
            </v-col>
        </v-row>

        <v-row class="mb-8">
            <v-col cols="12" class="py-0">
                <div class="text-h1 primary--text">{{ currentRealm.title }}</div>
                <div class="text-h2 primary--text">{{ currentRealm.subtitle }}</div>
                <div class="text-body-1 primary--text">{{ currentRealm.narrative }}</div>
                 <v-icon class="my-5" v-for="(items, index) in currentRealm.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6" v-for="(item, index) in currentRealm.photos" :key="index+item.filePath">
                <v-img class="abberation" :src="require(`@/assets/images/${currentRealm.imagesDirectory}/${item.filePath}.jpg`)"></v-img>
                <div class="bar pa-2 mt-4 mb-8">
                <div class="text-body-1 primary--text text-center">{{ item.copy }}</div>
                </div>
            </v-col>
        </v-row>

        <v-row class="mb-8">
            <v-col class="d-flex justify-end">
                <BackButton frontIcon="mdi-arrow-left" text="Leave This Realm" :realmIcons="currentRealm.iconNames" linkName="/realms" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'
    import BackButton from '@/components/backButton.vue'

    export default {
        async asyncData({ params }) {
            const slug = params.expandedInsights
            return { slug }
        },
        components: {
            BackButton,
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