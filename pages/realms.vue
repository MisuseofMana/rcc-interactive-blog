<template>
    <v-container class="my-5">
        <v-row>
            <v-col lg="3" md="4" sm="6" v-for="(posts, index) in pages" :key="index">
                <div class="text-h4 primary--text">{{ posts.title }}</div>
                <div class="text-h5 primary--text">{{ posts.subtitle }}</div>
                <div class="border my-2">
                    <NuxtLink :to="`insights/${posts.slug}`">
                        <v-img :aspect-ratio="1/1" :src="require(`@/assets/images/${posts.imagesDirectory}/${posts.titlePhoto}.jpg`)" alt=""></v-img>
                    </NuxtLink>
                </div>
                <div>
                    <v-icon v-for="(items, index) in posts.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'gallery',
        transition: 'fadeSwitch',
            computed: {
                ...mapState('gallery', [
                    'pages',
                ])
            },
    }
</script>

<style scoped>
.border {
    border: solid 2px var(--v-primary-base);
    width:100%;
    overflow:hidden;
    filter: hue-rotate(45deg);
    transition: all .25s;
}

.border:hover {
    cursor:pointer;
    transform:scale(1.02);
    transition: all .25s;
}

img {
    max-height:400px;
}
</style>
