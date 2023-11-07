import { ref } from 'vue'

export function useLastUpdated(timestamp){
	const lastUpdated = ref(`...`) 
	const isRecent = ref(false)

	if( timestamp !== undefined ) {
		const today = new Date().getTime()
		const oldDate = new Date(timestamp.toDate()).getTime()
		const hPassed = Math.ceil(( today - oldDate ) / (60 * 60 * 1000))
		const dPassed = Math.ceil(( today - oldDate ) / (1000 * 3600 * 24))
	
		lastUpdated.value = hPassed + `h`
		if(hPassed >= 24) {
			lastUpdated.value = (hPassed/24).toFixed(2) + `d`
		}
		
		if(dPassed >= 365) {
			lastUpdated.value = `~` + (dPassed/365).toFixed(2) + `y`
		}
		
		isRecent.value = (dPassed < 60)
	}


	return { lastUpdated, isRecent } 
}