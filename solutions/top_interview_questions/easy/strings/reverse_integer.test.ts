import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

function reverse(x: number): number {
  let isNegative = x < 0;
  
  if (isNegative) {
    x *= -1;
  }

  const digits = reverseDigits(x);
  let sum = sumReversedDigits(digits);

  if (isNegative) {
    sum *= -1;
  }

  if (isValid32BitNumberRange(sum)) {
    return 0;
  }
  
  return sum;
};

function reverseDigits(x: number): number[] {
  let power = 1;
  let hasFoundAllDigits = false;
  const digits = [];
  
  while (!hasFoundAllDigits) {
    const modulo = x % Math.pow(10, power);
    const digit = Math.floor(modulo / Math.pow(10, (power - 1)));
    digits.push(digit);
    power++;
    
    if (modulo === x) {
      hasFoundAllDigits = true;
    }
  }

  return digits;
}

function sumReversedDigits(digits: number[]): number {
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(10, digits.length - 1 - i) * digits[i];
  }
  return sum;
}

function isValid32BitNumberRange(x: number): boolean {
  const lowerBound = Math.pow(2,31) * -1;
  const upperBound = Math.pow(2,31) - 1;
  return x < lowerBound || upperBound < x;
}

const cases: [number, number][] = [
  [123, 321],
  [-123, -321],
  [120, 21]
];

test.each(cases)('given %p, should return %p', (x: number, expected: number) => {
  expect(reverse(x)).toBe(expected);
});
