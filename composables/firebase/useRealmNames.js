import { ref } from 'vue'
import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { query, getDocs, collection, getFirestore, orderBy, limit } from "firebase/firestore"

export const firebaseApp = initializeApp({
	apiKey: `AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY`,
	authDomain: `crickburrowarchives.firebaseapp.com`,
	projectId: `crickburrowarchives`,
	storageBucket: `crickburrowarchives.appspot.com`,
	messagingSenderId: `708349315619`,
	appId: `1:708349315619:web:5a599bfa7961f0bf217f96`,
	measurementId: `G-CLXB8V1MH8`
})

const siteStore = useSiteStore()
const db = getFirestore(firebaseApp)

export function useRealmNames() {
	const nameList = ref([])

	const getRealmNames = async () => {
		if (siteStore.realmNames.length) {
			nameList.value = siteStore.realmNames
		}
		else {
			const getRealmsTakingSubmissions = await getDocs(
				query(collection(db, `realms`))
			)
			//[{ title: `Uncertain`, value: `uncertain`}]
			let container = []
			// populate realm names with results from query
			getRealmsTakingSubmissions.forEach((doc) => {
				container.push({title: doc.data().title, value: doc.id})
			})
			siteStore.realmNames = container
			nameList.value = container
		}
	}

	getRealmNames()

	return {
		nameList,
	}
}

export function useManageableRealms(first=10) {
	const realmList = ref([])

	const getRealmList = async () => {
		if (siteStore.realmList.length) {
			realmList.value = siteStore.realmNames
		}
		else {
			const getRealmsTakingSubmissions = await getDocs(
				query(collection(db, `realms`), orderBy(`title`), limit(first))
			)
			let container = []
			// populate realm names with results from query
			getRealmsTakingSubmissions.forEach((doc) => {
				const { id } = doc
				// console.log(doc.data())
				const {sigilImageLink, hasSemiotics, clearanceNeeded, abbTitle, subtitle, title, iconNames, slug, lastUpdated } = doc.data()
				container.push({
					title, 
					clearanceNeeded,
					id,
					subtitle,
					abbTitle,
					sigilImageLink,
					iconNames,
					hasSemiotics,
					slug,
					lastUpdated
				})
			})
			siteStore.realmNames = container
			realmList.value = container
		}
	}
	
	getRealmList()

	return {
		realmList,
	}
}
