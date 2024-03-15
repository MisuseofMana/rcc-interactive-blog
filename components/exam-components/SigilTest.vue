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
					:src="correct?.coverImage"
					alt="an image taken from another realm">
				</v-img>
			</v-col>
			<v-col cols="10"
				class="offset-1 d-flex justify-center">
				<div v-for="(question, index) in questions"
					:key="question.id">
					<div
						@click="checkAnswer(question.slug)"
						:class="index <= 2 ? 'mr-12' : ''"
						class="customButton text-primary text-body-1">
						<v-img class="abberation"
							aspect-ratio="1"
							max-height="100"
							min-width="100"
							min-height="100"
							max-width="100"
							:src="question?.sigilImageLink"
							alt="an icon representing the currently viewed realm">
						</v-img>
					</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { useGenerateSymbolQuestion } from '~/composables/useExam'
import { useProperCaseFromSlug } from '~/composables/useCaseModification'
const { questions, correct } = useGenerateSymbolQuestion()

const emit = defineEmits([`solved`, `failed`])

const checkAnswer = (guess) => {
	console.log(guess)
	console.log(correct.value)
	if (guess === correct.value.slug) emit(`solved`)
	else emit(`failed`)
}

</script>