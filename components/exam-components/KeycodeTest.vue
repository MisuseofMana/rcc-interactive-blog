<template>
	<v-row class="mt-5">
		<v-col class="d-flex justify-center">
			<v-card
				max-width="400px"
				variant="outlined"
				color="primary-darken-1"
				class="pa-15 text-primary">
				<div class="d-flex align-center justify-center mb-8">
					<v-icon :icon="`mdi-${icon}`"
						size="30px"
						v-for="(icon, index) in targetRealm.iconNames"
						:key="icon+index"
						color="primary"/>
				</div>
				<div class="text-primary text-h3 d-flex justify-space-around align-end mb-6 inputReadout">
					<div v-for="(entry, index) in computedDigits"
						:key="`entry-${index}`"
					>
						{{ entry }}
					</div>
				</div>
				<div class="d-flex justify-space-between mb-2">
					<div @click="addNumToAccessCode('1')"
						class="customButton mr-2 text-primary text-h3">1</div>
					<div @click="addNumToAccessCode('2')"
						class="customButton mr-2 text-primary text-h3">2</div>
					<div @click="addNumToAccessCode('3')"
						class="customButton text-primary text-h3">3</div>
				</div>
				<div class="d-flex justify-space-between mb-2">
					<div @click="addNumToAccessCode('4')"
						class="customButton mr-2 text-primary text-h3">4</div>
					<div @click="addNumToAccessCode('5')"
						class="customButton mr-2 text-primary text-h3">5</div>
					<div @click="addNumToAccessCode('6')"
						class="customButton text-primary text-h3">6</div>
				</div>
				<div class="d-flex justify-space-between mb-2">
					<div @click="addNumToAccessCode('7')"
						class="customButton mr-2 text-primary text-h3">7</div>
					<div @click="addNumToAccessCode('8')"
						class="customButton mr-2 text-primary text-h3">8</div>
					<div @click="addNumToAccessCode('9')"
						class="customButton text-primary text-h3">9</div>
				</div>
				<div class="d-flex justify-space-between">
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
import { pages } from '../../pages/realms.data'
import { usePlaySound } from '~/composables/usePlaySound'

const realmsWithSemiotics = pages.filter(realm => {
	if(realm.semiotics) return realm
})

const disabled = ref(false)

const emit = defineEmits([`completed`, `failed`])
const targetRealm = realmsWithSemiotics[new Date().getDay()]

const addNumToAccessCode = (num) => {
	if(disabled.value) return
	digits.value.push(`${num}`)
	if(targetRealm.realmCode === digits.value.join(``)) emit(`completed`)
	else if(digits.value.length >= reset.length) {
		disabled.value = true
		usePlaySound(`disconnected`, () => {
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