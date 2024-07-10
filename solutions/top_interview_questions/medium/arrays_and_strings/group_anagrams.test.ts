import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortedStr = str.split('').sort().join('');
    if (map.has(sortedStr)) {
      map.set(sortedStr, [...map.get(sortedStr)!, str]);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return [...map.values()];
}

const cases: [string[], string[][]][] = [
  [
    ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
  ],
  [[''], [['']]],
];

test.each(cases)(
  'given array %p, should return %p',
  (nums: string[], expected: string[][]) => {
    expect(groupAnagrams(nums)).toEqual(expected);
  }
);
