export function useProperCaseFromSlug(slug) {
	if(!slug) return ``
	let returnString = ``
	const words = slug?.split(`-`) || slug
	words.forEach((word) => {
		const letters = word.split(``)
		letters[0] = letters[0].toUpperCase()
		returnString = `${returnString} ${letters.join(``)}`
	})
	return returnString
}