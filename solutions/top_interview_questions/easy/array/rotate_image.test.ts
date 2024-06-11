import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

function rotate(matrix: number[][]): void {
    const n = matrix.length;
    const layers = Math.ceil(n / 2);

    for (let layer = 0; layer < layers; layer++) {
      const row = layer;

      for (let col = layer; col < (n - 1 - layer); col++) {
        let currentRow = row;
        let currentCol = col;
        
        let tmp = matrix[currentRow][currentCol];

        for (let i = 0; i < 4; i++) {
          let targetRow = currentCol;
          let targetCol = n - 1 - currentRow;
          const swap = matrix[targetRow][targetCol];
          matrix[targetRow][targetCol] = tmp;
          tmp = swap;
          currentRow = targetRow;
          currentCol = targetCol;
        }

      }
    }
};

const cases: [number[][], number[][]][] = [
  [[[1,2,3],[4,5,6],[7,8,9]],[[7,4,1],[8,5,2],[9,6,3]]],
  [[[1,2],[3,4]],[[3,1],[4,2]]],
  [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]]
];

test.each(cases)('given array %p, should change to %p', (matrix: number[][], expected: number[][]) => {
  rotate(matrix);
  expect(matrix).toEqual(expected);
});
