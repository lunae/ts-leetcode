import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/4153/

function countAndSay(n: number): string {
  let rle = '1';

  for (let i = 2; i <= n; i++) {
    rle = runLengthEncoding(rle);
  }

  return rle;
}

function runLengthEncoding(str: string): string {
  let result = '';
  let lastChar = str[0];
  let charCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastChar) {
      charCount++;
    } else {
      result += charCount.toString() + lastChar;
      lastChar = str[i];
      charCount = 1;
    }
  }
  result += charCount.toString() + lastChar;

  return result;
}

const runLengthEncodingTestCases: [string, string][] = [
  ['3322251', '23321511'],
  ['111222333', '313233'],
];

test.each(runLengthEncodingTestCases)(
  'given array %p, should return %p',
  (str: string, expected: string) => {
    expect(runLengthEncoding(str)).toEqual(expected);
  }
);

const cases: [number, string][] = [
  [4, '1211'],
  [1, '1'],
  [2, '11'],
];

test.each(cases)(
  'given array %p, should return %p',
  (n: number, expected: string) => {
    expect(countAndSay(n)).toEqual(expected);
  }
);
