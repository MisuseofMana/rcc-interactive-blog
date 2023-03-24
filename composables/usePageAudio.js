import { Howl } from 'Howler'
import { onMounted, onUnmounted } from 'vue'

export function usePageAudio() {
	let target = ``
	let currentSound = null
	let currentlyPlaying
	let isUnlocked = false
	
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
					isUnlocked = true
				}, 1100)
			},
			
		})
		
		currentlyPlaying = currentSound.play()
		currentSound.fade(0, 1, 1000, currentlyPlaying)
	})

	onUnmounted(() => {
		if(isUnlocked) {
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