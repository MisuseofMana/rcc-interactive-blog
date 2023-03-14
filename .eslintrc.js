// ES LINT Comment to prevent module problem while file is open
/*global module*/

module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		`eslint:recommended`,
		`plugin:vue/vue3-essential`
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": `latest`,
		"sourceType": `module`
	},
	"plugins": [
		`vue`
	],
	"rules": {
		"vue/html-indent": [`error`, `tab`, {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": false,
			"ignores": []
		}],
		"vue/max-attributes-per-line": [`error`, {
			"singleline": {
				"max": 1
			},      
			"multiline": {
				"max": 1
			}
		}],
		"indent": [
			`error`,
			`tab`
		],
		"linebreak-style": [
			`error`,
			`unix`
		],
		"quotes": [
			`error`,
			`backtick`
		],
		"semi": [
			`error`,
			`never`
		]
	}
}
