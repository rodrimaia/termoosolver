const wordsPT = require('words-pt')

export type Check = (word: string) => boolean

export const hasLenght5: Check = (word: string) => word.length === 5
export const hasLetterAt = (position: number, letter: string) => ((word: string) => word[position] === letter)
export const hasLetterCheck = (letter: string) => ((word: string) => word.includes(letter))
export const hasLetterButNotAt = (position: number, letter: string) => ((word: string) => word.includes(letter) && word[position] !== letter)
export const doesNotHaveLetter = (letter: string) => ((word: string) => !word.includes(letter))

export const checkAll = (checks: ((word: string) => boolean)[], words: string[]): string[] => {
	return words.filter(word => checks.every(check => check(word)))
}

export const guessOne = (checks: ((word: string) => boolean)[], words: string[]): { remainingWords: number, guess: string } => {
	const result = checkAll(checks, words)
	return { remainingWords: words.length - result.length, guess: result[0] }
}

const denyListWords = ['pacto', 'pagai']

export const getWords = (func: ((words: string[]) => void)) => {
	wordsPT.init({ removeNames: true }, (err: any) => { 
		func(wordsPT.getArray().filter((w: string) => !denyListWords.includes(w))) 
	})
}



