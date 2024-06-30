<template>
	<v-row class="mt-5">
		<v-col cols="12"
			md="6"
			lg="5"
			xl="4"
			class="offset-md-3 offset-lg-4 offset-xl-4">
			<v-card
				variant="outlined"
				color="primary-darken-1"
				class="pa-15 text-primary">
				<div v-if="targetRealm?.iconNames" class="d-flex align-center justify-center mb-8">
					<v-icon :icon="`mdi-${icon}`"
						size="75px"
						v-for="(icon, index) in targetRealm?.iconNames.split(',')"
						:key="icon+index"
						color="primary"/>
				</div>
				<div class="text-primary text-h3 d-flex justify-space-around align-end mb-6 pa-5 text-decoration-underline inputReadout">
					<div v-for="(entry, index) in computedDigits"
						:key="`entry-${index}`"
					>
						{{ entry }}
					</div>
				</div>
				<div class="d-flex justify-space-around mb-2">
					<div @click="addNumToAccessCode('1')"
						class="customButton mr-2 text-primary text-h3">1</div>
					<div @click="addNumToAccessCode('2')"
						class="customButton mr-2 text-primary text-h3">2</div>
					<div @click="addNumToAccessCode('3')"
						class="customButton text-primary text-h3">3</div>
				</div>
				<div class="d-flex justify-space-around mb-2">
					<div @click="addNumToAccessCode('4')"
						class="customButton mr-2 text-primary text-h3">4</div>
					<div @click="addNumToAccessCode('5')"
						class="customButton mr-2 text-primary text-h3">5</div>
					<div @click="addNumToAccessCode('6')"
						class="customButton text-primary text-h3">6</div>
				</div>
				<div class="d-flex justify-space-around mb-2">
					<div @click="addNumToAccessCode('7')"
						class="customButton mr-2 text-primary text-h3">7</div>
					<div @click="addNumToAccessCode('8')"
						class="customButton mr-2 text-primary text-h3">8</div>
					<div @click="addNumToAccessCode('9')"
						class="customButton text-primary text-h3">9</div>
				</div>
				<div class="d-flex justify-space-around">
					<div @click="addNumToAccessCode('*')"
						class="customButton mr-2 text-primary text-h3">*</div>
					<div @click="addNumToAccessCode('0')"
						class="customButton mr-2 text-primary text-h3">0</div>
					<div @click="addNumToAccessCode('#')"
						class="customButton text-primary text-h3">#</div>
				</div>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePlaySound } from '~/composables/usePlaySound'
import { useRealmsWithSemiotics } from '~/composables/firebase/useRealmNames'

const targetRealm = ref({
	iconNames: ``,
})

useRealmsWithSemiotics().then(({semioticRealms}) => {
	targetRealm.value = semioticRealms.value[new Date().getDay()]
})

const disabled = ref(false)

const emit = defineEmits([`solved`, `failed`])

const addNumToAccessCode = (num) => {
	if(disabled.value) return
	let numberToSound = num
	if(num === '*') numberToSound = 'star'
	if(num === '#') numberToSound = 'pound'
	usePlaySound({targetSound: numberToSound, vol: 0.1})
	digits.value.push(`${num}`)
	if(targetRealm.value.realmCode === digits.value.join(``)) emit(`solved`)
	else if(digits.value.length >= reset.length) {
		disabled.value = true
		usePlaySound({targetSound: `disconnected`}, () => {
			emit(`failed`)
		})
	}
}

const digits = ref([])
const reset = [`_ `, `_ `, `_ `, `_ `]

const computedDigits = computed(() => {
	const returnArray = []
	reset.forEach((_slot, index) => {
		returnArray[index] = digits.value[index] || `_`
	})
	return returnArray
})
</script>

<style scoped>
.inputReadout {
	background: rgb(var(--v-theme-primary-darken-1));
	border-radius: 5px;
	width: 100%;
}
</style>