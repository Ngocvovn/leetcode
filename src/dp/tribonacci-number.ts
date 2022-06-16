export const tribonacciNumber = (n: number): number => {
  if (n < 0 || n > 37) {
    return -1;
  }

  const values = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    values[i] = values[i - 1] + values[i - 2] + values[i - 3];
  }
  return values[n];
};
