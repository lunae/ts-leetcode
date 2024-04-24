import { describe, expect, test } from '@jest/globals';

//  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

function containsDuplicate(nums: number[]): boolean {
  const map = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.add(nums[i]);
  }
  return false;
};

const cases: [number[], boolean][] = [
  [[1,2,3,1],true],
  [[1,2,3,4],false],
  [[1,1,1,3,3,4,3,2,4,2],true],
];

test.each(cases)('given array %p, should return %p', (nums: number[], expected: boolean) => {
  expect(containsDuplicate(nums)).toBe(expected);
});
