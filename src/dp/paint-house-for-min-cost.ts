export const paintHouseForMinCost = (costs: number[][]): number => {
  const NUMBER_OF_COLORS = costs[0].length;
  const dp = Array.from({ length: costs.length }).map(() => []);
  dp[0] = costs[0];
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < NUMBER_OF_COLORS; j++) {
      dp[i][j] =
        Math.min(...dp[i - 1].filter((_, index) => index !== j)) + costs[i][j];
    }
  }
  return Math.min(...dp[costs.length - 1]);
};
