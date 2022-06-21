/* Time complexity: O(n*n)
export const findLongestIncreasingSubsequence = (nums: number[]): number => {
  const dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp.reduce((acc, cur) => Math.max(acc, cur), 0);
};*/

export const findLongestIncreasingSubsequence = (nums: number[]): number => {
  const subArray = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const index = binarySearch(subArray, num);
    subArray[index] = num;
  }
  return subArray.length;
};

const binarySearch = (sortedNums: number[], target: number): number => {
  let left = 0;
  let right = sortedNums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedNums[mid] === target) {
      return mid;
    }

    if (sortedNums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
