import { ref } from 'vue'

export function useLastUpdated(timestamp){
	const lastUpdated = ref(`...`) 
	const isRecent = ref(false)
	const dPassed = ref(0)

	if( timestamp !== undefined ) {
		const today = new Date().getTime()
		const oldDate = new Date(timestamp.toDate()).getTime()
		const hPassed = Math.ceil(( today - oldDate ) / (60 * 60 * 1000))
		dPassed.value = Math.ceil(( today - oldDate ) / (1000 * 3600 * 24))

		lastUpdated.value = hPassed + `h`
		if(hPassed >= 24) {
			lastUpdated.value = Math.floor(hPassed/24) + `d`
		}
		
		if(dPassed.value >= 365) {
			lastUpdated.value = (dPassed.value/365).toFixed(2) + `y`
		}
		
		isRecent.value = (dPassed.value < 30)

	}


	return { lastUpdated, isRecent, dPassed } 
}