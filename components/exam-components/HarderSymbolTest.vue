<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				class="text-center text-primary text-body-1">
				<p>{{ correct?.subtitle }}</p>
			</v-col>
			<v-col cols="10"
				class="offset-1 d-flex justify-center">
				<div v-for="(question, index) in questions"
					:key="question.id">
					<div
						@click="checkAnswer(question.slug)"
						:class="index <= 2 ? 'mr-12' : ''"
						class="customButton text-primary text-h3">
						<v-icon :icon="`mdi-${question.icons[0]}`"
							size="75px"
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
	if (guess === correct.value.slug) emit(`solved`)
	else emit(`failed`)
}

</script>