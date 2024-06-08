import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

function rotate(nums: number[], k: number): void {
  const minimalRotations = k % nums.length;
  nums.unshift(...nums.splice(-minimalRotations));
};

// Too slow for large input arrays
function manualRotate(nums: number[], k: number): void {
  const minimalRotations = k % nums.length;
  for (let i = 0; i < minimalRotations; i++) {
    let swap = nums[0];
    for (let j = 0; j < nums.length; j++) {
      const nextIndex = j !== (nums.length - 1) ? j + 1 : 0;
      const tmp = nums[nextIndex];
      nums[nextIndex] = swap;
      swap = tmp;
    }
  }
}

const cases: [number[], number, number[]][] = [
  [[1,2,3,4,5,6,7],3, [5,6,7,1,2,3,4]],
  [[-1,-100,3,99],2, [3,99,-1,-100]],
  [[1,2,3],3,[1,2,3]],
  [[1,2,3,4],2,[3,4,1,2]],
];

test.each(cases)('given array %p and k = %p, should return %p', (nums: number[], k: number, expected: number[]) => {
  rotate(nums, k);
  expect(nums).toEqual(expected);
});
