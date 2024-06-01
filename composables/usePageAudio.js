import { Howl } from 'howler'
import { useAudioStore } from '~/store/useAudioStore.js'
import { useTrackStore } from '~/store/useTrackStore.js'
import { ref } from 'vue'

// usePageAudio is installed on pages at the layout level
// there may need to be a change made where the subscription happens in mutation calls
// for some reason the function is running twice.
export function usePageAudio() {

	const audioStore = useAudioStore()
	const trackStore = useTrackStore()
	const volume = ref(1)

	audioStore.$subscribe((_mutation, { currentSound }) => {
		volume.value = currentSound?.volume || 1
		
		if (currentSound.soundLink === null) {
			trackStore.audioQueue.forEach((track) => {
				console.log(track.sound)
				track.sound.fade(track.sound._volume, 0, 1000)
			})
			trackStore.audioQueue = []
			return
		}

		const stopOldSound = () => {
			if(trackStore.audioQueue.length > 1) {
				const oldSound = trackStore.audioQueue[0].sound
				oldSound.fade(trackStore.audioQueue[0].sound._volume, 0, 1000)
				setTimeout(() => {
					oldSound.stop()
					trackStore.audioQueue.shift()
				}, 1000)
			}
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
			onfade: function() {
				if (newSound.volume() === 0) {
					newSound.stop()
				}
			}
		})

		// play new sound
		newSound.play()
		// fade sound in
		newSound.fade(0, volume.value, 1000)
			
		// add new sound to end of trackStore.audioQueue array in trackStore
		trackStore.audioQueue.push({sound: newSound, volume})
		stopOldSound()
	})
}