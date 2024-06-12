<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				class="text-center text-primary text-body-1">
				<p>Correctly identify {{ useProperCaseFromSlug(correct?.realmId) }}.</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col 
				v-for="item in questions"
				:key="item.realmId"
				cols="12"
				sm="12"
				md="6"
				lg="3"
				xl="4"
			>
				<v-img
					@click="checkAnswer(item.realmId)"
					class="realmImage"
					cover
					apect-ratio="1.5"
					lazy-src="/images/mocks/placeholder.jpg"
					:src="item.imageLink"
					alt="an image taken from another realm">
				</v-img>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { useGenerateIdentificationQuestion } from '~/composables/useExam'
import { useProperCaseFromSlug } from '~/composables/useCaseModification'
const { questions, correct } = useGenerateIdentificationQuestion()

const emit = defineEmits([`solved`, `failed`])

const checkAnswer = (guess) => {
	if(guess === correct.value.realmId) emit(`solved`)
	else emit(`failed`)
}
</script>