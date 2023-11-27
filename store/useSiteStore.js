import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLastUpdated } from '@/composables/useLastUpdated'

// eslint-disable-next-line no-undef
const route = useRoute()

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSiteStore = defineStore(`site`, () => {
	const hasInteracted = ref(false)
	const examAutoStart = ref(false)
	const realmNames = ref([])
	const realmList = ref([])
	const realmData = reactive({
		
	})
	const realmLastUpdated = computed(() => {
		const { lastUpdated } = useLastUpdated(realmData[route.params.realm]?.lastUpdated)
		return lastUpdated.value
	})
	return { hasInteracted, examAutoStart, realmNames, realmList, realmData, realmLastUpdated }
})