import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

function intersect(nums1: number[], nums2: number[]): number[] {
  const nums1Map = nums1.reduce((map: Map<number, number>, num: number) => {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1)
    } else {
      map.set(num, 1);
    }
    return map;
  }, new Map<number, number>());

  const intersection: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (nums1Map.has(num) && nums1Map.get(num)! > 0) {
      intersection.push(num);
      nums1Map.set(num, nums1Map.get(num)! - 1);
    }
  }

  return intersection;
};

const cases: [number[], number[], number[]][] = [
  [[1,2,2,1], [2,2], [2,2]],
  [[4,9,5], [9,4,9,8,4], [4,9]],
  [[1], [], []],
  [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]],
];

test.each(cases)('given array %p and array %p, should return %p', (nums1: number[], nums2: number[], expected: number[]) => {
  expect(intersect(nums1, nums2))
    .toEqual(expect.arrayContaining(expected));
});
