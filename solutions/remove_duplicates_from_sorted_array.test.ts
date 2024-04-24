import { describe, expect, test } from '@jest/globals';

//  https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

function removeDuplicates(nums: number[]): number {
    let lastUniqueNumberIndex = 0;
    for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
      if (nums[currentIndex] !== nums[lastUniqueNumberIndex]) {
        nums[lastUniqueNumberIndex + 1] = nums[currentIndex];
        lastUniqueNumberIndex++;
      }
    }
    return lastUniqueNumberIndex + 1;
};

const cases: [number[], number][] = [
  [[1,1,2],2],
  [[0,0,1,1,1,2,2,3,3,4],5],
  [[1],1],
  [[1,1,1,1,1,1],1],
];

test.each(cases)('given array %p, should return %p', (nums: number[], expected: number) => {
  expect(removeDuplicates(nums)).toBe(expected);
});
