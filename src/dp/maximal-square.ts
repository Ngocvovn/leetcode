/**
 * Given an m x n binary matrix filled with 0's and 1's,
 * find the largest square containing only 1's and return its area.
 * @param matrix
 * @returns
 */
export const maximalSquare = (matrix: string[][]): number => {
  const dp: number[][] = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));
  let maxSquare = 0;
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        maxSquare = Math.max(maxSquare, dp[i][j] * dp[i][j]);
      }
    }
  }
  return maxSquare;
};

// My own solution
const dp = (
  x: number,
  y: number,
  size: number,
  cache: number[][][],
  matrix: string[][],
  max: { size: number },
): number => {
  if (x < 0 || y < 0) {
    return 0;
  }
  let isOneSquare = 0;
  if (size === 0) {
    isOneSquare = matrix[x][y] === '1' ? 1 : 0;
    if (isOneSquare === 1 && max.size < size + 1) {
      max.size = size + 1;
    }
    return isOneSquare;
  }

  if (cache[x][y][size] !== undefined) {
    return cache[x][y][size];
  }
  isOneSquare = Math.min(
    dp(x, y, size - 1, cache, matrix, max),
    dp(x, y - 1, size - 1, cache, matrix, max),
    dp(x - 1, y, size - 1, cache, matrix, max),
    dp(x - 1, y - 1, size - 1, cache, matrix, max),
  );

  if (isOneSquare === 1 && max.size < size + 1) {
    max.size = size + 1;
  }

  cache[x][y][size] = isOneSquare;
  return isOneSquare;
};
