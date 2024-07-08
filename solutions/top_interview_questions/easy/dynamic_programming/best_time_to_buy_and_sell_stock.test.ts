import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/

function maxProfit(prices: number[]): number {
  let lowestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
    lowestPrice = Math.min(lowestPrice, prices[i]);
  }

  return maxProfit;
}

const cases: [number[], number][] = [
  [[7, 2, 5, 1, 3, 6], 5],
  [[1, 2, 3, 4, 5, 6], 5],
  [[7, 5, 3, 1], 0],
];

test.each(cases)(
  'given %p, should return %p',
  (stock: number[], expected: number) => {
    expect(maxProfit(stock)).toBe(expected);
  }
);
