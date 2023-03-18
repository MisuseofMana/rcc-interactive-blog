<template>
	<v-row no-gutters dense>
		<v-col cols="12"
			class="text-center text-primary text-h3">
			<p>Which image depicts the realm designated {{ which.realmCipher }}</p>
		</v-col>
		<v-col 
			cols="3"
			v-for="item in threeImagesFromSeparateRealms()"
			:key="item.documentPath">
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
    box-shadow: inset 30px 30px 10px #101010, inset -30px -30px 10px #101010, inset 4px 4px 0px #101010, inset -4px -4px 0px #101010;
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