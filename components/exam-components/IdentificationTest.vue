<template>
	<v-container>
		<v-row no-gutters
			dense>
			<v-col cols="12"
				lg="12"
				xl="4"
				class="offset-xl-4">
				<v-row no-gutters
					dense
					v-if="questions !== null">
					<v-col cols="12"
						class="text-center text-primary text-h3">
						<p>{{ useProperCaseFromSlug(correct.realmId) }}</p>
					</v-col>
					<v-col 
						v-for="(item, index) in questions"
						:key="item.realmId"
						cols="6"
						sm="5"
						md="4"
						lg="3"
						:class="index === 0 || index % 2 === 0 ? `offset-sm-1 offset-md-2 offset-lg-0` : ``">
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
			</v-col>
		
		</v-row>
	</v-container>
</template>

<script setup>
import { useGenerateIdentificationQuestion } from '~/composables/useGenerateExamQuestion'
import { useProperCaseFromSlug } from '~/composables/useCaseModification'
const { questions, correct } = useGenerateIdentificationQuestion()

const emit = defineEmits([`solved`, `failed`])

const checkAnswer = (guess) => {
	if(guess === correct.value.realmId) emit(`solved`)
	else emit(`failed`)
}

</script>