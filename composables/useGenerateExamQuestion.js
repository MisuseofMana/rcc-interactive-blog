import { ref, onMounted } from 'vue'
import { useRandomNumber } from '~/composables/useRandomNumber'
import { useClassifyRealm } from '~/composables/useClassifyRealm'
import { pages } from '../pages/realms.data'

export function useGenerateExamQuestion(){
	const { classifiedRealms } = useClassifyRealm(pages)
	const question = ref(null)
    const which = ref(null)
	onMounted(() => {
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
		question.value = returnedArray
	})
	return { question, which }
}