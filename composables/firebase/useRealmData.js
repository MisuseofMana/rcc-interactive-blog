import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { reactive } from 'vue'
import { query, collection, collectionGroup, where, getDocs, getFirestore, orderBy } from "firebase/firestore"

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

	const playAudio = () => {
		siteStore.$patch({currentSound: realm.audioLink})
	}

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
			siteStore.realmData[realmSlug] = { 
				...realmResult[0],
				realmSigil: [new File([realmResult[0].sigilImageLink], `${realmResult[0].slug}.png`)],
				realmAudio: [new File([realmResult[0].audioLink], `${realmResult[0].slug}.mp3`)],
			}
			Object.assign(realm, siteStore.realmData[realmSlug])
			playAudio()
		}
		else {
			// if site store contains realm data already, serve stored document
			Object.assign(realm, siteStore.realmData[realmSlug])
			playAudio()
		}
	}
	
	// run the async query
	getRealmData()
		
	return {
		realm
	}
}

export function useCoverPhotos() {
	const coverPhotos = reactive([])
	const storedCoverPhotos = siteStore?.realmCoverPhotos
	
	const getCoverPhotoData = async () => {
		const photos = query(collectionGroup(db, `photographs`), where(`useAsCoverImage`, `==`, true))
		const photosResult = []
		
		if(storedCoverPhotos.length === 0) {
			const querySnapshot = await getDocs(photos)
			querySnapshot.forEach((doc) => {
				const {realmId, imageLink} = doc.data()
				photosResult.push({ realmId, imageLink })
			})
			// assign siteStore & realm ref to realm at 0 index returned by query
			siteStore.realmCoverPhotos = { 
				...photosResult,
			}
			Object.assign(coverPhotos, siteStore.realmCoverPhotos)
			return
		}
		else {
			// if site store contains realm data already, serve stored document
			Object.assign(coverPhotos, siteStore.realmCoverPhotos)
		}
	}
	
	// run the async query
	getCoverPhotoData()
	
	return {
		coverPhotos
	}
}

export function useRealmPhotos(realmSlug) {
	const photos = reactive([])
	const storedPhotos = siteStore?.realmPhotos[realmSlug]

	const getPhotoData = async () => {
		// orderBy(`order`)
		const q = query(collection(db, `realms`, realmSlug, `photographs`), orderBy(`order`))
		const photosResult = []
		
		if(storedPhotos === undefined) {
			// run query
			const querySnap = await getDocs(q)
			querySnap.forEach(doc => {
				photosResult.push({...doc.data(), id: doc.id})
			})
			// assign siteStore & photos ref to realm at 0 index returned by query
			siteStore.realmPhotos[realmSlug] = { 
				...photosResult,
			}
			Object.assign(photos, siteStore.realmPhotos[realmSlug])
			return
		}
		else {
			// if site store contains photo data already, serve stored document
			Object.assign(photos, siteStore.realmPhotos[realmSlug])
		}
	}
	
	// run the async query
	getPhotoData()
	
	return {
		photos
	}
}

export function useRealmArtifacts(realmSlug) {
	const artifacts = reactive([])
	const storedArtifacts = siteStore?.realmArtifacts[realmSlug]

	const getArtifactData = async () => {
		const q = query(collection(db, `realms`, realmSlug, `artifacts`))
		const artifactsResult = []
		
		if(storedArtifacts === undefined) {
			// run query
			const querySnap = await getDocs(q)
			querySnap.forEach(doc => {
				artifactsResult.push({...doc.data(), id: doc.id})
			})
			// assign siteStore & artifacts ref to realm at 0 index returned by query
			siteStore.realmArtifacts[realmSlug] = { 
				...artifactsResult,
			}
			Object.assign(artifacts, siteStore.realmArtifacts[realmSlug])
			return
		}
		else {
			// if site store contains photo data already, serve stored document
			Object.assign(artifacts, siteStore.realmArtifacts[realmSlug])
		}
	}
	
	// run the async query
	getArtifactData()
	
	return {
		artifacts
	}
}
