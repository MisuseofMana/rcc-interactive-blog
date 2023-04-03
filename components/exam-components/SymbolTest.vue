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
		<v-col cols="10"
			class="offset-1 d-flex justify-center"
			v-if="question != null">
			<div @click="checkAnswer(realm.folderPath)"
				v-for="(realm, index) in question"
				:key="realm.documentPath"
				:class="index <= 2 ? 'mr-8' : ''"
				class="customButton text-primary text-h3">
				<v-icon :icon="`mdi-${icon}`"
					size="20px"
					v-for="(icon, index) in realm.realmIcons"
					:key="icon + index"
					color="primary" />
			</div>
		</v-col>
	</v-row>
</template>

<script setup>
import { pages } from '../../pages/realms.data'
import { ref, onMounted } from 'vue'
import { useRandomNumber } from '~/composables/useRandomNumber'
import { useClassifyRealm } from '~/composables/useClassifyRealm'

const emit = defineEmits([`solved`, `failed`])

const which = ref(null)
const question = ref(null)

const checkAnswer = (guess) => {
	if (guess === which.value.folderPath) emit(`solved`)
	else emit(`failed`)
}

const { classifiedRealms } = useClassifyRealm(pages)


onMounted(() => {
	let returnedArray = [{}, {}, {}, {}]
	let destructableRealmsArray = [...classifiedRealms.value]

	// remove redacted realm
	destructableRealmsArray.splice(destructableRealmsArray.indexOf(item => item.abbTitle === `Redacted`))[0]

	returnedArray.forEach((_item, index) => {
		const removedRealm = destructableRealmsArray.splice(useRandomNumber(destructableRealmsArray.length), 1)[0]
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
	question.value = returnedArray
}) 
</script>