import { describe, expect, test } from '@jest/globals';
import { TreeNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
      return [];
  }

  const queue = [ root ];
  const finalResult: number[][] = [];
  let levelResult: number[] = [];

  let nodesToProcessInLevel = 1;
  let processedNodesInLevel = 0;
  let numberOfChildrenForNextLevel = 0;

  while (queue.length > 0) {
      const current = queue.shift()!;
      processedNodesInLevel++;
      levelResult.push(current.val);

      if (current.left !== null) {
          queue.push(current.left);
          numberOfChildrenForNextLevel++;
      }

      if (current.right !== null) {
          queue.push(current.right);
          numberOfChildrenForNextLevel++;
      }

      if (nodesToProcessInLevel === processedNodesInLevel) {
          finalResult.push(levelResult);
          levelResult = [];
          nodesToProcessInLevel = numberOfChildrenForNextLevel;
          processedNodesInLevel = 0;
          numberOfChildrenForNextLevel = 0;
      }
  }

  return finalResult;
};

const cases: [TreeNode, number[][]][] = [
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
    [[3], [9,20], [15,7]]
  ]
];

test.each(cases)('given %p, should return %p', (root: TreeNode | null, expected: number[][]) => {
  const result = levelOrder(root);
  expect(result).toEqual(expected);
});
