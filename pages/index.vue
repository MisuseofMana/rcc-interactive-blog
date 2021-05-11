<template>
  <v-container fill-height>
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <transition name="fade" mode="out-in"> 
        <div class="text-center animate__animated cursor">
          <NuxtLink to="realms">
            <div class="text-h1 primary--text">X</div>
          </NuxtLink>
        </div>
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
        shown: true
      }
    },
    methods: {
      enterSite() {
        this.$router.push({ path: 'gallery' })
      }
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
</style>