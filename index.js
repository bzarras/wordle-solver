const readline = require('readline');
const { matchList, letterPoints } = require('./dictionary');
const bestGuess = require('./bestGuess');

let wordList = matchList.sort((a, b) => {
    const aLetters = [...new Set(a.split(''))];
    const bLetters = [...new Set(b.split(''))];
    const aPoints = aLetters.reduce((sum, letter) => sum + letterPoints[letter], 0);
    const bPoints = bLetters.reduce((sum, letter) => sum + letterPoints[letter], 0);
    return bPoints - aPoints;
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '[<word> <score>] => '
});

rl.on('line', (line) => {
    const [word, score] = line.split(' ');
    wordList = bestGuess(word, score, wordList);
    console.log(`Try: ${wordList[0]}`);
    if (wordList.length === 1) {
        console.log(`Psst, we're pretty sure that's the word :)`);
        rl.close();
    } else {
        rl.prompt();
    }
});

rl.on('close', () => {
    console.log('Thanks for playing!');
});

console.log(`Try any of these to start ${wordList.slice(0,10)}`);
rl.prompt();
