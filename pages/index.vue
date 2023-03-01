<template>
  <div>
    <img :max-width="imageWidth" class="abberation cursor" src="~/assets/images/icons/pigpen.png"/>
  </div>
</template> 

<script setup>
  import { computed } from 'vue'
  // import { useDisplay } from 'vuetify'

  definePageMeta({
    layout: `landing`,
  });

  // const { smAndUp } = useDisplay()
  // const imageWidth = computed(() => {
  //   return smAndUp ? '90%' : '300px'
  // })
</script>

<style scoped>
.cursor:hover {
  cursor:pointer;
}

a, a:-webkit-any-link {
  text-decoration: none;
}
</style>