import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

function plusOne(digits: number[]): number[] {
  const newDigits = new Array<number>(digits.length);
  
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    carry = Math.floor(sum / 10);
    newDigits[digits.length - i - 1] = sum % 10;
  }
  
  if (carry !== 0) {
    newDigits.push(carry);
  }
  newDigits.reverse();
  return newDigits;
};

const cases: [number[], number[]][] = [
  [[1,2,3],[1,2,4]],
  [[4,3,2,1],[4,3,2,2]],
  [[9,9],[1,0,0]]
];

test.each(cases)('given array %p, should return %p', (num: number[], expected: number[]) => {
  expect(plusOne(num)).toEqual(expected);
});
