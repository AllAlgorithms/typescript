import { insertionSort } from './insertionSort';

test('insertionSort', () => {
  expect(insertionSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
  expect(insertionSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
	expect(insertionSort([2, 3, 4, 1]))
	  .toEqual([1, 2, 3, 4]);
});
