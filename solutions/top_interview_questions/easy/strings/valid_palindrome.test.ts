import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

function isPalindrome(s: string): boolean {
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]+/g, '');
  
  let isValidPalindrome = true;
  
  let startIndex = 0;
  let endIndex = cleanedString.length - 1;

  while (startIndex < endIndex) {
    if (cleanedString[startIndex] !== cleanedString[endIndex]) {
      isValidPalindrome = false;
      break;
    }
    startIndex++;
    endIndex--;
  }
  
  return isValidPalindrome;
};

const cases: [string, boolean][] = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  [" ", true]
];

test.each(cases)('given %p, should return %p', (s: string, expected: boolean) => {
  expect(isPalindrome(s)).toBe(expected);
});
