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
	measurementId: `G-CLXB8V1MH8`,
})

const db = getFirestore(firebaseApp)

export function useRealmNames() {
	const siteStore = useSiteStore()
	const nameList = ref([])

	const getRealmNames = async () => {
		let container = []
		if (siteStore.realmList.length) {
			siteStore.realmList.forEach((item) => {
				container.push({title: item.title, value: item.id})
			})
			nameList.value = container
		}
		else {
			const getRealmsTakingSubmissions = await getDocs(
				query(collection(db, `realms`))
			)
			//[{ title: `Uncertain`, value: `uncertain`}]
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

export function useManageableRealms(first=15) {
	const siteStore = useSiteStore()
	const realmList = ref([])

	const getRealmList = async () => {
		if (siteStore.realmList.length) {
			realmList.value = siteStore.realmList
		}
		else {
			const getRealmsTakingSubmissions = await getDocs(
				query(collection(db, `realms`), orderBy(`title`), limit(first))
			)
			let container = []
			// populate realm names with results from query
			getRealmsTakingSubmissions.forEach((doc) => {
				const { id } = doc
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
			siteStore.realmList = container
			realmList.value = container
		}
	}
	
	getRealmList()

	return {
		realmList,
	}
}

export function useRealmCredits() {
	const siteStore = useSiteStore()
	const realmCredits = ref([])

	const getRealmCredits = async () => {
		if (siteStore.realmCredits.length) {
			realmCredits.value = siteStore.realmCredits
		}
		else {
			const getAllRealms = await getDocs(
				query(collection(db, `realms`), orderBy(`title`))
			)
			let container = []
			// populate realm names with results from query
			getAllRealms.forEach((doc) => {
				const { id } = doc
				const {sigilImageLink, title, abbTitle, audioAuthorLink, audioAuthorName, audioLicenseLink} = doc.data()
				container.push({
					title, 
					id,
					abbTitle,
					sigilImageLink,
					audioAuthorLink,
					audioAuthorName,
					audioLicenseLink,
				})
			})
			siteStore.realmCredits = container
			realmCredits.value = container
		}
	}
	
	getRealmCredits()

	return {
		realmCredits,
	}
}