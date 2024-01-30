import { Howl } from 'Howler'
import { onMounted, onUnmounted } from 'vue'
import { useSiteStore } from '~/store/useSiteStore.js'

export function usePageAudio() {
	let target = ``
	let currentSound = null
	let currentlyPlaying
	const siteStore = useSiteStore()
	
	onMounted(() => {
		// eslint-disable-next-line no-undef
		const route = useRoute()
		const splitRoute = route.path.split(`/`)
		splitRoute.shift()

		if(splitRoute.includes(`insights`)) {
			target = splitRoute[1]
		}
		else {
			target = splitRoute[0]
		}

		currentSound = new Howl({
			src: [`/audio/${target}.mp3`],
			loop: true,
			volume: 0,
			onunlock: function () {
				setTimeout(() => {
					siteStore.hasInteracted = true
				}, 1100)
			},
		})
		
		currentlyPlaying = currentSound.play()
		currentSound.fade(0, 1, 1000, currentlyPlaying)
	})

	onUnmounted(() => {
		if(siteStore.hasInteracted) {
			currentSound.fade(1, 0, 1000, currentlyPlaying)
		}
		else {
			currentSound.stop(currentlyPlaying)
		} 
		// let realmTransition = new Howl({
		// 	src: [`/audio/sound-effects/realmTransition.mp3`],
		// 	loop: false,
		// 	volume: .05
		// })
		// realmTransition.play()
	})
}