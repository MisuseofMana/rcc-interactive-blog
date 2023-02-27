

import theme from './plugins/theme'

let og_image = `https://raw.githubusercontent.com/MisuseofMana/rcc-interactive-blog/main/ogImage.png`

export default {
	head: {
		title: `Crickburrow Archives`,
		meta: [
			{ charset: `utf-8` },
			{ name: `description`, hid: `description`, content: `You have been experiencing suspicions of adjacent realities and/or mindset shifts after long walks. There are realms beyond your own. Explore them here.` },
			{ property: `og:type`, hid: `og:type`, content: `website` },
			{ property: `og:url`, hid: `og:url`, content: `https://crickburrow.com/` },
			{ property: `og:title`, hid: `og:title`, content: `Crickburrow Archives` },
			{ property: `og:description`, hid: `og:description`, content: `You have been experiencing suspicions of adjacent realities and/or mindset shifts after long walks. There are realms beyond your own. Explore them here.` },
			{ property: `og:image`, hid: `og:image`, content: og_image },
			{ property: `twitter:card`, hid: `summary_large_image`, content: og_image },
			{ property: `twitter:url`, hid: `twitter:url`, content: `https://crickburrow.com/` },
			{ property: `twitter:title`, hid: `twitter:title`, content: `Crickburrow Archives` },
			{ property: `twitter:description`, hid: `twitter:description`, content: `You have been experiencing suspicions of adjacent realities and/or mindset shifts after long walks. There are realms beyond your own. Explore them here.` },
			{ property: `twitter:image`, hid: `twitter:image`, content: og_image }
		],
		link: [
			{
				rel: `stylesheet`,
				href: `https://fonts.googleapis.com/css2?family=VT323&display=swap`
			},
			{ rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` }
		]
	},
	server: {
		port: 8000, // default: 3000     
		host: `localhost` //network: '0.0.0.0' 
	},
	css: [
		`~/assets/css/transitions.css`,
		`~/assets/css/globalReset.css`, 
		`~/assets/css/scrollBar.css`,
		`~/assets/css/global.css`,
	],
	ssr: false,
	generate: {
		dir: `docs`,
		fallback: `404.html`
	},
	router: {
		base: `/`
	},
	target: `static`,
	buildModules: [
		`@nuxtjs/vuetify`,
		`@nuxtjs/moment`,
	],
	build: {
		extend (config) {
			config.module.rules.push({
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				loader: `file-loader`,
				options: {
					name: `[path][name].[ext]`
				}
			})
		}
	},
	vuetify: {
		customVariables: [`~/assets/variables.scss`],
		treeShake: true,
		defaultAssets: {
			font: {
				family: `VT323`,
			},
			icons: `mdi`, 
		},
		theme,
	},
}