/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 * @param stairCosts
 * returns the minimum cost to climb the stairs
 */
export const minCostClimbingStairs = (stairCosts: number[]): number => {
  const length = stairCosts.length;
  if (length === 0) {
    return 0;
  }
  if (length === 1) {
    return 0;
  }
  if (length === 2) {
    return Math.min(stairCosts[0], stairCosts[1]);
  }

  const dp: number[] = [stairCosts[0], stairCosts[1]];
  for (let i = 2; i < length; i++) {
    dp[i] = Math.min(dp[i - 2] + stairCosts[i], dp[i - 1] + stairCosts[i]);
  }

  return Math.min(dp[length - 1], dp[length - 2]);
};
