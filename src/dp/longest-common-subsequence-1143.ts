/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 * @param text1
 * @param text2
 * @returns
 */
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
