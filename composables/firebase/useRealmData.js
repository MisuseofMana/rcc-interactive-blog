import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { ref } from 'vue'
import { doc, getDoc, getFirestore } from "firebase/firestore"

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

export function useRealmData(realmSlug) {
	const realm = ref(null)

	const getRealmData = async () => {
		const docSnap = await getDoc(doc(db, `realms`, realmSlug))
		if(siteStore?.realmData[realmSlug] != undefined) {
			realm.value = siteStore.realmData[realmSlug]
			return
		}
		else if (docSnap.exists()) {
			realm.value = docSnap.data()
			siteStore.realmData[realmSlug] = docSnap.data()
		} else {
			console.log(`No such document!`)
		}
	}
	
	getRealmData()
	
	return {
		realm
	}
}
