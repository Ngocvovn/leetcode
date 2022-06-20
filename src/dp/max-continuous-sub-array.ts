export const findMaxContinuousSubArray = (nums: number[]): number => {
  let currentArray = nums[0];
  let maxArray = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    currentArray = Math.max(num, currentArray + num);
    maxArray = Math.max(currentArray, maxArray);
  }
  return maxArray;
};
