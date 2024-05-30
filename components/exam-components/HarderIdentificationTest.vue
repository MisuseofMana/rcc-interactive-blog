<template>
	<v-container>
		<v-row v-if="correct && questions.length">
			<v-col cols="12"
				class="d-flex align-center justify-center">
				<div v-for="(icon, index) in correct?.iconNames.split(',')"
					:key="icon"
					:class="index <= 1 ? 'mr-10' : ''">
					<v-icon :icon="`mdi-${icon}`"
						size="75px"
						color="primary" />
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col 
				v-for="item in questions"
				:key="item.realmId"
				cols="6"
				sm="5"
				md="3"
				lg="3"
			>
				<div class="grow">
					<v-img
						@click="checkAnswer(item.slug)"
						class="realmImage"
						cover
						min-width="250"
						min-height="250"
						lazy-src="/images/mocks/placeholder.jpg"
						:src="item.coverImage"
						alt="an image taken from another realm">
					</v-img>
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