import { describe, expect, test } from '@jest/globals';
import { TreeNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  
  const leftStack: Array<TreeNode | null> = [ root.left ];
  const rightStack: Array<TreeNode | null> = [ root.right ];

  while (leftStack.length > 0 && rightStack.length > 0) {
    const leftCurrent = leftStack.pop();
    const rightCurrent = rightStack.pop();

    const leftValue = leftCurrent === null ? null : leftCurrent!.val;
    const rightValue = rightCurrent === null ? null : rightCurrent!.val;

    if (leftValue !== rightValue) {
      return false;
    }

    if (leftCurrent !== null) {
      leftStack.push(leftCurrent!.right);
      leftStack.push(leftCurrent!.left);
    }

    if (rightCurrent !== null) {
      rightStack.push(rightCurrent!.left);
      rightStack.push(rightCurrent!.right);
    }
  }

  return leftStack.length === 0 && rightStack.length === 0;    
};

const cases: [TreeNode, boolean][] = [
  [
    new TreeNode(
      2,
      new TreeNode(1),
      new TreeNode(1)
    ),
    true
  ],
  [
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3),
        null
      ),
      new TreeNode(
        2,
        new TreeNode(3),
        null
      ),
    ),
    false
  ]
];

test.each(cases)('given %p, should return %p', (root: TreeNode | null, expected: boolean) => {
  const result = isSymmetric(root);
  expect(result).toEqual(expected);
});
