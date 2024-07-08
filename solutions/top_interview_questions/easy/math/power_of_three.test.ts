import { describe, expect, test } from "@jest/globals";

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/

// n = 3^x
// where x > 0

function isPowerOfThree(n: number): boolean {
  if (n < 0) return false;

  let remainder = n;
  while (remainder > 1) {
    remainder /= 3;
  }

  return remainder === 1;
}

const cases: [number, boolean][] = [
  [27, true],
  [0, false],
  [-1, false],
  [9, true],
  [3, true],
  [1, true],
];

test.each(cases)(
  "given %p, should return %p",
  (n: number, expected: boolean) => {
    expect(isPowerOfThree(n)).toEqual(expected);
  }
);
