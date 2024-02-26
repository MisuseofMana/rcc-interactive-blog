<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtLayout name="landing">
			<v-container
				fluid
				class="pa-0">
				<v-row dense
					no-gutters>
					<v-col cols="12"
						class="d-flex flex-column align-center justify-center">
						<div class="brainwashContainer cursor d-flex flex-column align-center justify-center">
							<div class="imageContainer">
								<transition name="brainwash"
									mode="out-in">
									<v-img
										class="abberation mb-8"
										max-height="200"
										max-width="200"
										width="200"
										height="200"
										:key="whichClutter[0]"
										:src="`/images/clutter/${whichClutter[0]}.png`"
										:alt="whichClutter[0]"></v-img>
								</transition>
							</div>
							<div class="progressContainer">
								<v-progress-linear
									color="primary-darken-2"
									height="5"
									rounded
									indeterminate
								>
								</v-progress-linear>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</NuxtLayout>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import { useSiteStore } from '~/store/useSiteStore.js'
import { useRandomNumber} from '~/composables/useRandomNumber'
const siteStore = useSiteStore()
siteStore.$patch({currentSound: `audio/brainwash.mp3`})


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
const whichClutter = ref([])
let changeClutter = null

const swapClutter = () => {
	whichClutter.value.unshift(clutterNames[useRandomNumber(clutterNames.length)])
}

onMounted(() => {
	changeClutter = setInterval(() => {
		swapClutter()
		// eslint-disable-next-line no-undef
		if(whichClutter.value.length >= 5) navigateTo({ path: `/intro` })
	}, 1200)

})

onBeforeUnmount(() => {
	clearInterval(changeClutter)
})

onBeforeMount(() => {
	clutterNames.forEach((name) => {
		let image = new Image()
		image.src = `/images/clutter/${name}.png` 
	})
	whichClutter.value.unshift(clutterNames[useRandomNumber(clutterNames.length)])
})
</script>

<style scoped>
	.brainwashContainer { 
		min-height: 100vh;
		min-width: 100vw;
	}
	.imageContainer {
		min-height:200px;
		min-width: 200px;
	}
	.progressContainer {
		max-width: 200px;
		width: 200px;
		min-height: 12px;
	}
</style>