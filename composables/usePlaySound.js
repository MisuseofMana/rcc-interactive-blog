import { Howl } from 'howler'

export function usePlaySound({targetSound, vol = 1 }, callback) {
	const currentSound = new Howl({
		src: [`/audio/sound-effects/${targetSound}.mp3`],
		loop: false,
		volume: vol,
		onend: callback
	})
	
	currentSound.play()
}