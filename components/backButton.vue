<template>
    <v-btn nuxt :to="linkName" class="text-decoration-none" min-height="50px" min-width="30%" color="primary-darken-1">
		<div v-if="frontIcon">
			<v-icon class="mr-2" size="25px" color="primary">{{ frontIcon }}</v-icon>
		</div>
		<div class="text-body-1 text-uppercase text-primary mr-2" :class="smallScreens ? '' : ''">
			{{ text }}
		</div>
		<div v-if="realmIcons">
			<v-icon :icon="`mdi-${items}`" size="25px" v-for="(items, index) in realmIcons" :key="items+index" color="primary"></v-icon>
		</div>
    </v-btn>
</template> 

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
	frontIcon: String,
	text: String,
	realmIcons: Array,
	linkName: String,
})

const { smAndDown } = useDisplay()
const isMounted = ref(false)

const smallScreens = computed(() => {
	if(isMounted) return smAndDown
	else return false
})

onMounted(() => {
	isMounted.value = true
})
</script>