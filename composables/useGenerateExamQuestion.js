import { ref } from 'vue'
import { useRandomNumber, useRandomNumberArray } from '~/composables/useRandomNumber'
import { useCoverPhotos } from '~/composables/firebase/useRealmData'

export function useGenerateIdentificationQuestion(){
	const questions = ref(null)
	const correct = ref(null)
	let coverPhotos = []
	let returnedArray = [{},{},{},{}]

	useCoverPhotos().then(({coverPhotosData}) => {
		coverPhotos = coverPhotosData.value
		returnedArray.forEach((_item, index) => {
			returnedArray[index] = coverPhotos.splice(useRandomNumber(coverPhotos.length),1)[0] 
		})
		questions.value = returnedArray
		correct.value = returnedArray[useRandomNumber(returnedArray.length)]
	})
	return { questions, correct }
}