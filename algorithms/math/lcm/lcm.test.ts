import { lcm } from './lcm';

test('least common multiple', () => {
    expect(lcm(7, 3)).toEqual(21);
    expect(lcm(4, 5)).toEqual(20);
    expect(lcm(10, 10)).toEqual(10);
});
