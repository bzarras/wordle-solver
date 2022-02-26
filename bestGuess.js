/**
 * 
 * @param {string} word 
 * @param {string} pattern 0 = not in word, 1 = in word but wrong place, 2 = in word and in correct place
 * @param {string[]} wordlist 
 */
 function bestGuess(guess, pattern, wordlist) {
    [...pattern].forEach((p, i) => {
        if (p === '0') {
            wordlist = wordlist.filter(word => !word.includes(guess[i])); 
        } else if (p === '1') {
            wordlist = wordlist.filter(word => (word.includes(guess[i]) && word[i] !== guess[i]));
        } else if (p === '2') {
            wordlist = wordlist.filter(word => word[i] === guess[i]);
        }
    });
    return wordlist;
}

module.exports = bestGuess;
