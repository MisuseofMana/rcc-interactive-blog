import { Howl } from 'howler'
import { useAudioStore } from '~/store/useAudioStore.js'
import { ref } from 'vue'

// usePageAudio is installed on pages at the layout level
// there may need to be a change made where the subscription happens in mutation calls
// for some reason the function is running twice.
export function usePageAudio() {
	const audioSequences = ref([])

	const audioStore = useAudioStore()
	const volume = ref(1)

	audioStore.$subscribe((_mutation, { currentSound }) => {
		console.log(currentSound.volume)
		volume.value = currentSound?.volume || 1
			
		const stopOldSound = () => {
			if(audioSequences.value.length > 1) {
				const oldSound = audioSequences.value[0].sound
				oldSound.fade(audioSequences.value[0].sound._volume, 0, 1000)
				setTimeout(() => {
					oldSound.stop()
					audioSequences.value.shift()
				}, 1000)
			}
		}

		// gate triggers unless there is a currentSound payload
		if (currentSound.soundLink === null) {
			stopOldSound()
			return
		}

		// store howler reference
		// trigger unlock event when sound is unlocked by user
		const newSound = new Howl({
			src: currentSound.soundLink,
			loop: true,
			html5: true,
			autoPlay: true,
			volume: 0,
			preload: true,
		})

		// play new sound
		newSound.play()
		// fade sound in
		newSound.fade(0, volume.value, 1000)
			
		// add new sound to end of audioSequences array in audioStore
		audioSequences.value.push({sound: newSound, volume})
		stopOldSound()
	})
}