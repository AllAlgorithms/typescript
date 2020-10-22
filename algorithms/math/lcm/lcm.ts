/**
 * Least common multiple implemented in TypeScript
 *
 * @source https://github.com/AllAlgorithms/TypeScript
 */

import { gcd } from '../gcd/gcd';

export function lcm(a: number, b: number): number {
    return Math.abs((a * b)) / gcd(a, b);
}
