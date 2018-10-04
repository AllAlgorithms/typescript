import { bubbleSortBasic, bubbleSort } from "./bubbleSort";

test("Basic 1", () => {
  expect(bubbleSortBasic([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test("Basic 2", () => {
  expect(bubbleSortBasic([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
});

test("final 1", () => {
  expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test("final 2", () => {
  expect(bubbleSort([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
});
