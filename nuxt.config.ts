// nuxt.config.ts
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
	nitro: {
		firebase: {
		  gen: 2
		},
		output: {
			dir: 'docs',
			publicDir: 'docs'
		},
	},
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
			// eslint-disable-next-line no-undef
			debug: process.env.NODE_ENV !== `production`,
			key: `6LdIXHUpAAAAAJfD6lUv4mIDGDmtU-bStxX2YLU_`,
			isTokenAutoRefreshEnabled: true,
			provider: `ReCaptchaV3`,
		},
	},
	components:  [
		{ path: `~/components/display-components`, global: true, pathPrefix: false },
		{ path: `~/components/form-components`, global: true, pathPrefix: false },
		{ path: `~/components/exam-components`, global: true, pathPrefix: false },
		{ path: `~/components/semiotic-components`, global: true, pathPrefix: false },
		`~/components`,
	],
	// page level transitions
	app: {
		layoutTransition: { name: `layout`, mode: `out-in` },
		pageTransition: { name: `page`, mode: `out-in` },
	},
})