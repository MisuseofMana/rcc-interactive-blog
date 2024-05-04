import { useSiteStore } from '~/store/useSiteStore.js'
import { useAudioStore } from '~/store/useAudioStore.js'
import { initializeApp } from 'firebase/app'
import { ref } from 'vue'
import { query, collection, collectionGroup, where, doc, getDoc, getDocs, getFirestore, orderBy } from "firebase/firestore"

export const firebaseApp = initializeApp({
	apiKey: `AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY`,
	authDomain: `crickburrowarchives.firebaseapp.com`,
	projectId: `crickburrowarchives`,
	storageBucket: `crickburrowarchives.appspot.com`,
	messagingSenderId: `708349315619`,
	appId: `1:708349315619:web:5a599bfa7961f0bf217f96`,
	measurementId: `G-CLXB8V1MH8`,
})

// returnable refs
// getRealmData
const realmData = ref({})
const realmError = ref(``)

// getCoverPhotos
const coverPhotosData = ref([])
const coverPhotosError = ref(``)

// getRealmPhotos
const realmPhotosData = ref([])
const realmPhotosError = ref(``)

const artifactsData = ref([])
const artifactsError = ref(``)

const db = getFirestore(firebaseApp)

const playAudio = (audioLink) => {
	const audioStore = useAudioStore()
	audioStore.$patch((state) => {
		state.currentSound = { 
			soundLink: audioLink,
		}
	})
}

// PROMISES
// used to get the entire root doc of a specific realm
async function getRealmDocData(realmName, options) {
	const siteStore = useSiteStore()
	// get realms doc (singular) where the slug equals the route param 'realm'
	const queryForRealmData = doc(db, `realms`, realmName)

	// if the realm is stored in the site store, return that version of it immediately
	// and forego the subsequeryForRealmDatauent try catch block
	if(Object.keys(siteStore?.realmData).includes(realmName)) {
		realmData.value = siteStore.realmData[realmName]
		if(options?.noMusic) return
		playAudio(siteStore.realmData[realmName].audioLink)
		return
	}

	try {
		const res = await getDoc(queryForRealmData)
		if (res.exists()) {
			realmData.value = {
				...res.data(),
				realmSigil: res.data().sigilImageLink ? [new File([res.data().sigilImageLink], `${res.data().slug}.png`)] : null,
				realmAudio: res.data().audioLink ? [new File([res.data().audioLink], `${res.data().slug}.mp3`)] : null,
			}
			siteStore.realmData[realmName] = realmData.value
			if(options?.noMusic) return
			playAudio(realmData.value.audioLink)
		}
	}
	catch (error) {
		if (error) {
			realmError.value = realmError
		}
	}
}

// used to get all cover photos to display on the homepage
async function getCoverPhotos() {
	const siteStore = useSiteStore()
	const queryForCoverPhotos = query(collectionGroup(db, `photographs`), where(`useAsCoverImage`, `==`, true))

	try {
		if(Object.entries(siteStore?.realmCoverPhotos).length) {
			coverPhotosData.value = Object.values(siteStore?.realmCoverPhotos)
			return
		}
		const querySnapshot = await getDocs(queryForCoverPhotos)
		querySnapshot.forEach((doc) => {
			const {realmId, imageLink} = doc.data()
			coverPhotosData.value.push({ realmId, imageLink })
		})
		// assign siteStore & realm ref to realm at 0 index returned by query
		siteStore.realmCoverPhotos = { 
			...coverPhotosData.value,
		}
	}
	catch (error) {
		if (error) {
			realmError.value = realmError
		}
	}
}

// used to get all realm photos to display on the insights pages
async function getRealmPhotos(realmSlug) {
	const siteStore = useSiteStore()
	const queryForPhotos = query(collection(db, `realms`, realmSlug, `photographs`), orderBy(`order`))

	if(Object.keys(siteStore?.realmPhotosData).includes(realmSlug)) {
		realmPhotosData.value = siteStore.realmPhotosData[realmSlug]
		return
	}

	try {
		const querySnapshot = await getDocs(queryForPhotos)
		realmPhotosData.value = []
		querySnapshot.forEach((doc) => {
			const allData = doc.data()
			realmPhotosData.value.push({...allData, id: doc.id})
		})
		siteStore.realmPhotosData[realmSlug] = realmPhotosData.value
	}
	catch (error) {
		if (error) {
			console.log(error)
			coverPhotosError.value = error
		}
	}
}

async function getRealmArtifacts(realmSlug) {
	const siteStore = useSiteStore()
	const queryForArtifacts = query(collection(db, `realms`, realmSlug, `artifacts`))

	if(Object.keys(siteStore?.realmArtifacts).includes(realmSlug)) {
		artifactsData.value = siteStore.realmArtifacts[realmSlug]
		return
	}
		
	try {
		const querySnapshot = getDocs(queryForArtifacts)
		artifactsData.value = []
		querySnapshot.forEach((doc) => {
			const allData = doc.data()
			artifactsData.value.push({...allData, id: doc.id})
		})
		siteStore.realmArtifacts[realmSlug] = realmPhotosData.value
	}
	catch (error) {
		if(error) { 
			console.log(error)
			artifactsError.value = error
		}
	}
	
}

// EXPORTS
export async function useRealmData(docName, options = {noMusic: false}) {
	await getRealmDocData(docName, options)
	return { realmData, realmError }
}

export async function useCoverPhotos() {
	await getCoverPhotos()
	return { coverPhotosData, coverPhotosError }
}

export async function useRealmPhotos(realmSlug) {
	await getRealmPhotos(realmSlug)
	return { realmPhotosData, realmPhotosError }
}

export async function useRealmArtifacts(realmSlug) {
	await getRealmArtifacts(realmSlug)
	return { artifactsData, artifactsError }
}
