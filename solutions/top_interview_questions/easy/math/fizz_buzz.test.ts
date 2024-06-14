import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/

function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
      if (isDivisibleBy(i, 5) && isDivisibleBy(i, 3)) {
          result.push("FizzBuzz");
      } else if (isDivisibleBy(i, 3)) {
          result.push("Fizz");
      } else if (isDivisibleBy(i, 5)) {
          result.push("Buzz");
      } else {
          result.push(i.toString());
      }
  }
  return result;
};

const isDivisibleBy = (n: number, divisibleBy: number) => n % divisibleBy === 0

const cases: [number, string[]][] = [
  [3, ["1","2","Fizz"]],
  [5, ["1","2","Fizz","4","Buzz"]],
  [15, ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]]
];

test.each(cases)('given %p, should return %p', (num: number, expected: string[]) => {
  expect(fizzBuzz(num)).toEqual(expected);
});
