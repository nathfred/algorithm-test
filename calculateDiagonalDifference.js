function calculateDiagonalDifference(matrix) {
    const n = matrix.length;
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;

    for (let i = 0; i < n; i++) {
        diagonal1Sum += matrix[i][i];
        diagonal2Sum += matrix[i][n - 1 - i];
    }

    return Math.abs(diagonal1Sum - diagonal2Sum);
}

const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const result = calculateDiagonalDifference(matrix);
console.log("Hasil pengurangan dari jumlah diagonal: ", result);
