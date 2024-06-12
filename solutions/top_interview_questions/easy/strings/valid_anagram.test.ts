import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = stringToMap(s);
  const tMap = stringToMap(t);
  let isAnagram = true;

  sMap.forEach((value: number, key: string) => {
    if (value !== tMap.get(key)) {
      isAnagram = false;
    }
  });

  return isAnagram;
};

function stringToMap(s: string): Map<string, number> {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const count = map.has(s[i]) ? map.get(s[i])! + 1 : 1;
    map.set(s[i], count);
  }

  return map;
}

const cases: [string, string, boolean][] = [
  ['anagram', 'nagaram', true],
  ['rat', 'car', false]
];

test.each(cases)('given %p and %p, should return %p', (s: string, t: string, expected: boolean) => {
  expect(isAnagram(s, t)).toBe(expected);
});
