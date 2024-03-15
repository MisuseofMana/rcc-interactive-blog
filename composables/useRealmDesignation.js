import { useLastUpdated } from '@/composables/useLastUpdated'
import { unref } from 'vue'

export function useRealmDesignation(lastUpdatedTimestamp) {
	const { dPassed } = useLastUpdated(lastUpdatedTimestamp)
	const daysSinceUpdated = unref(dPassed)
	if (daysSinceUpdated <= 3) return `Shifting`
	else if (daysSinceUpdated <= 6) return `Adjusting`
	else if (daysSinceUpdated <= 10) return `Balancing`
	else if (daysSinceUpdated <= 15) return `Settling`
	else if (daysSinceUpdated <= 20) return `Docile`
	else if (daysSinceUpdated <= 30) return `Stagnant`
	else if (daysSinceUpdated >= 31) return `Dormant`
} 