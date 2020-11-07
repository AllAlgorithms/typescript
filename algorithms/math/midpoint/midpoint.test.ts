import { midpoint } from './midpoint';

test('midpoint', () => {
    expect(midpoint([0, 0], [4, 4])).toEqual([2, 2]);
    expect(midpoint([-3, 15], [4, 4])).toEqual([0.5, 9.5]);
    expect(midpoint([5, 5], [5, 5])).toEqual([5, 5]);
});
