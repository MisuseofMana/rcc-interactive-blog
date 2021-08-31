<template>
  <v-container class="my-5">
    <div class="text-h2 primary--text">
        BRIEFING
    </div>
    <v-row>
        <v-col lg="4" sm="12" class="my-auto">
            <v-img :aspect-ratio="1.5" contain max-height="300" :src="require(`@/assets/images/mocks/itemdumpBackup.png`)" alt=""></v-img>
            <v-img :aspect-ratio="1.4" contain max-height="300" :src="require(`@/assets/images/mocks/hidscrap1.png`)" alt=""></v-img>
        </v-col>
        <v-col lg="8" md="10" sm="12">
            <div class="text-body-1 primary--text pa-4 mb-4 d-flex justify-start align-center">
                <div>
                    <div class="text-h2 mb-3">
                    Hello Operator,
                    </div>
                    <div class="mb-3">
                        <div>
                            BURROW OPERATIONS has been alerted that you’ve experienced
                            lucidity of alternate realms, either via chance or providence.
                        </div>
                    </div>
                    <div class="mb-3">
                        You have been experiencing suspicions of adjacent realities and/or mindset shifts after long walks. You’ve been wondering if this realm (your realm) is not the only one. In fact, there are multitudes which we all experience but rarely acknowledge.
                    </div>
                </div>
                <div>
                    <v-img class="abberation" contain height="250" width="250" :aspect-ratio="1" :src="require(`@/assets/images/clutter/realms.png`)" alt=""></v-img>
                </div>
            </div>

            <div class="text-body-1 primary--text pa-4 mb-4 d-flex justify-start align-center">
                <div class="mr-5">
                    <v-img class="abberation" contain height="250" width="250" :aspect-ratio="1" :src="require(`@/assets/images/clutter/districts.png`)" alt=""></v-img>
                </div>
                <div>
                    <div class="text-h2 mb-3">
                        This is your calling.
                    </div>
                    <div class="mb-3">
                        Because of this revelation, you have been selected among the few of EARTHREALM to explore what is known as the CRICKSTREAM. 
                    </div>
                    <div class="mb-3">
                        This guide will serve as your sherpa, so no matter how you’ve arrived at this precipice of cross-realm knowledge, you will be prepared for what you’ll encounter. 
                    </div>
                </div>
            </div>

            <div class="text-body-1 primary--text pa-4 d-flex justify-start align-center">
                <div>
                    <div class="text-h2 mb-3">
                        Do not take this knowledge lightly.
                    </div>
                    <div class="mb-3">
                        Cross-realms are tangled places, gnarled worlds which seep through the unseen riverbed of dimensions. When you see something out of place, hear something unexplained, or witness something indescribable, you have likely discovered a cross-realm.
                    </div>
                    <div>
                        Despite their oddness, cross-realms exist to teach and mould the Operators. You must take their offers, and grow from the experience. Traveling to a cross-realm recklessly and defying the dimenson may leave you malformed and lost.
                    </div>
                </div>
                <div>
                    <v-img class="abberation" contain height="250" width="250" :aspect-ratio="1" :src="require(`@/assets/images/clutter/tower.png`)" alt=""></v-img>
                </div>
            </div>
            <div class="d-flex justify-end align-end">
                <v-img class="abberation" :aspect-ratio="3" max-height="100" :src="require(`@/assets/images/mocks/barcode.png`)" alt=""></v-img>
            </div>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import pageMusic from '@/plugins/pageMusic'

export default {
    name:'About',
    music: 'aboutTheme',
    transition:'fadeSwitch',
    mixins: [pageMusic],
}
</script>

<style scoped>
.border {
    border: solid 2px var(--v-primary-base);
    border-radius: 2px;
}
</style>
