<template>
  <v-container fill-height>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <transition name="fade" mode="out-in"> 
          <NuxtLink to="realms">
            <transition name="fade" mode="out-in">
              <v-img min-width="150px" class="abberation" :key="whichClutter" :src="require(`@/assets/images/clutter/${whichClutter}.png`)" :alt="whichClutter"></v-img>
            </transition>
          </NuxtLink>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
  export default {
    name:'entrance',
    transition:'fadeSwitch',
    data() {
      return {
        shown: true,
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
      }
    },
    methods: {
      rollRandomNumber: (max) => {
        return Math.floor(Math.random() * (max))
      } 
    },
    mounted: function() { 
      this.randomNumber = this.rollRandomNumber(this.clutterNames.length)
      this.changeClutter = setInterval(() => {
        if( this.randomNumber >= this.clutterNames.length - 1 ) {
          this.randomNumber = 0;
        }
        else { this.randomNumber++; }
      }, 3500 + ((this.rollRandomNumber(this.clutterNames.length) + 1) * 100 ));
    },
    beforeDestroy: function() {
      clearInterval(this.changeClutter)
    }
  }
</script>

<style scoped>
.cursor:hover {
  cursor:pointer;
}

a, a:-webkit-any-link {
  text-decoration: none;
}

.abberation {
  padding:0;
  filter: sepia() hue-rotate(75deg);
}
</style>