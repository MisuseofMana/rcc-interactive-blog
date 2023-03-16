<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLink to="/briefing">
		<NuxtLayout name="landing">
			<v-row dense
				no-gutters>
				<v-col class="d-flex justify-center align-center"
					cols="12">
					<transition name="brainwash" mode="in-out">
						<v-img
							max-width="200px"
							class="abberation"
							:key="whichClutter"
							:src="`/images/clutter/${whichClutter}.png`"
							:alt="whichClutter"></v-img>
					</transition>
				</v-col>
			</v-row>
		</NuxtLayout>
	</NuxtLink>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const clutterNames = [ 
	`decay`, 
	`formula`, 
	`graph`, 
	`cloud`, 
	`dose`, 
	`table`, 
	`flow`, 
	`section`, 
	`geometry`, 
	`calculation`, 
	`block`, 
	`bedding`, 
	`path`, 
	`algorithm`, 
	`antenna`, 
	`board`, 
	`circuit`,
	`coil`,
	`curve`,
	`districts`,
	`door`,
	`figures`,
	`gear`,
	`knob`,
	`melt`,
	`power`,
	`pyramid`,
	`radius`,
	`realms`,
	`sphere`,
	`stage`,
	`tower`,
]
const randomNumber = ref(0) 
const changeClutter = ref(null)

const whichClutter = computed(() => {
	return clutterNames[randomNumber.value]
})	
const shown = ref(0)

const rollRandomNumber = (max) => {
	return Math.floor(Math.random() * (max))
}

onMounted(() => {
	randomNumber.value = rollRandomNumber(clutterNames.length)
	changeClutter.value = setInterval(() => {
		randomNumber.value = rollRandomNumber(clutterNames.length)
		shown.value++
		if(shown.value >= 25) navigateTo({ path: '/briefing' })
	}, 300)
	randomNumber.value = rollRandomNumber(clutterNames.length)
})

onBeforeUnmount(() => {
	clearInterval(changeClutter.value)
})
</script>