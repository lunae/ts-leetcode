import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i1 = m - 1;
    let i2 = n - 1;

    for (let i = nums1.length - 1; i >=0; i--) {
      if (i1 < 0) {
        nums1[i] = nums2[i2];
        i2--;
      } else if (i2 < 0) {
        nums1[i] = nums1[i1];
        i1--;
      } else if (nums1[i1] >= nums2[i2]) {
        nums1[i] = nums1[i1];
        i1--;
      } else {
        nums1[i] = nums2[i2];
        i2--;
      }
    }
};

const cases: [number[], number, number[], number, number[]][] = [
  [[1,2,3,0,0], 3, [1,2], 2, [1,1,2,2,3]],
  [[1,0], 1, [2], 1, [1,2]],
  [[0], 0, [1], 1, [1]],
  [[1], 1, [], 0, [1]],
];

test.each(cases)('given nums1 = %p, m = %p, nums2 = %p, and n = %p, should return leave nums1 as %p', (nums1: number[], m: number, nums2: number[], n: number, expected: number[]) => {
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual(expected);
});
