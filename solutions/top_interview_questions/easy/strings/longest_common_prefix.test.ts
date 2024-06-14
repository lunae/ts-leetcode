import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) {
    return strs[0];
  }
  
  let prefixLength = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    const commonCharCount = longestCommonPrefixBetweenStrings(strs[i - 1], strs[i]);
    if (commonCharCount < prefixLength) {
      prefixLength = commonCharCount;
    }
  }

  return strs[0].substring(0, prefixLength);
};

function longestCommonPrefixBetweenStrings(a: string, b: string): number {
  const shortestLength = Math.min(a.length, b.length);
  
  let commonCharCount = 0;
  for (let i = 0; i < shortestLength; i++) {
    if (a[i] !== b[i]) {
      break;
    }
    commonCharCount++;
  }

  return commonCharCount;
}

const cases: [string[], string][] = [
  [["flower","flow","flight"], "fl"],
  [["dog","racecar","car"], ""],
  [["food"], "food"],
];

test.each(cases)('given %p, should return %p', (strs: string[], expected: string) => {
  expect(longestCommonPrefix(strs)).toBe(expected);
});
