import { calculateNextState } from './logic';
import {generateNewMatrix} from '../api/api'
describe('logic tests', () => {
    it('every live cell with 2 neightbors shouls stay', ()=>{
        const matrix = generateNewMatrix();
        matrix[1][1] = true;
        matrix[2][1] = true;
        matrix[2][2] = true;

        const nextStepMatrix = calculateNextState(matrix);
        expect(nextStepMatrix[1][1]).toBeTruthy();
    });

    it('every live cell with 3 neightbors shouls stay', ()=>{
        const matrix = generateNewMatrix();
        matrix[1][1] = true;
        matrix[2][1] = true;
        matrix[2][2] = true;
        matrix[1][2] = true;

        const nextStepMatrix = calculateNextState(matrix);
        expect(nextStepMatrix[1][1]).toBeTruthy();
    });

    it('every live cell with more than 3 neighbors should die', ()=>{
        const matrix = generateNewMatrix();
        matrix[1][1] = true;
        matrix[2][1] = true;
        matrix[2][2] = true;
        matrix[1][2] = true;
        matrix[0][2] = true;

        const nextStepMatrix = calculateNextState(matrix);
        expect(nextStepMatrix[1][1]).toBeFalsy();
    });

    it('every live cell with less than 2 neighbors should die', ()=>{
        const matrix = generateNewMatrix();
        matrix[13][18] = true;
        
        const nextStepMatrix = calculateNextState(matrix);
        expect(nextStepMatrix[13][18]).toBeFalsy();
    });

    it('every dead cell with exactly 3 neighbors should become alive', ()=>{
        const matrix = generateNewMatrix();
        matrix[0][0] = true;
        matrix[0][1] = true;
        matrix[1][1] = true;

        const nextStepMatrix = calculateNextState(matrix);
        expect(nextStepMatrix[1][0]).toBeTruthy();
    });

    // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    // Any live cell with two or three live neighbours lives on to the next generation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
});