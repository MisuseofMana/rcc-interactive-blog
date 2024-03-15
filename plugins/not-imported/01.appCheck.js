import { defineNuxtPlugin } from '#app'

import { initializeApp } from 'firebase/app'
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check"

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

const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaEnterpriseProvider(`6LdIXHUpAAAAAJfD6lUv4mIDGDmtU-bStxX2YLU_`),
	isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
})

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.provide(`appCheck`, appCheck)
})