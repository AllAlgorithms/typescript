import { quickSort } from './quickSort';

test('mergeSort', () => {
  expect(quickSort([1, 2, 3, 4]))
    .toEqual([1, 2, 3, 4]);
  expect(quickSort([3, 2, 1, 4]))
    .toEqual([1, 2, 3, 4]);
	expect(quickSort([2, 3, 4, 1]))
	  .toEqual([1, 2, 3, 4]);
});
