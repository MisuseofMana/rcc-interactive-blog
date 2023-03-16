<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="landing">
		<v-container class="my-5"
			tabindex="0"
			v-on:keydown.esc="keypadOpen = !keypadOpen">
			<v-row>
				<v-col cols="12"
					class="d-flex align-center justify-center">
					<div >
						<v-card
							variant="outlined"
							color="deep-orange-darken-4"
							class="pa-10 mb-5 text-primary customBackground">
							<v-overlay contained
								v-model="keypadOpen"
								class="d-flex align-center justify-center">
								<div class="text-primary mb-3 d-flex align-center inputReadout">
									<div class="ml-2 text-body-1">>:
										<span v-for="(entry, index) in computedDigits" :key="`entry-${index}`">
											{{ entry }}
										</span>
									</div>
								</div>
								<div class="d-flex mb-2">
									<div @click="addToAccessCode('1')"
										class="accessButton mr-2 text-primary text-h3">1</div>
									<div @click="addToAccessCode('2')"
										class="accessButton mr-2 text-primary text-h3">2</div>
									<div @click="addToAccessCode('3')"
										class="accessButton text-primary text-h3">3</div>
								</div>
								<div class="d-flex mb-2">
									<div @click="addToAccessCode('4')"
										class="accessButton mr-2 text-primary text-h3">4</div>
									<div @click="addToAccessCode('5')"
										class="accessButton mr-2 text-primary text-h3">5</div>
									<div @click="addToAccessCode('6')"
										class="accessButton text-primary text-h3">6</div>
								</div>
								<div class="d-flex mb-2">
									<div @click="addToAccessCode('7')"
										class="accessButton mr-2 text-primary text-h3">7</div>
									<div @click="addToAccessCode('8')"
										class="accessButton mr-2 text-primary text-h3">8</div>
									<div @click="addToAccessCode('9')"
										class="accessButton text-primary text-h3">9</div>
								</div>
								<div class="d-flex">
									<div @click="addToAccessCode('*')"
										class="accessButton mr-2 text-primary text-h3">*</div>
									<div @click="addToAccessCode('0')"
										class="accessButton mr-2 text-primary text-h3">0</div>
									<div @click="addToAccessCode('#')"
										class="accessButton text-primary text-h3">#</div>
								</div>
							</v-overlay>
							<div 
								class="d-flex flex-column align-center justify-center">
								<h1 class="text-deep-orange-darken-4 text-center text-h1">
									ACCESS DENIED 
								</h1>
				
								<h2 class="text-deep-orange-darken-4 text-center text-h2 mb-8">
									ARE YOU LOST, OPERATOR?
								</h2>
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-2">Clearance may be insufficient.</p>
								<p class="text-deep-orange-darken-4 text-center text-body-1 mb-15">Please review /BRIEFING.</p>
								<div class="d-flex align-center justify-center mb-5">
									<v-img class="errorAbberation"
										height="200"
										width="200"
										contain
										:aspect-ratio="1"
										src="/images/error.png"
										alt="geometric shape"></v-img>
								</div>
							</div>
						</v-card>
						<BackButton class="mr-2"
							variant="outlined"
							text="Back To /Briefing"
							:realm-icons="['map-search-outline']"
							link-name="/briefing" />
					</div>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

const keypadOpen = ref(true)

// TO DO
const digits = ref([`1 `])
const reset = [`_ `, `_ `, `_ `, `_ `]

const computedDigits = computed(() => {
	const returnArray = []
	reset.forEach((slot, index) => {
		if(slot === `_ `){
			returnArray[index] = digits.value[index] || `_ `
		}
		else if(slot != `_ `) {
			returnArray[index] = digits.value[index] 
		}
	})	
	return returnArray
})

</script>

<style lang="scss" scoped>
:focus{
   outline:0;
}

.accessButton {
	background: rgb(var(--v-theme-primary-darken-1));
	border-radius: 5px;
	width: 85px;
	height: 85px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.inputReadout {
	background: rgb(var(--v-theme-primary-darken-1));
	border-radius: 5px;
	height: 45px;
	width: 100%;
}

>>> .v-overlay__scrim {
	opacity: 75% !important;
}
</style>