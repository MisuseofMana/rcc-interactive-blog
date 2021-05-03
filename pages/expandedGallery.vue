<template>
    <v-container class="my-5">
        <v-row>
            <v-col cols="4" class="border pa-0">
                <img :src="require(`@/assets/images/${currentDir.imagesDirectory}/${currentDir.titlePhoto}`)" alt="">
            </v-col>
            <v-col cols="8">
                <div class="text-h2 primary--text">{{ currentDir.title }}</div>
                <div class="text-h4 primary--text">{{ currentDir.subtitle }}</div>
                <div class="text-subtitle-1 primary--text">{{ currentDir.narrative }}</div>
                 <v-icon v-for="(items, index) in currentDir.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
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
        name: 'expandedGallery',
        computed: {
            ...mapState(['currentDir'])
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