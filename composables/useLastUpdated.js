import { ref } from 'vue'

export function useLastUpdated(timestamp){
	const lastUpdated = ref(`...`) 
	const isRecent = ref(false)
	const designation = ref(`...`)

	if( timestamp !== undefined ) {
		const today = new Date().getTime()
		const oldDate = new Date(timestamp.toDate()).getTime()
		const hPassed = Math.ceil(( today - oldDate ) / (60 * 60 * 1000))
		const dPassed = Math.ceil(( today - oldDate ) / (1000 * 3600 * 24))

		lastUpdated.value = hPassed + `h`
		if(hPassed >= 24) {
			lastUpdated.value = Math.floor(hPassed/24) + `d`
		}
		
		if(dPassed >= 365) {
			lastUpdated.value = (dPassed/365).toFixed(2) + `y`
		}

		if (dPassed <= 3) designation.value = `Emergent`
		else if (4 <= dPassed <= 6) designation.value = `Adjusting`
		else if (7 <= dPassed <= 10) designation.value = `Balancing`
		else if (11 <= dPassed <= 15) designation.value = `Settling`
		else if (16 <= dPassed <= 20) designation.value = `Docile`
		else if (21 <= dPassed <= 30) designation.value = `Stagnating`
		else if (dPassed >= 31) designation.value = `Dormant`
		
		isRecent.value = (dPassed < 30)

	}


	return { lastUpdated, isRecent, designation } 
}