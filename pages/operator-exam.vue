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
							@completed="passedExam"
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

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
	`PlaceholderLogin`
]

const currentQuestion = computed(() => {
	return questions[questionIndex.value]
})

const sendToDebriefing = () => {
	// eslint-disable-next-line no-undef
	navigateTo(`/debriefing`)
}

const passedExam = () => {
	// eslint-disable-next-line no-undef
	navigateTo('/uplink')
}

const nextQuestion = () => {
	questionIndex.value++
	progressNumber.value = 0
	usePlaySound(`correct`)
}

onMounted(() => {
	tickingClock = setInterval(() => {
		progressNumber.value += 100 / 30
		if(progressNumber.value >= 100) sendToDebriefing()
	}, 1000)
})

onBeforeUnmount(() => {
	clearInterval(tickingClock)
})
</script>