/* eslint-disable quotes */
import { defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import { 
	alpha as vvAlpha,
	confirmed as vvConfirmed,
	email as vvEmail,
	max as vvMax,
	min as vvMin,
	required as vvRequired,
} from '@vee-validate/rules'

// Vee Validate Rules
const alpha = defineRule(`alpha`, vvAlpha)
const confirmed = defineRule(`confirmed`, vvConfirmed)
const email = defineRule(`email`, vvEmail)
const max = defineRule(`max`, vvMax)
const min = defineRule(`min`, vvMin)
const required = defineRule(`required`, vvRequired)

// Custom Rules
const properNounCase = defineRule(`properNounCase`, (value) => {
	const splitOnSpace = value.split(` `)
	let isCapital = true
	splitOnSpace.forEach(word => {
		if (!/^[A-Z]/.test(word[0])) isCapital = false
	})
	if(isCapital) return true
	return `Each word must begin with a capitalized A through Z.`
})

const alphaAndSpace = defineRule(`alphaAndSpace`, (value) => {
	if (/^[A-Za-z\s]+$/.test(value)) return true
	return `Restricted to spaces and the letters a through z.`
})

const alphaSpaceAndDot = defineRule(`alphaSpaceAndDot`, (value) => {
	if (/^[A-Za-z.\s]+$/.test(value)) return true
	if(value === ``) return true
	return `Restricted to spaces, periods, and the letters a through z.`
})

const narrativeString = defineRule(`narrativeString`, (value) => {
	if (/^[A-Za-z0-9.\s?!:;#'"]+$/.test(value)) return true
	return `Restricted to spaces, letters, numbers and the symbols (.?!:;#'").`
})

const slug = defineRule(`slug`, (value) => {
	if (/^[a-z-]+[^-]$/.test(value)) return true
	return `Restricted to dashes and the letters 'a' through 'z'. Must start and end with a letter 'a' through 'z'.`
})

const requiredAbbreviation = defineRule(`requiredAbbreviation`, (value, [target, stringLength], ctx) => {
	if (ctx.form[target].length < stringLength || value) {
		return true
	}
	return `This field is required.`
})

const requiredIf = defineRule(`requiredIf`, (value, [target], ctx) => {
	if (ctx.form[target] || value) {
		return true
	}
	return `This field is required.`
})

configure({
	validateOnBlur: false, // controls if `blur` events should trigger validation with `handleChange` handler
	validateOnChange: false, // controls if `change` events should trigger validation with `handleChange` handler
	validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
	validateOnModelUpdate: false, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
	generateMessage: localize('en', {
		messages: {
			alpha: `Restricted to the letters "a" to "z".`,
			max: `Restricted to at most 0:{max} characters.`,
			min: `Restricted to at least 0:{min} characters.`,
			required: `This field is required.`,
			confirmed: `1:{field_name} must match what is entered in the 2:{match_field_name} field.`,
		}
	})
})

export default {
	alpha,
	confirmed,
	email,
	max,
	min,
	required,
	properNounCase,
	alphaAndSpace,
	alphaSpaceAndDot,
	requiredAbbreviation,
	slug,
	narrativeString,
	requiredIf
}