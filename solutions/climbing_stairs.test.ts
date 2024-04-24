import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let prevTwoStepSolutions = 1;
  let prevStepSolutions = 2;
  for (let i = 3; i < n; i++) {
    let currentStep = prevTwoStepSolutions + prevStepSolutions;
    prevTwoStepSolutions = prevStepSolutions;
    prevStepSolutions = currentStep;
  }
  return prevTwoStepSolutions + prevStepSolutions;
};

const cases = [
  [1,1],
  [2,2],
  [3,3],
  [4,5],
  [5,8],
];

test.each(cases)('given %p stairs, should return %p', (stairs: number, expected: number) => {
  expect(climbStairs(stairs)).toBe(expected);
});
