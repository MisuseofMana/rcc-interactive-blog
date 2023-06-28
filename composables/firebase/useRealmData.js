import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
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

const route = useRoute()
const siteStore = useSiteStore()
const db = getFirestore(firebaseApp)

export function useRealmData(afterwards) {
	const getRealmData = async () => {
		if (!siteStore.realmData[route.params.realm]) {
			const getCurrentRealmData = await getDoc(doc(db, `realms`, route.params.realm))
			siteStore.realmData[route.params.realm] = getCurrentRealmData.data()
		}
		afterwards(siteStore.realmData[route.params.realm])
	}
	getRealmData()
}
