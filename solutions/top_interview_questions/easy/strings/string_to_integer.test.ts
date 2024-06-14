import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

function myAtoi(s: string): number {
  let result = 0;

  s = s.trim().toLowerCase();

  let isSignSet = false;
  let isNegative = false;
  const digits = [];
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (isPositiveChar(char) && !isSignSet && digits.length === 0) {
      isSignSet = true;
      continue;
    }

    if (isNegativeChar(char) && !isSignSet && digits.length === 0) {
      isSignSet = true;
      isNegative = true;
      continue;
    }

    if (!isDigit(char)) {
      break;
    }

    digits.push(char);
  }

  if (digits.length === 0) {
    return 0;
  }
  
  result = Number.parseInt(digits.join(""));

  if (isNegative) {
    result *= -1;
  }

  if (isOutOfLowerRange(result)) {
    return Math.pow(2, 31) * -1;
  }

  if (isOutOfUpperRange(result)) {
    return Math.pow(2, 31) - 1;
  }

  return result;
};

const isDigit = (s: string) => /\d/.test(s);
const isPositiveChar = (s: string) => s === "+";
const isNegativeChar = (s: string) => s === "-";
const isOutOfLowerRange = (num: number) => num < (Math.pow(2, 31) * -1);
const isOutOfUpperRange = (num: number) => num > (Math.pow(2, 31) - 1)

const cases: [string, number][] = [
  ["42", 42],
  ["  -042", -42],
  ["0-1", 0],
  ["words and 987", 0],
  ["  -87  ", 0-87],
  ["  87+  ", 87],
  ["-91283472332", -2147483648]
];

test.each(cases)('given %p, should return %p', (str: string, expected: number) => {
  expect(myAtoi(str)).toBe(expected);
});
