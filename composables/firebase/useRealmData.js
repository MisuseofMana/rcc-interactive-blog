import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { ref } from 'vue'
import { query, collection, where, getDocs, getFirestore } from "firebase/firestore"

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

// Just pass in the realm slug to the composable.
export function useRealmData(realmSlug) {
	const realm = ref(null)

	const getRealmData = async () => {
		const q = query(collection(db, `realms`), where(`slug`, `==`, realmSlug))
		const querySnap = await getDocs(q)
		const realmResult = []
		querySnap.forEach(doc => {
			realmResult.push({...doc.data(), id: doc.id})
			console.log(doc.data())
		})
		if(siteStore?.realmData[realmSlug] != undefined) {
			// if site store has queried the realm already, return site cache
			realm.value = siteStore.realmData[realmSlug]
			return
		}
		else {
			siteStore.realmData[realmSlug] = realmResult[1]
			realm.value = siteStore.realmData[realmSlug]
		}
	}
	
	getRealmData()
	
	return {
		realm
	}
}
