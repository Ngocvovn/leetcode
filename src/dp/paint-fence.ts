export const paintFence = (n: number, k: number): number => {
  const dp = [0, k, k * k];
  for (let i = 3; i <= n; i++) {
    dp[i] = (k - 1) * (dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
};
