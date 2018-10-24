/**
 * Quick Sort implemented in TypeScript
 * https://github.com/AllAlgorithms/TypeScript
 */

// Sorts an array using quick sort
export function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  const pivot = array.pop();
  const arrays = array.reduce((acc, num) => acc[num < pivot ? 0 : 1].push(num) && acc, [[],[]])
  return [...quickSort(arrays[0]), pivot, ...quickSort(arrays[1])];
}
