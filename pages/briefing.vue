<template>
  <v-container>
    <div class="text-h2 mb-5 primary--text">
        BRIEFING
    </div>
        <v-card color="primary darken-4" class="px-10 py-10">
            <v-row align="center" class="text-body-1 primary--text mb-2">
                <v-spacer/>
                <v-col cols="12" sm="12" md="8">
                    <div class="text-h3 mb-3">
                        Hello Operator,
                    </div>
                    <div class="mb-3">
                        <strong>Burrow Operations</strong> has been alerted that you’ve experienced
                        <div>
                            lucidity of alternate realms, either via chance or providence.
                        </div>
                    </div>
                    <div class="mb-3">
                        You have been experiencing suspicions of adjacent realities and/or mindset shifts after long walks. You’ve been wondering if this realm (your realm) is not the only one. In fact, there are multitudes which we all experience but rarely acknowledge.
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-img class="abberation" lazy-src="/images/clearLoader.png" contain :aspect-ratio="1" :src="require(`@/assets/images/mocks/itemdumpBackup.png`)" alt="a scrap of paper with a dotted circle around a geometric shape. a barcode is on the left of the paper surrounding the word semiotic."></v-img>
                </v-col>
                <v-spacer/>
            </v-row>

                        
                    <div>
                        
                    </div>

                <div class="text-body-1 primary--text mb-2 d-flex justify-start align-center">
                    <div class="mr-10">
                        <v-img class="abberation" lazy-src="/images/clearLoader.png" contain height="350" width="350" :aspect-ratio="1" :src="require(`@/assets/images/clutter/tower.png`)" alt="an illustration of two towers sending signals to one another">
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
                    </div>
                    <div>
                        <div class="text-h3 mb-3">
                            This is your calling.
                        </div>
                        <div class="mb-3">
                            Because of this revelation, you have been selected among the few of <strong>Earthrealm</strong> to explore what is known as the <strong>Crickstream</strong>. 
                        </div>
                        <div class="mb-3">
                            This guide will serve as your sherpa, so no matter how you’ve arrived at this precipice of cross-realm knowledge, you will be prepared for what you’ll encounter. 
                        </div>
                    </div>
                </div>

                <div class="text-body-1 primary--text mb-8 d-flex justify-start align-center">
                    <div class="mr-10">
                        <div class="text-h3 mb-3">
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
                        <v-img class="abberation" lazy-src="/images/clearLoader.png" contain height="350" width="350" :aspect-ratio="1" :src="require(`@/assets/images/mocks/hidscrap1.png`)" alt="a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper.">
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
                    </div>
                </div>

                <div class="text-body-1 primary--text mb-8 d-flex justify-start align-center">
                    <div class="mr-10">
                        <v-img class="abberation" lazy-src="/images/clearLoader.png" contain height="350" width="350" :aspect-ratio="1" :src="require(`@/assets/images/clutter/minimap.png`)" alt="a circular illustration of an arial view of roads and rivers">
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
                    </div>
                    <div>
                        <div class="text-h3 mb-3">
                            As an <strong>Operator</strong> you must seek out <strong>Semiotics</strong> within the available <strong>Crossrealms</strong>.
                        </div>
                        <div class="mb-3">
                            These archives are updated as new realms are discovered, keep a watchful eye. <strong>Semiotics</strong> serve to provide knowledge into your <strong>Homerealm</strong>, seek them out in your travels. They take the shape of insights which can be translated and applied to the nuance of your own realm.
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-end align-end">
                    <v-img contain aspect-ratio="1" height="300" :src="require(`@/assets/images/mocks/message.png`)" alt="a secret encoded message written in a strange language"></v-img>
                </div>
            </v-card>
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
