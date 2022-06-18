/**
 * You are given two integer arrays nums and multipliers of size n and m respectively, where n >= m. The arrays are 1-indexed.
 * You begin with a score of 0. You want to perform exactly m operations. On the ith operation (1-indexed), you will:
 * Choose one integer x from either the start or the end of the array nums.
 * Add multipliers[i] * x to your score.
 * Remove x from the array nums.
 * Return the maximum score after performing m operations.
 * @param nums
 * @param multipliers
 * @returns {number}
 */
export const findMaxMultiplication = (
  nums: number[],
  multipliers: number[],
): number => {
  return dp(
    nums,
    multipliers,
    0,
    0,
    multipliers.map((_i) => <number[]>[]),
  );
};

const dp = (
  nums: number[],
  multipliers: number[],
  left: number,
  multiplierIndex: number,
  cache: number[][],
): number => {
  const right = nums.length - 1 - multiplierIndex + left;
  if (multiplierIndex === multipliers.length) {
    return 0;
  }

  if (cache[left] && cache[left][multiplierIndex] !== undefined) {
    return cache[left][multiplierIndex];
  }

  cache[left][multiplierIndex] = Math.max(
    multipliers[multiplierIndex] * nums[left] +
      dp(nums, multipliers, left + 1, multiplierIndex + 1, cache),
    multipliers[multiplierIndex] * nums[right] +
      dp(nums, multipliers, left, multiplierIndex + 1, cache),
  );

  return cache[left][multiplierIndex];
};
