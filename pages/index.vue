<template>
  <v-container fill-height>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <NuxtLink to="/brainwash">
            <v-img max-width="550" class="abberation cursor" :src="require(`@/assets/images/icons/pigpen.png`)"></v-img>
          </NuxtLink>
        </v-col>
      </v-row>
  </v-container>
</template> 

<script>
  export default {
    name:'Index',
    transition:'fadeSwitch',
    layout: 'landing',
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