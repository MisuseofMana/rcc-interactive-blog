export function useProperCaseFromSlug(slug) {
	let returnString = ``
	const words = slug.split(`-`)
	words.forEach((word) => {
		const letters = word.split(``)
		letters[0] = letters[0].toUpperCase()
		returnString = `${returnString} ${letters.join(``)}`
	})
	return returnString
}