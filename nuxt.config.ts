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
		async (options, nuxt) => {
			nuxt.hooks.hook(`vite:extendConfig`, config => config.plugins.push(
				vuetify()
			))
		},
	],
	app: {
		layoutTransition: { name: `layout`, mode: `out-in` },
		pageTransition: { name: `page`, mode: `out-in` }
	},
})