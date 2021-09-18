<template>
    <v-container class="my-5">
        <div class="text-h2 primary--text">
            REALMS
        </div>
        <v-row>
            <v-col v-for="(posts, index) in pages" :key="index" lg="4" md="12" sm="12" class="mb-8">
                <div class="border">
                    <div class="text-h3">{{ posts.title }}</div>
                    <div class="text-subtitle-1 mb-5">{{ posts.subtitle }}</div>
                    <div class="my-2 mb-3 shadow">
                        <NuxtLink :to="`insights/${posts.slug}`">
                            <v-img class="realmImage" lazy-src="/images/realmPlaceholder.jpg" :aspect-ratio="1" :src="require(`@/assets/images/${posts.imagesDirectory}/${posts.titlePhoto}.jpg`)" alt="a photo representing the realm you're visiting">
                                <template v-slot:placeholder>
                                    <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                    >
                                    <v-progress-circular
                                        indeterminate
                                        color="primary"
                                    ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </NuxtLink>
                    </div>
                    <div>
                        <v-icon v-for="(items, index) in posts.iconNames" :key="items+index">mdi-{{ items }}</v-icon>
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
    name: 'Gallery',
    music: 'realmsTheme',
    transition: 'fadeSwitch',
    mixins: [pageMusic],
    computed: {
        ...mapState('gallery', [
            'pages',
        ])
    },
    }
</script>

<style scoped>
.border {
    /* background: var(--v-primary-darken3); */
    transform:scale(1);
    padding:30px;
    z-index:-2;
    transition: all .25s;
}

.theme--light.v-icon, .border {
     color: var(--v-primary-base);
}

.border:hover {
    cursor:pointer;
    padding:15px 16px;
    transition: all .25s;
}

.realmImage {
    filter:  sepia() hue-rotate(35deg);
    z-index:-1;
}

.shadow {
    box-shadow: inset 30px 30px 25px var(--v-background-base), inset -30px -30px 25px var(--v-background-base);
}
</style>
