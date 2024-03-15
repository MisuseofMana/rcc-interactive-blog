export function useRandomNumber(max){
	return Math.floor(Math.random() * (max))
}

export function useRandomNumberArray(max, howMany){
	// early exit to prevent infinite loop
	if (max <= 0) return
	let randomNumbersArray = []
	for(let i = 1; i <= howMany; i++){
		let randNum = null
		randNum = useRandomNumber(max)
		if(randomNumbersArray.includes(randNum)) {
			i--
			randNum = Math.floor(Math.random() * (max))
		}
		else {
			randomNumbersArray.push(randNum)
		}
	}
}