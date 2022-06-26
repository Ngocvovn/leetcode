export const findTotalOfCombinations = (
  coins: number[],
  amount: number,
): number => {
  if (amount === 0) {
    return 1;
  }

  // dp[i][j] number of way to make up amount = i with coins[0:j]
  const dp: number[][] = Array.from({ length: amount + 1 }).map((_) => []);

  // dp[i][j] = dp[i][j-1] (no coins[j]) + dp[i-coin[j]][j] (has coins[j])
  for (let i = 1; i <= amount; i++) {
    dp[i][0] = coins[0] <= i && i % coins[0] === 0 ? 1 : 0;
  }

  dp[0][0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (let j = 1; j < coins.length; j++) {
      dp[i][j] =
        dp[i][j - 1] +
        (i < coins[j] ? 0 : i === coins[j] ? 1 : dp[i - coins[j]][j]);
    }
  }

  return dp[amount][coins.length - 1];
};
