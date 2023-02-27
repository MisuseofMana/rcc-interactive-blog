<template>
  <v-container class="my-5">
      <v-row>
            <v-col cols="12" class="d-flex align-center justify-center">
                <v-card color="light-green darken-4" class="pa-10 mb-5 primary--text">
                    <div v-if="error.statusCode === 404" class="d-flex flex-column align-center justify-center">
                        <h1 class="primary--text text-center text-h1 mb-5">
                            ARCHIVE ERROR - PAGE NOT FOUND
                        </h1>
                        <div class="d-flex align-center justify-center mb-5">
                            <v-img class="abberation" height="200" width="200" contain :aspect-ratio="1" src="/images/error.png" alt="geometric shape"></v-img>
                        </div>
                        <h2 class="primary--text text-center text-h2 mb-5">
                            ARE YOU LOST, OPERATOR?
                        </h2>
                        <BackButton class="mr-2" text="Back To Safety" :realm-icons="['safe-square']" link-name="/realms" />
                    </div>
                    <div v-else>
                        <h1>An error occurred</h1>
                    </div>
                </v-card>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
import BackButton from '@/components/backButton.vue'

export default {
	props: [`error`],
	components: {
		BackButton,
	}
}
</script>