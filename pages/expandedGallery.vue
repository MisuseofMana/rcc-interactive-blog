<template>
    <v-container>
        <v-row class="my-2">
            <v-col cols="4" class="border square">
            </v-col>
            <v-col cols="8">
                <div class="text-h2 primary--text">{{ gallery[0].title }}</div>
                <div class="text-h4 primary--text">{{ gallery[0].subtitle }}</div>
                <div class="text-subtitle-1 primary--text">{{ gallery[0].narrative }}</div>
                 <v-icon v-for="items in gallery[0].iconNames" :key="items" color="primary">mdi-{{ items }}</v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import gallery from '~/plugins/gallery.js'
    export default {
        data() {
            return {
                gallery,
            }
        },
    }
</script>

<style scoped>
.border {
    border: solid 2px var(--v-primary-base)
}

.square {
    width:12rem;
    height:12rem;
}
</style>