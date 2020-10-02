import { Sorter } from './quickSort';

test('quickSort', () => {
 const sorter  = new Sorter()
  expect(sorter.quickSort([1, 2, 3, 4], 0, 3))
    .toEqual([1, 2, 3, 4]);
  expect(sorter.quickSort([3, 2, 1, 4], 0, 3))
    .toEqual([1, 2, 3, 4]);
	expect(sorter.quickSort([2, 3, 4, 1], 0, 3))
	  .toEqual([1, 2, 3, 4]);
});