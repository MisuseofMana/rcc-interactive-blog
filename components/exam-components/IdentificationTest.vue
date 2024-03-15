<template>
	<v-container>
		<v-row>
			<v-col cols="12"
				class="text-center text-primary text-body-1">
				<p>Correctly identify {{ useProperCaseFromSlug(correct?.realmId) }}.</p>
			</v-col>
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
						@click="checkAnswer(item.realmId)"
						class="realmImage"
						cover
						min-width="250"
						min-height="250"
						lazy-src="/images/mocks/placeholder.jpg"
						:src="item.imageLink"
						alt="an image taken from another realm">
					</v-img>
				</div>	
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