<template>
	<v-row>
		<v-col cols="12"
			md="8"
			lg="6"
			xl="4"
			class="offset-md-2 offset-lg-3 offset-xl-4 d-flex align-center justify-center">
			<v-img v-if="which"
				class="realmImage"
				cover
				max-width="500px"
				aspect-ratio="1.5"
				:src="`/images/artifacts/${which.path}.jpg`"
				alt="an image representing an artifact of the realm"/>
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
				min-width="120px"
				:height="smAndDown ? '65px' : '50px'"
				color="primary-darken-1"
				@click="checkAnswer(realm.folderPath)">
				<v-icon :icon="`mdi-${realm.realmIcons[0]}`"
					size="25px"
					color="primary"/>
			</v-btn>
		</v-col>
	</v-row>
</template>

<script setup>
import { pages } from '../../pages/realms.data'
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useRandomNumber } from '~/composables/useRandomNumber'
import { useClassifyRealm } from '~/composables/useClassifyRealm'

const emit = defineEmits([`solved`, `failed`])

const { smAndDown } = useDisplay()

const which = ref(null)
const correct = ref(null)

const checkAnswer = (guess) => {
	if(guess === correct.value) emit(`solved`)
	else emit(`failed`)
}

const { classifiedRealms } = useClassifyRealm(pages)

const randomSelectRealms = () => {
	let returnedArray = [{},{},{},{}]
	let destructableRealmsArray = [...classifiedRealms.value]
	
	// filter no-artifact realms
	let artifactRealms = destructableRealmsArray.filter(realm => realm.artifacts.length)
	
	returnedArray.forEach((_item, index) => {
		const removedRealm = artifactRealms.splice(useRandomNumber(artifactRealms.length),1)[0]
		const lengthOfDocuments = removedRealm.documents.length
		returnedArray[index] = {
			documentPath: removedRealm.documents[useRandomNumber(lengthOfDocuments)].filePath,
			realmName: removedRealm.title,
			folderPath: removedRealm.slug,
			realmCipher: removedRealm.realmCipher,
			realmIcons: removedRealm.iconNames,
			artifacts: removedRealm.artifacts
		}
	})
	
	// Choose one realm
	const swapArray = returnedArray[useRandomNumber(returnedArray.length)]

	// get random index from artifacts
	const randomIndex = useRandomNumber(swapArray.artifacts.length)
	which.value = swapArray.artifacts[randomIndex]
	correct.value = swapArray.folderPath
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