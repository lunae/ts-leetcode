import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      maxProfit += profit;
    }
  }

  return maxProfit;  
};

const cases: [number[], number][] = [
  [[7,1,5,3,6,4],7],
  [[1,2,3,4,5],4],
  [[7,6,4,3,1],0],
];

test.each(cases)('given array %p, should return %p', (nums: number[], expected: number) => {
  expect(maxProfit(nums)).toEqual(expected);
});
