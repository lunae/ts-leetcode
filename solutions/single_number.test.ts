import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

function singleNumber(nums: number[]): number {
    const numberMap = nums.reduce((map: Map<number, number>, num: number) => {
      if (map.has(num)) {
        map.set(num, map.get(num)! + 1);
      } else {
        map.set(num, 1);
      }
      return map;
    }, new Map<number, number>());
    
    let singleNumber = -1;
    for (const [key, value] of numberMap.entries()) {
      if (value === 1) {
        singleNumber = key;
      }
    }
    return singleNumber;
};

const cases: [number[], number][] = [
  [[2,2,1],1],
  [[4,1,2,1,2],4],
  [[1],1],
];

test.each(cases)('given array %p, should return %p', (nums: number[], expected: number) => {
  expect(singleNumber(nums)).toEqual(expected);
});
