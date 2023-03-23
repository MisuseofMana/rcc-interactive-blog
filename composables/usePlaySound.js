import { Howl } from 'Howler'

export function usePlaySound(targetSound, callback, fadeTo=1) {
	const currentSound = new Howl({
		src: [`/audio/sound-effects/${targetSound}.mp3`],
		loop: false,
		volume: fadeTo,
		onend: callback
	})
	
	currentSound.play()
}