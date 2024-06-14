import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

// Would normally use the following implementation
// function strStr(haystack: string, needle: string): number {
//   return haystack.indexOf(needle);
// };

function strStr(haystack: string, needle: string): number {
  let firstIndexOf = -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let hayStackIndex = i;
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[hayStackIndex] !== needle[j]) {
        found = false;
        break;
      }
      hayStackIndex++;
    }

    if (found) {
      firstIndexOf = i;
      break;
    }

  }

  return firstIndexOf;
};



const cases: [string, string, number][] = [
  ["sadbutsad", "sad", 0],
  ["leetcode", "leeto", -1],
  ["food", "d", 3]
];

test.each(cases)('given haystack = %p and needle = %p, should return %p', (haystack: string, needle: string, expected: number) => {
  expect(strStr(haystack, needle)).toBe(expected);
});
