import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

// JS arrays provide a reverse function but that defeats the purpose of exercise
// In real world, you would use it but for purposes of Leetcode, we write our own implementation

function reverseString(s: string[]): void {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
      const swap = s[end];
      s[end] = s[start];
      s[start] = swap;
      start++;
      end--;
    }
};



const cases: [string[], string[]][] = [
  [['c','a','t'],['t','a','c']],
  [['h','e','l','l','o'], ['o','l','l','e','h']],
  [['H','a','n','n','a','h'],['h','a','n','n','a','H']],
  [['a'],['a']]
];

test.each(cases)('given %p, should change to %p', (s: string[], expected: string[]) => {
  reverseString(s);
  expect(s).toEqual(expected);
});
