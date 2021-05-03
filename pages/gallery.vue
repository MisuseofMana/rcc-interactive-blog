<template>
    <v-container class="my-5">
        <v-row>
            <v-col lg="3" md="4" sm="6" v-for="(posts, index) in gallery" :key="index">
                <div class="text-h4 primary--text">{{ posts.title }}</div>
                <div class="text-h5 primary--text">{{ posts.subtitle }}</div>
                <div class="border my-2" @click="expand(posts)">
                    <img :src="require(`@/assets/images/${posts.imagesDirectory}/${posts.titlePhoto}`)" alt="">
                </div>
                <div>
                    <v-icon v-for="(items, index) in posts.iconNames" :key="items+index" color="primary">mdi-{{ items }}</v-icon>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import  { gallery } from '~/plugins/gallery.js'
    export default {
        name: 'gallery',
        data() {
            return {
                gallery,
            }
        },
        transition: 'fadeSwitch',

        methods: {
            expand(payload) {
                this.$store.commit('changeDir', payload)
                this.$router.push({ path: 'expandedGallery' })
            }
        }
    }
</script>

<style scoped>
.border {
    border: solid 2px var(--v-primary-base);
    height:175px;
    overflow:hidden;
    filter: sepia() hue-rotate(70deg);
    transition: all .25s;
}

.border:hover {
    cursor:pointer;
    transform:scale(1.02);
    transition: all .25s;
}

img {
    height:200px;
}
</style>
