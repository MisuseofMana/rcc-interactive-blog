<template>
    <NuxtLink to="/briefing">
    <v-container fill-height class="overflow-hidden">
        <v-row class="overflow-hidden">
                <v-col class="d-flex justify-center align-center" cols="12">
                    <div class="linkSize d-flex align-center justify-center">
                        <transition name="brainwash" mode="out-in">
                            <v-img :max-width="imageWidth" class="abberation" :key="whichClutter" :src="require(`@/assets/images/clutter/${whichClutter}.png`)" :alt="whichClutter"></v-img>
                        </transition>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </NuxtLink>
</template>

<script>
import pageMusic from '@/plugins/pageMusic'

export default {
    name:'Brainwash',
    music: 'theme',
    transition:'fadeSwitch',
    layout: 'landing',
    mixins: [pageMusic],
    data() {
        return {
            clutterNames: [ 
            'decay', 
            'formula', 
            'graph', 
            'cloud', 
            'dose', 
            'table', 
            'flow', 
            'section', 
            'geometry', 
            'calculation', 
            'block', 
            'bedding', 
            'path', 
            'algorithm', 
            'antenna', 
            'board', 
            'circuit',
            'coil',
            'curve',
            'districts',
            'door',
            'figures',
            'gear',
            'knob',
            'melt',
            'power',
            'pyramid',
            'radius',
            'realms',
            'sphere',
            'stage',
            'tower',
            ],
            randomNumber: 0, 
            changeClutter: undefined,
        }
    },
    computed: {
        whichClutter() {
            return this.clutterNames[this.randomNumber]
        },
        imageWidth(){
            return this.$vuetify.breakpoint.mobile ? '90%' : '400px'
        }
    },
    methods: {
        rollRandomNumber: (max) => {
            return Math.floor(Math.random() * (max))
        },
    },
    mounted() { 
        this.randomNumber = this.rollRandomNumber(this.clutterNames.length)
        this.changeClutter = setInterval(() => {
            if( this.randomNumber >= this.clutterNames.length - 1 ) {
                this.randomNumber = 0;
            }
            else { 
                this.randomNumber++
                this.maxWidth += 10
            }
        }, 1800);
    },
    beforeDestroy() {
        clearInterval(this.changeClutter);
    },
}
</script>

<style lang="scss" scoped>
.overflow-hidden {
    overflow-y: hidden;
}

.linkSize {
    min-width:400px;
    min-height:400px;
}
</style>