import { describe, expect, test } from '@jest/globals';
import { TreeNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const cases: [TreeNode, number][] = [
  [
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7)
      )
    ),
    3
  ]
];

test.each(cases)('given %p, should return %p', (root: TreeNode | null, expected: number) => {
  const result = maxDepth(root);
  expect(result).toEqual(expected);
});
