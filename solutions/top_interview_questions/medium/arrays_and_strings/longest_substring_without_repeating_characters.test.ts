import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/

function lengthOfLongestSubstring(s: string): number {
  let i = 0,
    j = 0,
    maxLength = 0;
  let letterSet = new Set<string>();

  while (j < s.length) {
    if (letterSet.has(s[j])) {
      letterSet.delete(s[i]);
      i++;
    } else {
      letterSet.add(s[j]);
      j++;
      maxLength = Math.max(maxLength, letterSet.size);
    }
  }

  return maxLength;
}

const cases: [string, number][] = [
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
  [' ', 1],
  ['a', 1],
];

test.each(cases)(
  'given array %p, should return %p',
  (str: string, expected: number) => {
    expect(lengthOfLongestSubstring(str)).toBe(expected);
  }
);
