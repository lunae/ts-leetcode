import { describe, expect, test } from '@jest/globals';
import { ListNode, arrayToListNode } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/

// TODO: arrayToListNode does not provide a way to add cycles in list. Would need to add functionality to add cycles based on pos.

function hasCycle(head: ListNode | null): boolean {
  const set = new Set<ListNode>();
  let current = head;

  let hasCycle = false;

  while (current !== null) {
    if (set.has(current)) {
      hasCycle = true;
      break;
    } else {
      set.add(current);
    }
    current = current.next;
  }

  return hasCycle;
};

const cases: [number[], boolean][] = [];

// test.each(cases)('given array %p, should return %p', (headAsArray: number[], expected: boolean) => {
//   const head = arrayToListNode(headAsArray);
//   expect(hasCycle(head)).toEqual(expected);
// });

test('test to keep test suite happy', () => {
  expect(true).toBe(true);
});
