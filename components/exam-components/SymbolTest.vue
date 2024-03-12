<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				md="8"
				lg="6"
				xl="4"
				class="offset-md-2 offset-lg-3 offset-xl-4 d-flex align-center justify-center">
				<v-img
					class="realmImage"
					contain
					aspect-ratio="1.5"
					max-width="500px"
					lazy-src="/images/mocks/placeholder.jpg"
					:src="correct?.imageLink"
					alt="an image taken from another realm">
				</v-img>
			</v-col>
			<v-col cols="10"
				class="offset-1 d-flex justify-center">
				<div v-for="(question, index) in questions"
					:key="question.id">
					<div
						@click="checkAnswer(question.slug)"
						:class="index <= 2 ? 'mr-8' : ''"
						class="customButton text-primary text-h3">
						<v-icon :icon="`mdi-${icon}`"
							size="20px"
							v-for="(icon, innerIndex) in question.icons"
							:key="icon + innerIndex"
							color="primary" />
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { useGenerateSymbolQuestion } from '~/composables/useExam'
const { questions, correct } = useGenerateSymbolQuestion()

const emit = defineEmits([`solved`, `failed`])

const checkAnswer = (guess) => {
	if (guess === correct.slug) emit(`solved`)
	else emit(`failed`)
}

</script>