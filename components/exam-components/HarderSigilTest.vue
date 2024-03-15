<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				class="d-flex justify-center">
				<v-icon :icon="`mdi-${correct?.iconNames.split(',')[useRandomNumber(2)]}`"
					size="75px"
					color="primary" />
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
							min-width="150"
							min-height="150"
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
import { useRandomNumber } from '~/composables/useRandomNumber'
const { questions, correct } = useGenerateSymbolQuestion()

const emit = defineEmits([`solved`, `failed`])

const checkAnswer = (guess) => {
	if (guess === correct.value.slug) emit(`solved`)
	else emit(`failed`)
}

</script>