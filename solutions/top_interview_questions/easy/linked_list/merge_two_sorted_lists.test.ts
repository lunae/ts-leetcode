import { describe, expect, test } from '@jest/globals';
import { ListNode, arrayToListNode, listNodeToArray } from '../../../utils';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null;
    let tail: ListNode | null = null;

    while(list1 !== null || list2 !== null) {
      let next: ListNode | null = null;

      if (list1 === null) {
        next = new ListNode(list2!.val);
        list2 = list2!.next;
      } else if (list2 === null) {
        next = new ListNode(list1!.val);
        list1 = list1!.next;
      } else {
        if (list1!.val <= list2!.val) {
          next = new ListNode(list1!.val);
          list1 = list1!.next;
        } else {
          next = new ListNode(list2!.val);
          list2 = list2!.next;
        }
      }

      if (newHead === null) {
        newHead = next;
        tail = next;
      } else {
        tail!.next = next;
        tail = next;
      }
    }

    return newHead;
};

const cases: [number[], number[], number[]][] = [
  [[1,2,4], [1,3,4], [1,1,2,3,4,4]],
  [[],[],[]],
  [[],[0],[0]]
];

test.each(cases)('given %p and %p, should return %p', (list1AsArray: number[], list2AsArray: number[], expectedListAsArray: number[]) => {
  const list1 = arrayToListNode(list1AsArray);
  const list2 = arrayToListNode(list2AsArray);

  const result = mergeTwoLists(list1, list2);
  const resultAsArray = listNodeToArray(result);

  expect(resultAsArray).toEqual(expectedListAsArray);
});
