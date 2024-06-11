import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

function isValidSudoku(board: string[][]): boolean {
  const rowMap = new Map<number, Set<string>>();
  const colMap = new Map<number, Set<string>>();
  const quadMap = new Map<number, Set<string>>();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === ".") {
        continue;
      }

      if (rowMap.get(row)?.has(board[row][col])) {
        return false;
      } else {
        const set = rowMap.get(row) || new Set<string>();
        set.add(board[row][col]);
        rowMap.set(row, set);
      }

      if (colMap.get(col)?.has(board[row][col])) {
        return false;
      } else {
        const set = colMap.get(col) || new Set<string>();
        set.add(board[row][col]);
        colMap.set(col, set);
      }

      const elementQuad = (Math.floor(row/3) * 3) + Math.floor(col/3);
      if (quadMap.get(elementQuad)?.has(board[row][col])) {
        return false;
      } else {
        const set = quadMap.get(elementQuad) || new Set<string>();
        set.add(board[row][col]);
        quadMap.set(elementQuad, set);
      }
    }
  }

  return true;
};

const cases: [string[][], boolean][] = [
  [
    [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ], true],
  [
    [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ], false],
];

test.each(cases)('given array %p, should return %p', (board: string[][], expected: boolean) => {
  expect(isValidSudoku(board)).toEqual(expected);
});
