import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTrackStore = defineStore(`track`, () => {

	const audioQueue = ref([])

	return { 
		audioQueue
	}
})