<template>
	<v-container>
		<v-row no-gutters
			dense>
			<v-col cols="12"
				xl="8"
				class="offset-xl-2">
				<v-row>
					<v-col 
						v-for="(item, index) in threeImagesFromSeparateRealms()"
						:key="item.documentPath"
						cols="6"
						sm="4"
						md="4"
						lg="3"
						:class="index === 0 || index % 2 === 0 ? `offset-sm-2 offset-lg-0` : ``">
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
					<v-col cols="12"
						class="text-center text-primary text-h3 mb-5">
						<p>{{ which.realmCipher }}</p>
					</v-col>
				</v-row>
			</v-col>
		
		</v-row>
	</v-container>
</template>

<script setup>
import { pages } from '../../pages/realms.data'
import { ref } from 'vue'
import { useRandomNumber } from '~/composables/useRandomNumber'
import { useClassifyRealm } from '~/composables/useClassifyRealm'

const emit = defineEmits([`solved`, `failed`])

const which = ref(null)

const checkAnswer = (guess) => {
	if(guess === which.value.realmCipher) emit(`solved`)
	else emit(`failed`)
}

const { classifiedRealms } = useClassifyRealm(pages)

const threeImagesFromSeparateRealms = () => {
	let returnedArray = [{},{},{},{}]
	let destructableRealmsArray = [...classifiedRealms.value]
	destructableRealmsArray.splice(destructableRealmsArray.indexOf(item => item.abbTitle === `Redacted`))[0]
	returnedArray.forEach((_item, index) => {
		const removedRealm = destructableRealmsArray.splice(useRandomNumber(destructableRealmsArray.length),1)[0]
		const lengthOfDocuments = removedRealm.documents.length
		returnedArray[index] = {
			documentPath: removedRealm.documents[useRandomNumber(lengthOfDocuments)].filePath,
			realmName: removedRealm.title,
			folderPath: removedRealm.slug,
			realmCipher: removedRealm.realmCipher
		}
	})
	which.value = returnedArray[useRandomNumber(returnedArray.length)]
	return returnedArray
}

</script>

<style scoped>
.realmImage {
	cursor: pointer;
}
.realmImage::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: inset 9px 9px 5px #101010, inset -9px -9px 5px #101010, inset 4px 4px 0px #101010, inset -4px -4px 0px #101010;
}
.grow {
	padding: 20px 20px;
	transition: all .5s;
}

.grow:hover {
	cursor: pointer;
	padding: 10px 10px;
	transition: all .5s;
}
</style>