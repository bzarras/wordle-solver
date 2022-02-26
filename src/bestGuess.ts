/**
 * bestGuess is a function that takes a guess word and a feedback pattern from
 * the wordle game and suggests the next best word based on the current dictionary.
 * The caller should keep the dictionary state, feed it into this function, and then
 * store the result and feed it back in the next time.
 * 
 * @param {string} word word guess
 * @param {string} pattern 0 = not in word, 1 = in word but wrong place, 2 = in word and in correct place
 * @param {string[]} wordlist current dictionary, with best guess in position 0
 */
 export default function bestGuess(guess: string, pattern: string, wordlist: string[]): string[] {
    [...pattern].forEach((code, i) => {
        switch (code) {
            case '0':
                wordlist = wordlist.filter(word => !word.includes(guess[i]));
                break;
            case '1':
                wordlist = wordlist.filter(word => (word.includes(guess[i]) && word[i] !== guess[i]));
                break;
            case '2':
                wordlist = wordlist.filter(word => word[i] === guess[i]);
                break;
        }
    });
    return wordlist;
}
