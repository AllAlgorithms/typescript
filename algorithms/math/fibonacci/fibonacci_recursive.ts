/**
 * fibonacci implemented in "naive" recursive approach
 *
 *	@source https://github.com/AllAlgorithms/TypeScript
 */
export const fibonacci = (n: number): number => {
    if(n < 1) return 0;
    if(n == 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
};
