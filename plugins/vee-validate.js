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

const alpha = defineRule(`alpha`, vvAlpha)
const confirmed = defineRule(`confirmed`, vvConfirmed)
const email = defineRule(`email`, vvEmail)
const max = defineRule(`max`, vvMax)
const min = defineRule(`min`, vvMin)
const required = defineRule(`required`, vvRequired)


configure({
	validateOnBlur: false, // controls if `blur` events should trigger validation with `handleChange` handler
	validateOnChange: false, // controls if `change` events should trigger validation with `handleChange` handler
	validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
	validateOnModelUpdate: false, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
	generateMessage: localize('en', {
		messages: {
			alpha: `{field} may only contain the letters "a" to "z".`,
			max: `{field} cannot contain more than 0:{max} characters.`,
			min: `{field} must contain at least 0:{min} characters.`,
			required: `1:{field_name} is required.`,
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
}