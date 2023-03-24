<template>
	<v-row>
		<v-col cols="12"
			md="8"
			lg="6"
			xl="4"
			class="offset-md-2 offset-lg-3 offset-xl-4 d-flex align-center justify-center">
			<v-img v-if="which"
				class="realmImage"
				contain
				aspect-ratio="1.5"
				max-width="500px"
				lazy-src="/images/mocks/placeholder.jpg"
				:src="`/images/${which.folderPath}/${which.documentPath}.jpg`"
				alt="an image taken from another realm">
			</v-img>
		</v-col>
		<v-col 
			cols="12"
			class="d-flex justify-center">
			<v-btn
				v-for="(realm, index) in randomSelectRealms()"
				:key="realm.documentPath"
				class="text-decoration-none"
				:class="index<=2 ? 'mr-2' : ''"
				min-height="50px"
				:height="smAndDown ? '75px' : '50px'"
				color="primary-darken-1"
				@click="checkAnswer(realm.folderPath)">
				<v-icon :icon="`mdi-${icon}`"
					size="25px"
					v-for="(icon, index) in realm.realmIcons"
					:key="icon+index"
					color="primary"/>
			</v-btn>
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
	if(guess === which.value.folderPath) emit(`solved`)
	else emit(`failed`)
}

const { classifiedRealms } = useClassifyRealm(pages)

const randomSelectRealms = () => {
	let returnedArray = [{},{},{},{}]
	let destructableRealmsArray = [...classifiedRealms.value]
	
	// remove redacted realm
	destructableRealmsArray.splice(destructableRealmsArray.indexOf(item => item.abbTitle === `Redacted`))[0]
	
	returnedArray.forEach((_item, index) => {
		const removedRealm = destructableRealmsArray.splice(useRandomNumber(destructableRealmsArray.length),1)[0]
		const lengthOfDocuments = removedRealm.documents.length
		returnedArray[index] = {
			documentPath: removedRealm.documents[useRandomNumber(lengthOfDocuments)].filePath,
			realmName: removedRealm.title,
			folderPath: removedRealm.slug,
			realmCipher: removedRealm.realmCipher,
			realmIcons: removedRealm.iconNames
		}
	})
	which.value = returnedArray[useRandomNumber(returnedArray.length)]
	return returnedArray
}
</script>

<style scoped>
.realmImage::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: inset 30px 30px 10px #000, inset -30px -30px 10px #000, inset 4px 4px 0px #000, inset -4px -4px 0px #000;
}
</style>