function reverseStringWithNumber(str) {
    const letters = str.match(/[A-Z]/g).reverse().join('');
    const number = str.match(/\d/)[0];

    return letters + number;
}

const originalString = "NEGIE1";
const reversedString = reverseStringWithNumber(originalString);

console.log("Original String: ", originalString);
console.log("Reversed String: ", reversedString);