import { radixSort } from "./radixSort";

const fourDigitArray = [
  1234,
  5421,
  3323,
  4454,
  1111,
  2222,
  3333,
  5435,
  4545,
  2332,
  3215
];

const fourDigitSortedArray = [
  1111,
  1234,
  2222,
  2332,
  3215,
  3323,
  3333,
  4454,
  4545,
  5421,
  5435
];

test("radixSort", () => {
  expect(radixSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(radixSort([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
  expect(radixSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4]);
  expect(radixSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4]);
  expect(radixSort(fourDigitArray)).toEqual(fourDigitSortedArray);
});
