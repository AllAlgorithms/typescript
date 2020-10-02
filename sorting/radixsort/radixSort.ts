/**
 * Radix Sort implemented in TypeScript
 * https://github.com/AllAlgorithms/TypeScript
 */

function maxPlaceValue(arr: number[]): number {
  let max = 0;
  for (const num of arr) {
    const digits = Math.floor(Math.log10(num) + 1);
    max = Math.max(max, digits);
  }

  return max;
}

function getDigit(num: number, place: number): number {
  return Math.floor(num / place) % 10;
}

export function radixSort(arr: number[]): number[] {
  const digits = maxPlaceValue(arr);
  let sortedArray = arr.slice();
  for (let i = 1; i <= digits; i++) {
    const place = Math.pow(10, i - 1); // ones place, tens place, etc

    // create empty bucket of 10 empty arrays
    const buckets: number[][] = [];
    for (let i = 0; i < 10; i++) {
      buckets.push([]);
    }

    for (const num of sortedArray) {
      const digit = getDigit(num, place);
      buckets[digit].push(num);
    }

    sortedArray = ([] as number[]).concat(...buckets);
  }

  return sortedArray;
}
