// nuxt.config.ts
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
	ssr: false,
	css: [
		`~/assets/css/transitions.css`,
		`~/assets/css/globalReset.css`, 
		`~/assets/css/scrollBar.css`,
		`~/assets/css/global.css`,
		`vuetify/styles`,
		`vuetify/lib/styles/main.sass`, 
		`~/assets/css/main.css`,
		`@mdi/font/css/materialdesignicons.css`
	],
	vite: {
		// @ts-ignore
		// curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
		ssr: {
			noExternal: [`vuetify`], // add the vuetify vite plugin
		},
	},
	modules: [
		// @ts-ignore
		// this adds the vuetify vite plugin
		// also produces type errors in the current beta release
		async (_, nuxt) => {
			nuxt.hooks.hook(`vite:extendConfig`, config => config.plugins.push(
				vuetify()
			))
		},
		`@pinia/nuxt`,
		`nuxt-vuefire`
	],
	vuefire: {
		auth: true,
		config: {
			apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
			authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
			projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
			storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
			messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
			appId: import.meta.env.VITE_FIREBASE_APP_ID,
			measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
		},
		appCheck: {
			// Allows you to use a debug token in development
			debug: process.env.NODE_ENV !== `production`,
			isTokenAutoRefreshEnabled: true,
			provider: `ReCaptchaV3`,
			// Find the instructions in the Firebase documentation, link above
			key: `6LejtlUlAAAAAEvIfVKCit8UQxmBMvnIBPoWEYoa`,
		},
	},
	components:  [
		{ path: `~/components/exam-components`, global: true, pathPrefix: false },
		`~/components`,
	],
	// page level transitions
	app: {
		layoutTransition: { name: `layout`, mode: `out-in` },
		pageTransition: { name: `page`, mode: `out-in` },
	},
})