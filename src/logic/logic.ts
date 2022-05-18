import { Matrix } from "../api/api";

export function calculateNextState(matrix: Matrix): Matrix {
    const nextStep = JSON.parse(JSON.stringify(matrix)) as Matrix;
    for (const y of Object.keys(matrix)) {
        for (const x of Object.keys(matrix[y])) {
            const isCellAlive = matrix[y][x];
            const livingNeighboursCount = getLivingNeighboursCount(x, y, matrix);
            if (!isCellAlive && livingNeighboursCount === 3) {
                nextStep[y][x] = true;
            }

            if (isCellAlive) {
                if (livingNeighboursCount < 2 || livingNeighboursCount > 3) {
                    nextStep[y][x] = false;
                }
            }
        }
    }
    return nextStep;
}

const getLivingNeighboursCount = (x: string, y: string, matrix: Matrix) => {
    let neighbours = 0;
    vectors.forEach(v => {
        const rowIndex = +y + v[0];
        if (!matrix[rowIndex]) return;
        const cellIndex = +x + v[1];
        const cellValue = matrix[rowIndex][cellIndex];
        if (cellValue) {
            neighbours += 1;
        }
    });
    return neighbours;
}

const vectors: [number, number][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
]


