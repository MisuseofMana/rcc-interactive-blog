import { ref } from 'vue'
import { useSiteStore } from '~/store/useSiteStore.js'
import { initializeApp } from 'firebase/app'
import { query, getDocs, collection, getFirestore, orderBy, where, limit } from "firebase/firestore"

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

const realmListData = ref([])
const realmListError = ref(``)

const semioticRealms = ref([])
const semioticError = ref(``)

async function getManageableRealmsData(first=15) {
	const siteStore = useSiteStore()

	try {
		if (siteStore.realmList.length) {
			realmListData.value = siteStore.realmList
			return
		}

		const res = await getDocs(
			query(collection(db, `realms`), orderBy(`title`), limit(first))
		)
		res.forEach((doc) => {
			const { id } = doc
			const {sigilImageLink, hasSemiotics, clearanceNeeded, abbTitle, subtitle, title, iconNames, slug, lastUpdated } = doc.data()
			realmListData.value.push({
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
		siteStore.realmList = realmListData.value
	}
	catch (error) {
		if (error) {
			realmListError.value = error
		}
	}
}

async function getRealmsWithSemiotics(first=7) {
	const siteStore = useSiteStore()

	try {
		if (siteStore.semioticRealms.length) {
			semioticRealms.value = siteStore.semioticRealms
			return
		}

		const res = await getDocs(
			query(collection(db, `realms`), where(`hasSemiotics`, `==`, true), limit(first))
		)
		res.forEach((doc) => {
			const { id } = doc
			const { realmCode, iconNames } = doc.data()
			semioticRealms.value.push({
				id,
				realmCode,
				iconNames,
			})
		})
		siteStore.semioticRealms = semioticRealms.value
	}
	catch (error) {
		if (error) {
			realmListError.value = error
		}
	}
}

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

export async function useManageableRealms() {
	await getManageableRealmsData()
	return { realmListData, realmListError }
}

export async function useRealmsWithSemiotics() {
	await getRealmsWithSemiotics()
	return { semioticRealms, semioticError }
}