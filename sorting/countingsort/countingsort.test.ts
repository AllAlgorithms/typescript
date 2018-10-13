import { countingSort } from './countingsort';

test("Test 1", () => {
  const arr = [3, 0, 2, 5, 4, 1];
  const sortedArr = [0, 1, 2, 3, 4, 5];

  expect(countingSort(arr, 0, 5)).toEqual(sortedArr);
});
