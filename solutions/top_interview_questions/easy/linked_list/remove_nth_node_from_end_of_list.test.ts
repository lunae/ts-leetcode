import { describe, expect, test } from '@jest/globals';
import { ListNode, arrayToListNode, listNodeToArray } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let current: ListNode | null = head;

    for (let i = 0; i < n; i++) {
      current = current!.next;
    }

    if (current === null) {
      return head!.next;
    }

    let target: ListNode | null = head;
    
    while (current!.next !== null) {
      current = current!.next;
      target = target!.next;
    }

    target!.next = target!.next!.next;

    return head;
};

const cases: [number[], number, number[]][] = [
  [[1,2,3,4,5], 2, [1,2,3,5]],
  [[1,2], 1, [1]],
  [[1,2], 2, [2]],
  [[1], 1, []],
];

test.each(cases)('given array %p and n = %p, should return %p', (headAsArray: number[], n: number, expectedAsArray: number[]) => {
  const listNode = arrayToListNode(headAsArray);
  const updateListNode = removeNthFromEnd(listNode, n);
  const updateListNodeAsArray = listNodeToArray(updateListNode);
  expect(updateListNodeAsArray).toEqual(expectedAsArray);
});
