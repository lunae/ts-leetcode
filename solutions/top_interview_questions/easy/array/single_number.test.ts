import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

function singleNumber(nums: number[]): number {
  const numberSet = new Set<number>();
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numberSet.has(num)) {
      numberSet.delete(num);
    } else {
      numberSet.add(num);
    }
  }

  return numberSet.values().next().value;
};

const cases: [number[], number][] = [
  [[2,2,1],1],
  [[4,1,2,1,2],4],
  [[1],1],
];

test.each(cases)('given array %p, should return %p', (nums: number[], expected: number) => {
  expect(singleNumber(nums)).toEqual(expected);
});
