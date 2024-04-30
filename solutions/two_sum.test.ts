import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let indexes: number[] = [];
  
  for (let [index, val] of nums.entries()) {
    const needs = target - val;
    if (map.has(needs)) {
      indexes = [map.get(needs), index];
    }
    map.set(val, index);
  }
  return indexes;
};

const cases: [number[], number, number[]][] = [
  [[2,7,11,15],9,[0,1]],
  [[3,2,4],6,[1,2]],
  [[3,3],6,[0,1]],
];

test.each(cases)('given array %p and target %p, should return %p', (nums: number[], target:number, expected: number[]) => {
  expect(twoSum(nums, target)).toEqual(expected);
});
