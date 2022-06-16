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
