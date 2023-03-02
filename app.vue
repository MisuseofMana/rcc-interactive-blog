<template>
  <NuxtLayout name="landing">
    <NuxtLink to="/brainwash">
      <v-container fill-height>
        <v-row>
          <v-col cols="12" class="d-flex justify-center align-center">
            <img width="500px" height="500px" src="~/assets/images/icons/pigpen.png"/>
          </v-col>
        </v-row>
      </v-container>
    </NuxtLink>
  </NuxtLayout>
</template> 

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const imageWidth = computed(() => {
  return smAndDown ? '90%' : '300px'
})
</script>

<style scoped>
.cursor:hover {
  cursor:pointer;
}

a, a:-webkit-any-link {
  text-decoration: none;
}
</style>