<template>
  <v-container class="my-5">
      <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
                <div v-if="error.statusCode === 404">
                    <h1 class="primary--text text-center text-h1 mb-5">
                        ARCHIVE ERROR - PAGE NOT FOUND
                    </h1>
                    <div class="d-flex align-center justify-center mb-5">
                        <v-img class="abberation" height="600" width="600" contain :aspect-ratio="1" src="/images/error.png" alt=""></v-img>
                    </div>
                    <h1 class="primary--text text-center text-h1 mb-5">
                        ARE YOU LOST, OPERATOR?
                    </h1>
                </div>
                <div v-else>
                    <h1>An error occurred</h1>
                </div>
            </v-col>
        </v-row>
    <div class="my-2">
        <BackButton class="mr-2" text="Briefing" :realm-icons="['puzzle']" link-name="/briefing" />
        <BackButton class="mr-2" text="Realms" :realm-icons="['city-variant-outline']" link-name="/realms" />
        <BackButton text="Artifacts" :realm-icons="['diamond-stone']" link-name="/artifacts" />
    </div>
  </v-container>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>