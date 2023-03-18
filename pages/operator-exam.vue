<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<NuxtLayout name="landing">
		<v-container class="my-5">
			<v-row>
				<v-col cols="12">
					<v-progress-linear bg-color="primary"
						color="primary"
						v-model="progressNumber"
						class="mb-10"></v-progress-linear>
				</v-col>
			</v-row>
			<v-row dense
				no-gutters>
				<v-col cols="12"
					class="d-flex align-center justify-center">
					<ExamIdentificationTest v-if="questionIndex === 0"
						@solved="nextQuestion"
						@failed="sendToDebriefing"/>
					<ExamSymbolTest v-if="questionIndex === 1"
						@solved="nextQuestion"
						@failed="sendToDebriefing"/>
					<ExamArtifactTest
						v-if="questionIndex === 2"
						@solved="nextQuestion"
						@failed="sendToDebriefing"/>
					<ExamKeycodeCard v-if="questionIndex === 3" 
						@solved="nextQuestion"
						@failed="sendToDebriefing"/>
					<ExamPlaceholderLogin v-if="questionIndex === 4" 
						@solved="nextQuestion"
						@failed="sendToDebriefing"/>
				</v-col>
			</v-row>
		</v-container>
	</NuxtLayout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const progressNumber = ref(0)
const questionIndex = ref(0)
let tickingClock = null

const sendToDebriefing = () => {
	// eslint-disable-next-line no-undef
	navigateTo(`/debriefing`)
}

const nextQuestion = () => {
	questionIndex.value++
	progressNumber.value = 0
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