<template>
	<v-container>
		<v-row no-gutters
			dense>
			<v-col cols="12"
				lg="6"
				xl="4"
				class="offset-lg-3 offset-xl-4">
				<v-row no-gutters dense v-if="question !== null">
					<v-col cols="12"
						class="text-center text-primary text-h3">
						<p>{{ which.realmCipher }}</p>
					</v-col>
					<v-col 
						v-for="(item, index) in question"
						:key="item.documentPath"
						cols="6"
						sm="5"
						md="4"
						lg="6"
						:class="index === 0 || index % 2 === 0 ? `offset-sm-1 offset-md-2 offset-lg-0` : ``">
						<div class="grow">
							<v-img
								@click="checkAnswer(item.realmCipher)"
								class="realmImage"
								cover
								lazy-src="/images/mocks/placeholder.jpg"
								:src="`/images/${item.folderPath}/${item.documentPath}.jpg`"
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
import { useGenerateExamQuestion } from '~/composables/useGenerateExamQuestion'

const emit = defineEmits([`solved`, `failed`])

const { which, question } = useGenerateExamQuestion()

const checkAnswer = (guess) => {
	if(guess === which.value.realmCipher) emit(`solved`)
	else emit(`failed`)
}


</script>