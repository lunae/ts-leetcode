import { describe, expect, test } from '@jest/globals';
import { ListNode, arrayToListNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/

// TODO: Try to solve with runtime of O(n) and space of O(1)

function isPalindrome(head: ListNode | null): boolean {
  let current = head;
  let reversedList = reverseList(head);

  let isPalindrome = true;

  while(current !== null) {
    if (current.val !== reversedList?.val) {
      isPalindrome = false;
      break;
    }
    current = current.next;
    reversedList = reversedList.next;
  }

  return isPalindrome;
};

function reverseList(head: ListNode | null) {
  let current: ListNode | null = head;
  let copy: ListNode | null = null;

  while (current !== null) {
    const node = new ListNode(current.val);
    
    if (copy === null) {
      copy = node;
    } else {
      node.next = copy;
      copy = node;
    }

    current = current.next;
  }

  return copy;
}

const cases: [number[], boolean][] = [
  [[1,2,2,1], true],
  [[1,2], false]
];

test.each(cases)('given array %p, should return %p', (headAsArray: number[], expected: boolean) => {
  const head = arrayToListNode(headAsArray);
  expect(isPalindrome(head)).toEqual(expected);
});
