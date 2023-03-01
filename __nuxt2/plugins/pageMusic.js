import audio from '@/plugins/audio.js'

let volumes = {}
let target = ``

function storeVolume(musicName) {
	volumes[musicName] = audio[musicName]._volume
}

export default {
	mounted() {
		if(this.$data.slug) target = this.$data.slug
		else if (this.$options.music) target = this.$options.music

		// if the volume isn't stored, store it
		if(!(target in volumes)) storeVolume(target)

		// reference the desired fade to volume
		const fadeToVolume = volumes[target]

		audio[target]._volume = 0
		audio[target].play()
		audio[target].fade(0, fadeToVolume, 1500)
	},
	beforeDestroy() {
		// reference the desired fade from volume
		const fadeFromVolume = volumes[target]

		audio[target].fade(fadeFromVolume, 0, 1500)
		audio[target].on(`fade`, function() {
			if (audio[target]._volume === 0) {
				audio[target].pause(currentlyPlaying)
				console.log(currentlyPlaying)
			}
		})

	}
}