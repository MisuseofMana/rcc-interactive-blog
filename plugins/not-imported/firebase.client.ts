
import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
	const _config = useRuntimeConfig()

	const firebaseConfig = {
		apiKey: `AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY`,
		authDomain: `crickburrowarchives.firebaseapp.com`,
		projectId: `crickburrowarchives`,
		storageBucket: `crickburrowarchives.appspot.com`,
		messagingSenderId: `708349315619`,
		appId: `1:708349315619:web:5a599bfa7961f0bf217f96`,
		measurementId: `G-CLXB8V1MH8`,
	}

	const app = initializeApp(firebaseConfig)

	const _analytics = getAnalytics(app)
	const auth = getAuth(app)
	const firestore = getFirestore(app)

	const appCheck = initializeAppCheck(app, {
		provider: new ReCaptchaEnterpriseProvider(`6LdIXHUpAAAAAJfD6lUv4mIDGDmtU-bStxX2YLU_`),
		isTokenAutoRefreshEnabled: true
	})
    
	nuxtApp.vueApp.provide(`auth`, auth)
	nuxtApp.provide(`auth`, auth)

	nuxtApp.vueApp.provide(`firestore`, firestore)
	nuxtApp.provide(`firestore`, firestore)

	nuxtApp.vueApp.provide(`appCheck`, appCheck)
	nuxtApp.provide(`appCheck`, appCheck)
})