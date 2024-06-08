import { describe, expect, test } from '@jest/globals';
import { ListNode, arrayToListNode, listNodeToArray } from '../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

function reverseList(head: ListNode | null): ListNode | null {
    let newNext: ListNode | null = null;
    let current = head;

    while (current !== null) {
      const temp = current.next;
      current.next = newNext;
      newNext = current;
      current = temp;
    }

    return newNext;
};


const cases: [number[], number[]][] = [
  [[1,2,3,4,5], [5,4,3,2,1]],
  [[1,2], [2,1]],
  [[], []],
];

test.each(cases)('given array %p, should return %p', (headAsArray: number[], expected: number[]) => {
  const head = arrayToListNode(headAsArray);
  const reversedList = reverseList(head);
  const reversedListAsArray = listNodeToArray(reversedList);
  expect(reversedListAsArray).toEqual(expected);
});
