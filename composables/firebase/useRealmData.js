import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { reactive } from 'vue'
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
	const realm = reactive({})
	const storedRealm = siteStore?.realmData[realmSlug]

	const getRealmData = async () => {
		const q = query(collection(db, `realms`), where(`slug`, `==`, realmSlug))
		const realmResult = []
		
		if(storedRealm === undefined) {
			// run query
			const querySnap = await getDocs(q)
			querySnap.forEach(doc => {
				realmResult.push({...doc.data(), id: doc.id})
			})
			// assign siteStore & realm ref to realm at 0 index returned by query
			siteStore.realmData[realmSlug] = realmResult[0]
			Object.assign(realm, realmResult[0])
			return
		}
		else {
			// if site store contains realm data already, serve stored document
			realm.value = siteStore.realmData[realmSlug]
		}
	}
	
	// run the async query
	getRealmData()
	
	return {
		realm
	}
}
