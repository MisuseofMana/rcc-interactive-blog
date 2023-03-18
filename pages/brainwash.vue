<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLink to="/briefing">
		<NuxtLayout name="landing">
			<v-row dense
				no-gutters>
				<v-col class="d-flex justify-center align-center"
					cols="12">
					<Transition name="brainwash"
						mode="out-in">
						<v-img 
							max-width="200px"
							max-height="200px"
							class="abberation"
							:key="whichClutter"
							:src="`/images/clutter/${whichClutter}.png`"
							:alt="whichClutter"></v-img>
					</Transition>
				</v-col>
			</v-row>
		</NuxtLayout>
	</NuxtLink>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import { useRandomNumber } from '~/composables/useRandomNumber'

const clutterNames = [ 
	`algorithm`, 
	`antenna`, 
	`block`, 
	`bedding`, 
	`board`, 
	`calculation`, 
	`circuit`,
	`cloud`, 
	`coil`,
	`curve`,
	`decay`, 
	`districts`,
	`door`,
	`dose`, 
	`figures`,
	`flow`, 
	`formula`, 
	`gear`,
	`geometry`, 
	`graph`, 
	`knob`,
	`melt`,
	`path`, 
	`power`,
	`pyramid`,
	`radius`,
	`realms`,
	`section`, 
	`stage`,
	`sphere`,
	`table`, 
	`tower`,
]
const randomNumber = ref(0) 
let changeClutter = null

const whichClutter = computed(() => {
	return clutterNames[randomNumber.value]
})	

const shown = ref(0)

onMounted(() => {
	randomNumber.value = useRandomNumber(clutterNames.length)
	changeClutter = setInterval(() => {
		if(randomNumber.value < clutterNames.length - 1) {
			randomNumber.value += 1
		}
		else {
			randomNumber.value = 0
		}
		shown.value++
		// eslint-disable-next-line no-undef
		if(shown.value > 12) navigateTo({ path: `/briefing` })
	}, 450)
	randomNumber.value = useRandomNumber(clutterNames.length)
})

onBeforeUnmount(() => {
	clearInterval(changeClutter)
})

onBeforeMount(() => {
	clutterNames.forEach((name) => {
		let image = new Image()
		image.src = `/images/clutter/${name}.png` 
	})
})
</script>