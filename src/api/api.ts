export type Matrix = {
    [id: string]: { [id: string]: boolean }
};

const fieldSize = 50;

export function generateNewMatrix() {
    const matrix: Matrix = {};
    for (let j = 0; j < fieldSize; j++) {
        for (let i = 0; i < fieldSize; i++) {
            matrix[j] = matrix[j] ?? {};
            matrix[j][i] = false;
        }
    }

    return matrix;
}