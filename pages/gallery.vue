<template>
    <v-container class="my-5">
        <v-row>
            <v-col cols="3" v-for="(posts, index) in gallery" :key="index">
                <div class="text-h4 primary--text">{{ posts.title }}</div>
                <div class="text-h5 primary--text">{{ posts.subtitle }}</div>
                <div class="border my-2">
                    <img :src="`~/assets/${posts.folderTitle}/${index}`" alt="">
                </div>
                <div>
                    <v-icon v-for="items in posts.iconNames" :key="items" color="primary">mdi-{{ items }}</v-icon>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import gallery from '~/plugins/gallery.js'
    export default {
        name: 'gallery',
        data() {
            return {
                gallery,
            }
        },
        mounted() {
            setTimeout(() => {
                this.$router.push('gallery')
            }, 3000);
	    }
    }
</script>

<style scoped>
.border {
    border: solid 2px var(--v-primary-base)
}
</style>
