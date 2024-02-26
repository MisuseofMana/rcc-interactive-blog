import { Howl } from 'howler'

export function usePlaySound(targetSound, callback) {
	const currentSound = new Howl({
		src: [`/audio/sound-effects/${targetSound}.mp3`],
		loop: false,
		volume: 1,
		onend: callback
	})
	
	currentSound.play()
}