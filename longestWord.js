function longestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
        longestWord = word;
        }
    }

    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWordInSentence = longestWord(sentence);
console.log(`${longestWordInSentence}: ${longestWordInSentence.length} characters`);
