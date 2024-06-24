import { describe, expect, test } from '@jest/globals';
import { TreeNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) return true;
  const isMaxValueOfLeftSubtreeSmaller = maxValueOfTree(root.left) < root.val;
  const isMinValueOfRightSubtreeLarger = root.val < minValueOfTree(root.right);
  const isLeftSubTreeValidBST = isValidBST(root.left);
  const isRightSubTreeValidBST = isValidBST(root.right);
  return isMaxValueOfLeftSubtreeSmaller && isMinValueOfRightSubtreeLarger && isLeftSubTreeValidBST && isRightSubTreeValidBST;
};

function maxValueOfTree(root: TreeNode | null): number {
  if (root === null) return -Infinity;
  return Math.max(
    root.val, 
    maxValueOfTree(root.left), 
    maxValueOfTree(root.right)
  );
}

function minValueOfTree(root: TreeNode | null): number {
  if (root === null) return Infinity;
  return Math.min(
    root.val, 
    minValueOfTree(root.left), 
    minValueOfTree(root.right)
  );
}

const cases: [TreeNode, boolean][] = [
  [
    new TreeNode(
      2,
      new TreeNode(1),
      new TreeNode(3)
    ),
    true
  ],
  [
    new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(
        4,
        new TreeNode(3),
        new TreeNode(6)
      )
    ),
    false
  ],
  [
    new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(
        6,
        new TreeNode(3)
      )
    ),
    false
  ]
];

test.each(cases)('given %p, should return %p', (root: TreeNode | null, expected: boolean) => {
  const result = isValidBST(root);
  expect(result).toEqual(expected);
});
