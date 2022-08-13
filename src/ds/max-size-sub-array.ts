/**
 * Idea is to find prefix sum from 0 to i index
 * then has a map key is sum and value is i index
 * @param nums
 * @param k
 * @returns longest subarray sum equals k
 */
export const maxSubArrayLen = (nums: number[], k: number): number => {
  const map = new Map<number, number>();
  let prefixSum = 0;
  let longestSubarray = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (prefixSum === k) {
      longestSubarray = i + 1;
    }

    if (map.has(prefixSum - k)) {
      longestSubarray = Math.max(longestSubarray, i - map.get(prefixSum - k));
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
    console.log({ i, longestSubarray, map });
  }
  return longestSubarray;
};
