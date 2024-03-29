import { Howl } from 'Howler'
import { useSiteStore } from '~/store/useSiteStore.js'

export function usePageAudio() {
	const siteStore = useSiteStore()
	
	// subscribe to siteStore events
	siteStore.$subscribe((mutation, state) => {
		const stopOldSound = () => {
			if(state.audioSequences.length > 1) {
				const oldSound = state.audioSequences[0]
				oldSound.fade(1, 0, 1000)
				setTimeout(() => {
					oldSound.stop()
					state.audioSequences.shift()
				}, 1000)
			}
		}
		// gate triggers unless there is a currentSound payload
		if(mutation.type === `patch object`) {
			if (mutation.payload?.currentSound === null) {
				stopOldSound()
				return
			}
			// store howler reference
			// trigger unlock event when sound is unlocked by user
			const newSound = new Howl({
				src: mutation.payload?.currentSound,
				loop: true,
				html5: true,
				autoPlay: true,
				volume: 0,
				preload: true,
			})

			// play new sound
			newSound.play()
			newSound.fade(0, 1, 1000)
			
			// add new sound to end of audioSequences array in siteStore
			state.audioSequences.push(newSound)
			
			stopOldSound()
		}
	})
}