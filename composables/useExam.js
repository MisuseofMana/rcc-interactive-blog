import { ref } from 'vue'
import { useRandomNumber } from '~/composables/useRandomNumber'
import { useCoverPhotos } from '~/composables/firebase/useRealmData'
import { useManageableRealms } from '~/composables/firebase/useRealmNames'

export function useGenerateIdentificationQuestion(){
	const questions = ref(null)
	const correct = ref(null)
	let questionsArray = [{},{},{},{}]
	const dataContainer = ref([])

	useCoverPhotos().then(({coverPhotosData}) => {
		dataContainer.value = [ ...coverPhotosData.value ]
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
	const photos = ref([])
	let questionsArray = [{},{},{},{}]
	const dataContainer = ref([])

	useCoverPhotos().then(({coverPhotosData}) => {
		photos.value = coverPhotosData.value
		useManageableRealms().then(({realmListData}) => {
			dataContainer.value = [ ...realmListData.value ]
			questionsArray.forEach((_item, index) => {
				const selected = dataContainer.value.splice(useRandomNumber(dataContainer.value.length),1)[0]
				questionsArray[index] = 
					{
						...selected,
						icons: selected?.iconNames.split(`,`),
						coverImage: photos.value.find((photo) => photo.realmId === selected?.id)?.imageLink
					}
			})
			questions.value = questionsArray
			correct.value = questionsArray[useRandomNumber(questionsArray.length)]
		})
	})

	
	return { questions, correct }
}