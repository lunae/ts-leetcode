import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

function firstUniqChar(s: string): number {
  const countMap = new Map<string, number>();
  const indexMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (countMap.has(letter)) {
      countMap.set(letter, countMap.get(letter)! + 1);
    } else {
      countMap.set(letter, 1);
      indexMap.set(letter, i);
    }
  }

  let firstUniqueCharIndex = -1;

  countMap.forEach((value: number, key:string) => {
    if (value === 1) {
      if (firstUniqueCharIndex === -1) {
        firstUniqueCharIndex = indexMap.get(key)!;
      }

      if (indexMap.get(key)! < firstUniqueCharIndex) {
        firstUniqueCharIndex = indexMap.get(key)!;
      }
    }
  });
  
  return firstUniqueCharIndex;
};

const cases: [string, number][] = [
  ['leetcode', 0],
  ['loveleetcode', 2],
  ['aabb', -1]
];

test.each(cases)('given %p, should return %p', (s: string, expected: number) => {
  expect(firstUniqChar(s)).toEqual(expected);
});
