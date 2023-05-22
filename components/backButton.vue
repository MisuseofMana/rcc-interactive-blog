<template>
	<v-btn nuxt
		:to="linkName"
		class="text-decoration-none"
		min-height="50px"
		:loading="isLoading"
		:height="smAndDown ? '55px' : '50px'"
		min-width="100%"
		:color="caution ? 'deep-orange-darken-4' : 'primary-darken-1'">
		<div v-if="frontIcon">
			<v-icon class="mr-2"
				size="25px"
				:color="caution ? 'deep-orange-darken-4' : 'primary'"
				:icon="`mdi-${frontIcon}`"></v-icon>
		</div>
		<div class="text-body-1 text-uppercase mr-2"
			:class="caution ? 'text-deep-orange-darken-4' : 'text-primary'">
			{{ text }}
		</div>
		<div v-if="realmIcons">
			<v-icon :icon="`mdi-${items}`"
				size="25px"
				v-for="(items, index) in realmIcons"
				:key="items+index"
				:color="caution ? 'deep-orange-darken-4' : 'primary'"></v-icon>
		</div>
	</v-btn>
</template> 

<script setup>
import { onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

defineProps({
	frontIcon: String,
	text: String,
	realmIcons: Array,
	linkName: String,
	caution: Boolean,
	isLoading: Boolean,
})

const { smAndDown } = useDisplay()
const isMounted = ref(false)

onMounted(() => {
	isMounted.value = true
})
</script>