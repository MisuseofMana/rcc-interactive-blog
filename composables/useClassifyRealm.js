import { ref } from 'vue'

const realmDesignationsArray = [
	`unclassified`,
	`unclassified`,
	`unclassified`,
	`developmental`,
	`developmental`,
	`stable`,
	`stable`,
	`stable`,
	`emergent`,
	`emergent`,
	`emergent`,
	`established`,
	`established`,
	`established`,
	`established`,
]

const alphabet = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]

export function useClassifyRealm(realms){
	const classifiedRealms = ref(null)

	classifiedRealms.value = realms.map((realm) => {
		const numberOfDocuments = realm.documents.length
		const designation = realmDesignationsArray[numberOfDocuments] ? realmDesignationsArray[numberOfDocuments] : `documented`

		// determine realm cipher
		const word = realm.title.split(` `)[0]
		const letters = word.split(``)
		const wordLength = letters.length
		const transposition = letters.map((letter) => {
			const place = alphabet.indexOf(letter.toLowerCase())
			const newLetterPlace = place + 3
			const modulatedLetterPlace = newLetterPlace > 25 ? newLetterPlace % 25 : newLetterPlace
			return alphabet[modulatedLetterPlace]
		})
		const realmCipher = `${transposition.join(``)}-${wordLength}`


		// determine date info - how many days since realm update
		const today = new Date().getTime()
		const oldDate = new Date(realm.publishDate).getTime()
		const daysPassed = Math.ceil((oldDate - today) / (1000 * 3600 * 24)) * -1
		
		// determine lastUpdated - increments to 365d then swaps to 1.00y
		let lastUpdated = ``
		lastUpdated = daysPassed + `d`
		if(daysPassed >= 365) {
			lastUpdated = (daysPassed/365).toFixed(2) + `y`
		}

		// determine isOutdated - true after 60 days have passed
		const isRecent = (daysPassed < 60)

		return {
			...realm,
			daysPassed,
			designation,
			isRecent,
			lastUpdated,
			realmCipher
		}
	})

	return { classifiedRealms } 
}