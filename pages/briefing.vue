<template>
    <v-container>
        <div class="text-h2 mb-5 primary--text">
            BRIEFING
        </div>
        <v-card color="light-green darken-4" class="pa-10 primary--text">
            <v-row>
                <v-spacer/>
                <v-col cols="12" md="12" lg="9">
                    <v-img class="abberation float-left mr-6 mb-3" lazy-src="/images/clearLoader.png" contain
                        width="472px" height="311px" :src="`~/images/mocks/itemdumpBackup.png`"
                        alt="a scrap of paper with a dotted circle around a geometric shape. a barcode is on the left of the paper surrounding the word semiotic." />
                    <h3 class="text-h3 mb-5">
                        Hello Operator,
                    </h3>

                    <p class="mb-9 text-body-1">
                        <strong>Burrow Operations</strong> has been alerted that you’ve experienced lucidity of alternate
                        realms, either via chance or providence. You have been experiencing suspicions of adjacent realities
                        and/or mindset shifts after long walks. You’ve been wondering if this realm (your realm) is not the
                        only one. In fact, there are multitudes which we all experience but rarely acknowledge.
                    </p>

                    <h3 class="text-h3 mb-5">
                        This is your calling.
                    </h3>

                    <p class="mb-3 text-body-1">
                        Because of this revelation, you have been selected among the few of <strong>Earthrealm</strong> to
                        explore the aggregate of adjacent realities. The <strong>Crickstream</strong>. This guide will serve
                        as your sherpa, so no matter how you’ve arrived at this precipice of cross-realm knowledge, you will
                        be prepared for what you’ll encounter.
                    </p>

                    <v-img class="abberation float-right ml-6 mb-3" lazy-src="/images/clearLoader.png" contain
                        height="248px" width="352px" :aspect-ratio="1" src="/images/mocks/hidscrap1.png"
                        alt="a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper." />

                    <h3 class="text-h3 mt-9 mb-5">
                        As an <strong>Operator</strong> you must seek out <strong>Semiotics</strong> within the available
                        <strong>Crossrealms</strong>.
                    </h3>

                    <p class="mb-3 text-body-1">
                        The Crickburrow Archives are updated often as new realms are discovered, keep a watchful eye.
                        <strong>Semiotics</strong> serve to provide knowledge into your <strong>Homerealm</strong>, seek
                        them out in your travels. They take the shape of insights which can be translated and applied to
                        the nuance of your own realm.
                    </p>
                    <span class="clear"></span>

                    <div class="d-flex align-center">
                        <v-img v-if="smAndDown" class="mt-9 text-center colorize" contain width="`1037`" height="347"
                            :aspect-ratio="[smAndDown ? `290/428` : `1037/347`]" src="/images/mocks/message.png"
                            alt="a message written in a strange alphabet"></v-img>
                        <v-img v-else class="mt-9 text-center colorize" contain width="290" height="428"
                            :aspect-ratio="[smAndDown ? `290/428` : `1037/347`]" src="/images/mocks/mobilemessage.png"
                            alt="a message written in a strange alphabet"></v-img>
                    </div>
                </v-col>
                <v-spacer/>
            </v-row>
        </v-card>
    </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()

// TODO
// import pageMusic from '@/plugins/pageMusic'
// music: `aboutTheme`,
// transition: `fadeSwitch`,
// mixins: [pageMusic],
</script>

<style scoped>
.border {
    border: solid 2px var(--v-primary-base);
    border-radius: 2px;
}

.clear {
    clear: both;
}

.colorize {
    filter: hue-rotate(160deg)
}
</style>
