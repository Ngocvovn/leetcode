export const longestCommonSubsequence = (
  text1: string,
  text2: string,
): number => {
  const cache: number[][] = [];
  for (let i = 0; i < text1.length; i++) {
    cache.push([]);
  }
  return dp(text1, text2, 0, 0, cache);
};

const dp = (
  text1: string,
  text2: string,
  i: number,
  j: number,
  cache: number[][],
): number => {
  if (i === text1.length || j === text2.length) {
    return 0;
  }

  if (cache[i][j] !== undefined) {
    return cache[i][j];
  }

  cache[i][j] =
    text1[i] === text2[j]
      ? 1 + dp(text1, text2, i + 1, j + 1, cache)
      : Math.max(
          dp(text1, text2, i + 1, j, cache),
          dp(text1, text2, i, j + 1, cache),
        );
  return cache[i][j];
};
