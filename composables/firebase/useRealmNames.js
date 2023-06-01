import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { query, getDocs, collection, where, getFirestore } from "firebase/firestore"

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
	const getRealmNames = async () => {
		if (!siteStore.realmNames.length) {
			const getRealmsTakingSubmissions = await getDocs(
				query(collection(db, `realms`), where(`takingSubmissions`, `==`, true))
			)
			let container = [{ title: `Uncertain`, value: `uncertain`}]
			// populate realm names with results from query
			getRealmsTakingSubmissions.forEach((doc) => {
				container.push({title: doc.data().title, value: doc.id})
			})
			siteStore.realmNames = container
		}
	}
	getRealmNames()
}
