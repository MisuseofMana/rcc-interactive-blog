<template>
  <NuxtLink to="/brainwash">
  <v-container fill-height>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
            <v-img :max-width="imageWidth" class="abberation cursor" :src="require(`@/assets/images/icons/pigpen.png`)"></v-img>
          </v-col>
        </v-row>
      </v-container>
  </NuxtLink>
</template> 

<script>
  export default {
    name:'Index',
    transition:'fadeSwitch',
    layout: 'landing',
    computed: {
      imageWidth(){
        return this.$vuetify.breakpoint.sm ? '90%' : '300px'
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