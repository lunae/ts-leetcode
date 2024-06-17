import { describe, expect, test } from '@jest/globals';

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/

class MinStack {
  stackVals: number[];
  minVals: number[];
  
  constructor() {
      this.stackVals = [];
      this.minVals = [];
  }

  push(val: number): void {
      this.stackVals.push(val);
      if (this.stackVals.length <= 1) {
          this.minVals.push(val);
      } else {
          const minVal = Math.min(val, this.minVals[this.stackVals.length - 2])
          this.minVals.push(minVal);
      }
  }

  pop(): void {
      this.stackVals.pop();
      this.minVals.pop();
  }

  top(): number {
      return this.stackVals[this.stackVals.length - 1];
  }

  getMin(): number {
      return this.minVals[this.minVals.length - 1];
  }
}

test('test case 1', () => {
  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  console.log(stack.getMin());
  stack.pop();
  console.log(stack.top());
  console.log(stack.getMin());
});

test('test case 2', () => {
  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-1);
  console.log(stack.getMin());
  console.log(stack.top());
  stack.pop();
  console.log(stack.getMin());
});
