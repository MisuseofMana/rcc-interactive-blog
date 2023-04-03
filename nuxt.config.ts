// nuxt.config.ts
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
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
			apiKey: `AIzaSyBveK6gIB_9MdjUlyi70KOyCo-dMO2yKHY`,
			authDomain: `crickburrowarchives.firebaseapp.com`,
			projectId: `crickburrowarchives`,
			storageBucket: `crickburrowarchives.appspot.com`,
			messagingSenderId: `708349315619`,
			appId: `1:708349315619:web:5a599bfa7961f0bf217f96`,
			measurementId: `G-CLXB8V1MH8`
		},
		appCheck: {
			// Allows you to use a debug token in development
			debug: process.env.NODE_ENV !== 'production',
			isTokenAutoRefreshEnabled: true,
			provider: 'ReCaptchaV3',
			// Find the instructions in the Firebase documentation, link above
			key: '...',
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