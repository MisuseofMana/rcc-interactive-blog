<template>
    <NuxtLayout name="default">
            <h2 class="text-primary mb-2 mt-8" :class="smAndDown ? 'text-h3' : 'text-h2'">
                BRIEFING
            </h2>
            <v-card  color="light-green-darken-4" class="pa-8 py-12">
                <v-row class="mt-5">
                    <v-spacer/>
                    <v-col cols="12" md="12" lg="8" class="text-primary">
                        <v-row align="center" :justify="mdAndDown ? 'space-between' : ''" class="mb-5">
                            <v-spacer/>
                            <v-col cols="12" sm="8" md="6" lg="6" xl="4" align-self="center">
                                <v-img 
                                    class="abberation"
                                    max-width="472px" 
                                    max-height="311px"
                                    :src="`/images/mocks/itemdumpBackup.png`"
                                    alt="a scrap of paper with a dotted circle around a geometric shape. a barcode is on the left of the paper surrounding the word semiotic."
                                />
                            </v-col>
                            <v-spacer/>
                            <v-col cols="12" sm="12" md="5" lg="6" xl="4">
                                <h3 class="text-h3">
                                    Very good, you made it here.
                                </h3>
                            </v-col>
                            <v-spacer/>   
                        </v-row>    
                        
                        <v-row class="mb-5">
                            <v-col cols="12" sm="12" md="12" class="text-body-1">
                                <h3 class="text-h3 mb-5">
                                This may be your calling, it may not.
                            </h3>
                            
                            <p class="mb-3">
                                Start by journaling, capture moments. Build strong foundations for your future travels through age. Explore these archives, tune yourself to the nuance of your own experience.
                            </p>
                            <p class="mb-3">Spread roots as you are able. Experience anywhere you've not experienced. Explore the aggregate of adjacent realities that flow beside ours (yours).</p>
                            <p>The <strong class="font-weight-black">Crickburrow Archives</strong> is meant as a field guide, so no matter how you’ve arrived at this precipice of cross-realm knowledge, you will be prepared for what you’ll encounter.
                            </p>
                            </v-col>
                        </v-row>

                        <v-row align="center" class="mb-5">
                            <v-spacer/>
                            <v-col cols="12" sm="12" md="7" lg="6" xl="4" align-self="center">
                                <h3 class="text-h3">You are allowed restricted access to Crickburrow's archives.</h3>
                            </v-col>
                            <v-spacer/>
                            <v-col cols="12" sm="12" md="5" lg="6" xl="4">
                                <v-img 
                                class="abberation"
                                max-height="488px"
                                max-width="592px"
                                src="/images/mocks/hidscrap1.png"
                                alt="a scrap of paper with an illustration of a tangled knot, the words 'are you paying attention' are written on the paper."
                                />
                            </v-col>
                            <v-spacer/>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="12" md="12" class="text-body-1 mb-5">
                                <p class="mb-3">
                                Accessing this permissive grants the reader temporary status as a <strong class="font-weight-black">Trial Operator</strong>. In order to obtain additional clearance you must study <strong class="font-weight-black">Semiotics</strong> within the provided example imagery.
                                </p>
                                <p class="mb-3">
                                    <strong class="font-weight-black">Semiotics</strong> in the realms will provide insight, seek them out in your own travels and glean what you can from the records of past and present Operators.
                                </p>
                                
                                <p class="mb-3">
                                    The Crickburrow Archives are in the process of documenting new realms as of 2023/03/05, keep a watchful  <strong class="font-weight-black">eye.</strong>
                                </p>
                            </v-col>
                        </v-row>

                        <div class="text-primary mb-5">
                            <div class=" d-flex align-center">
                                <v-img v-show="mdAndUp" class="mt-9 text-center colorize" contain width="`1037`" height="347"
                                aspect-ratio="1037/347" src="/images/mocks/message.png"
                                alt="a message written in a strange alphabet"></v-img>
                                <v-img v-show="smAndDown" class="mt-9 text-center colorize" contain width="390" height="528"
                                aspect-ratio="390/528" src="/images/mocks/mobilemessage.png"
                                alt="a message written in a strange alphabet"></v-img>
                            </div>
                        </div>
                        </v-col>
                    <v-spacer/>
                </v-row>
            </v-card>
    </NuxtLayout>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { mdAndUp, smAndDown, smAndUp, } = useDisplay()

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
