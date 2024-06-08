import { describe, expect, test } from '@jest/globals';
import { ListNode, arrayToListNode, listNodeToArray } from './utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

function deleteNode(node: ListNode | null): void {
  node!.val = node!.next!.val
  node!.next = node!.next!.next;
};

const cases: [number[], number, number[]][] = [
  [[4,5,1,9], 5, [4,1,9]],
  [[4,5,1,9], 1, [4,5,9]],
  [[1,2], 1, [2]],
];

test.each(cases)('given array %p, should return %p', (headAsArray: number[], nodeVal: number, expectedAsArray: number[]) => {
  const head = arrayToListNode(headAsArray);

  let node: ListNode | null = head;
  while(node?.val !== nodeVal) {
    node = node!.next;
  }

  deleteNode(node);
  const newHeadAsArray = listNodeToArray(head);
  expect(newHeadAsArray).toEqual(expectedAsArray);
});
