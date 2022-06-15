/**
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is
 * that adjacent houses have security systems connected and
 * it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 * @param houseValues
 * @returns
 */
export const houseRobbingSolution = (houseValues: number[]): number => {
  if (houseValues.length === 0) {
    return 0;
  }
  if (houseValues.length === 1) {
    return houseValues[0];
  }
  if (houseValues.length === 2) {
    return Math.max(houseValues[0], houseValues[1]);
  }

  const dp: number[] = [
    houseValues[0],
    Math.max(houseValues[0], houseValues[1]),
  ];
  for (let i = 2; i < houseValues.length; i++) {
    dp[i] = Math.max(dp[i - 2] + houseValues[i], dp[i - 1]);
  }

  return dp[houseValues.length - 1];
};
