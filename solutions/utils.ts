import { describe, expect, test } from '@jest/globals';

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function arrayToListNode(nums: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (let i = 0; i < nums.length; i++) {
    if (head === null) {
      const newHead = new ListNode(nums[i]);
      head = newHead;
      tail = newHead;
    } else {
      const newTail = new ListNode(nums[i]);
      tail!.next = newTail;
      tail = newTail;
    }
  }
  
  return head;
}

export function listNodeToArray(head: ListNode | null): number[] {
  const nums: number[] = [];
  
  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }
  
  return nums;
}
