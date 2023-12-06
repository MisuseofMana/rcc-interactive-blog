const alphabet = [`c`,`r`,`i`,`k`,`b`,`u`,`r`,`o`,`w`,`a`,`d`,`e`,`f`,`g`,`h`,`j`,`l`,`m`,`n`,`p`,`q`,`s`,`t`,`u`,`v`,`x`,`y`,`z`]

export function useRealmCipher(word){
	if(!word) return 
	const letters = word.split(` `)[0].split(``)
	const wordLength = letters.length
	const transposition = letters.splice(0, 5).map((letter) => {
		const place = alphabet.indexOf(letter.toLowerCase())
		const newLetterPlace = place + 3
		const modulatedLetterPlace = newLetterPlace > 25 ? newLetterPlace % 25 : newLetterPlace
		return alphabet[modulatedLetterPlace]
	})
	
	const realmCipher = `${transposition.join(``)}-${wordLength}`
	return { realmCipher } 
}
