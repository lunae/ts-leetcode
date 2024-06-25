import { describe, expect, test } from '@jest/globals';
import { TreeNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  
  const rootIndex = Math.floor(nums.length / 2);
  const rootValue = nums[rootIndex];
  const leftChild = sortedArrayToBST(nums.slice(0, rootIndex));
  const rightChild = sortedArrayToBST(nums.slice(rootIndex + 1))
  return new TreeNode(rootValue , leftChild, rightChild);
};

const cases: [number[], TreeNode][] = [
  [
    [-10, -3, 0, 5, 9],
    new TreeNode(
      0,
      new TreeNode(
        -3,
        new TreeNode(-10),
      ),
      new TreeNode(
        9,
        new TreeNode(5),
      )
    )
  ],
];

test.each(cases)('given %p, should return %p', (nums: number[], root: TreeNode | null) => {
  const result = sortedArrayToBST(nums);
  expect(result).toEqual(root);
});
