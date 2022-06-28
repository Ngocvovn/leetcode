export const countVowelsPermutation = (n: number) => {
  const VOWEL_LENGTH = 5;
  const MODULO = Math.pow(10, 9) + 7;
  const dp = Array.from({ length: n }).map(() => []);
  dp[0] = [1, 1, 1, 1, 1];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < VOWEL_LENGTH; j++) {
      // 'a'
      if (j === 0) {
        dp[i][j] = dp[i - 1][1];
      } else if (j === 1) {
        dp[i][j] = (dp[i - 1][0] + dp[i - 1][2]) % MODULO;
      } else if (j === 2) {
        dp[i][j] =
          (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][3] + dp[i - 1][4]) % MODULO;
      } else if (j === 3) {
        dp[i][j] = (dp[i - 1][2] + dp[i - 1][4]) % MODULO;
      } else {
        dp[i][j] = dp[i - 1][0];
      }
    }
  }

  return dp[n - 1].reduce((acc, cur) => acc + cur, 0) % MODULO;
};
