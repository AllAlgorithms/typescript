/**
 *  factorial implemented in TypeScript, (tail-) recursive
 *  variant.
 *
 * @source https://github.com/AllAlgorithms/TypeScript
 */
export const factorial = (n: number, acc: number = 1): number => {
    if(n <= 1) return acc;

    return factorial(n -1, acc * n);
};
