import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

function moveZeroes(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] !== 0) {
            nums[i] = nums[j];
            nums[j] = 0;
            break;
          }
        }
      }
    }
};

const cases: [number[], number[]][] = [
  [[0,1,0,3,12],[1,3,12,0,0]],
  [[0],[0]],
  [[], []],
  [[0,0,0],[0,0,0]],
  [[0,0,0,0,1], [1,0,0,0,0]]
];

test.each(cases)('given array %p, should return %p', (nums: number[], expected: number[]) => {
  moveZeroes(nums)
  expect(nums).toEqual(expected);
});
