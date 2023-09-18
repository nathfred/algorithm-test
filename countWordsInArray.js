function countWordsInArray(inputArray, queryArray) {
    const wordCount = {};

    for (const word of inputArray) {
        if (!wordCount[word]) {
        wordCount[word] = 1;
        } else {
        wordCount[word]++;
        }
    }

    const result = [];

    for (const query of queryArray) {
        result.push(wordCount[query] || 0);
    }

    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const output = countWordsInArray(INPUT, QUERY);
console.log(output);
