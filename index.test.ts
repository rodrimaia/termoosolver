import { Check, checkAll, doesNotHaveLetter, guessOne, hasLenght5, hasLetterButNotAt, hasLetterCheck, hasLetterAt, getWords } from './index'
const wordsPT = require('words-pt')

it('test position letterCheck', () => {
	expect(hasLetterAt(0, 'a')('abacate')).toBe(true)
	expect(hasLetterAt(0, 'b')('abacate')).toBe(false)
})

it('test hasLetter ', () => {
	expect(hasLetterCheck('c')('abacate')).toBe(true)
	expect(hasLetterCheck('z')('abacate')).toBe(false)
})

it('hasLetter but not at ', () => {
	expect(hasLetterButNotAt(0, 'c')('abacate')).toBe(true)
})


it('test multiple ', () => {
	const words = ['abacate', 'heymama']
	const checks = [hasLetterCheck('c'), hasLetterAt(0, 'a')]

	const result = checkAll(checks, words)

	expect(result).toEqual(['abacate'])
})

it('21-jan', (done) => {
	wordsPT.init({ removeNames: true }, (err: any) => {
		if (err) {
			done(err)
		}

		const allWords = wordsPT.getArray()

		const checks: Check[] = [
			hasLenght5,
			doesNotHaveLetter('p'),
			doesNotHaveLetter('e'),
			doesNotHaveLetter('d'),
			doesNotHaveLetter('r'),
			doesNotHaveLetter('a'),
			doesNotHaveLetter('b'),
			doesNotHaveLetter('i'),
			doesNotHaveLetter('c'),
			doesNotHaveLetter('h'),
			hasLetterAt(4, 'o'),
			doesNotHaveLetter('f'),
			doesNotHaveLetter('l'),
			hasLetterButNotAt(2, 'u'),
			doesNotHaveLetter('x'),
			hasLetterAt(1, 'u'),
			doesNotHaveLetter('j'),
			doesNotHaveLetter('n'),
			doesNotHaveLetter('t'),
		]

		const result = guessOne(checks, allWords)
		expect(result.guess).toHaveLength(5)
		expect(result.remainingWords).toBeGreaterThan(0)
		done()
	})
})

it('27-jan', (done) => {
	getWords((words: string[]) => {

		const checks: Check[] = [
			hasLenght5,
			hasLetterAt(0, 'p'),
			hasLetterButNotAt(4, 'a'),
			doesNotHaveLetter('d'),
			doesNotHaveLetter('r'),
			doesNotHaveLetter('e'),
			hasLetterAt(1, 'a'),
			hasLetterAt(2, 'g'),
			hasLetterButNotAt(3, 'a'),
			doesNotHaveLetter('m'),
		]

		const result = guessOne(checks, words)
		expect(result.guess).toHaveLength(5)
		expect(result.remainingWords).toBeGreaterThan(0)
		console.log('REMAINING WORDS', result.remainingWords)
		console.log('YOU SHOULD GUESS: ', result.guess)
		done()
	})
})