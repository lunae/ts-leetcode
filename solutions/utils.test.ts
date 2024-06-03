import { arrayToListNode, listNodeToArray } from "./utils";

test('linked list convertion utils', () => {
  const nums = [1,2,3,4,5];
  const listNode = arrayToListNode(nums);
  const convertedNums = listNodeToArray(listNode);
  expect(convertedNums).toEqual(nums);
});