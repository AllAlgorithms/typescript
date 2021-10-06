/**
 *  factorial implemented in TypeScript as an iterative solution
 *
 * @source https://github.com/AllAlgorithms/TypeScript
 */
export const factorial = (n: number): number => {
  let ret = 1;

  for (let i = 2; i <= n; i++) {
    ret *= i;
  }

  return ret;
};
