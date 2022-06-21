export const minimizeSumOfTwoArrays = (
  arr1: number[],
  arr2: number[],
): number => {
  arr1 = arr1.sort((a, b) => b - a);
  arr2 = arr2.sort((a, b) => a - b);
  return arr1.reduce((acc, curr, index) => acc + curr * arr2[index], 0);
};
