<template>
    <v-btn :href="linkName" :to="linkName" :min-height="[smAndDown ? `75px` : `50px`]" color="primary-darken-1">
        <div class="text-body-1 text-uppercase text-primary">
            {{ text }}
        </div>
    </v-btn>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const { smAndDown } = useDisplay()
const props = defineProps({
	text: String,
	linkName: String,
})
</script>