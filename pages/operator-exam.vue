<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="landing">
		<v-container>
			<v-row v-if="(questionIndex >= 1 && questionIndex < questions.length - 1 )">
				<v-col cols="12">
					<v-progress-linear
						bg-color="primary"
						color="primary"
						rounded
						v-model="progressNumber"
						class="mb-3"/>
				</v-col>
			</v-row>
			<v-row dense
				no-gutters>
				<v-col cols="12">
					<transition name="page"
						mode="out-in">
						<component @solved="nextQuestion"
							@failed="sendToDebriefing"
							:is="currentQuestion"
							:key="currentQuestion"
						>
						</component>
					</transition>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { usePlaySound } from '~/composables/usePlaySound'
import { ref, computed, onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import { useSiteStore } from '~/store/useSiteStore.js'
const siteStore = useSiteStore()

// eslint-disable-next-line no-undef
const progressNumber = ref(0)
const questionIndex = ref(0)
let tickingClock = null

const questions = [
	`ExamStart`,
	`IdentificationTest`,
	`SymbolTest`,
	`ArtifactTest`,
	`KeycodeTest`,
	`ExamPassed`
]

const currentQuestion = computed(() => {
	return questions[questionIndex.value]
})

const sendToDebriefing = () => {
	// eslint-disable-next-line no-undef
	navigateTo(`/debriefing`)
}

const nextQuestion = () => {
	questionIndex.value++
	progressNumber.value = 0
	usePlaySound(`correct`)
}

onBeforeMount(() => {
	if(localStorage.remainingAttempts <= 0) {
		// eslint-disable-next-line no-undef
		navigateTo(`/brainwash`)
	}
})

onMounted(() => {
	if(localStorage.savedDay === undefined){
		localStorage.savedDay = new Date().setHours(0,0,0,0)
		localStorage.remainingAttempts = 5
	}
	localStorage.remainingAttempts = localStorage.remainingAttempts ? localStorage.remainingAttempts : 5
	if( localStorage.savedDay < new Date().setHours(0,0,0,0) ) {
		localStorage.savedDay = new Date().setHours(0,0,0,0)
	}

	if(siteStore.examAutoStart) {
		questionIndex.value++
		siteStore.examAutoStart = false
	}
	tickingClock = setInterval(() => {
		progressNumber.value += 100 / 30
		if(progressNumber.value >= 100 && (questionIndex.value > 0 && questionIndex.value < 4)) sendToDebriefing()
	}, 1000)
})

onBeforeUnmount(() => {
	clearInterval(tickingClock)
})
</script>