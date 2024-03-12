import { ref } from 'vue'
import { useRandomNumber } from '~/composables/useRandomNumber'
import { useCoverPhotos, useRealmData } from '~/composables/firebase/useRealmData'

export function useGenerateIdentificationQuestion(){
	const questions = ref(null)
	const correct = ref(null)
	let questionsArray = [{},{},{},{}]
	const dataContainer = ref([])

	useCoverPhotos().then(({coverPhotosData}) => {
		dataContainer.value = coverPhotosData.value
		questionsArray.forEach((_item, index) => {
			//splicing the array gaurentees that each selection is unique
			questionsArray[index] = dataContainer.value.splice(useRandomNumber(dataContainer.value.length),1)[0] 
		})
		questions.value = questionsArray
		correct.value = questionsArray[useRandomNumber(questionsArray.length)]
	})
	return { questions, correct }
}

export function useGenerateSymbolQuestion(){
	const questions = ref(null)
	const correct = ref(null)
	let questionsArray = [{},{},{},{}]
	const dataContainer = ref([])

	useRealmData().then(({realmData}) => {
		console.log(realmData)
		dataContainer.value = realmData
		questionsArray.forEach((_item, index) => {
			const selected = dataContainer.value.splice(useRandomNumber(dataContainer.value.length),1)[0]
			questionsArray[index] = 
				{
					...selected,
					icons: selected.iconNames.split(`,`)
				}
		})
		questions.value = questionsArray
		correct.value = questionsArray[useRandomNumber(questionsArray.length)]
	})
	return { questions, correct }
}