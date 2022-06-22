/**
 * You are given an integer array prices where prices[i]
 * is the price of a given stock on the ith day, and an integer k.
 * Find the maximum profit you can achieve. You may complete at most k transactions.
 * @param prices
 * @param k
 * @returns
 */
export const findMaximumProfit = (prices: number[], k: number): number => {
  const cache = Array.from({ length: prices.length }).map(() =>
    Array.from({ length: k + 1 }).map(() => []),
  );
  return dp(prices, cache, 0, k, 0);
};

/**
 * Idea is you can do nothing on a day or buy or sell depend on if you already bought stock or not
 */
const dp = (
  prices: number[],
  cache: number[][][],
  i: number,
  numOfTransactionLeft: number,
  isHolding: 0 | 1,
): number => {
  if (numOfTransactionLeft === 0 || i === prices.length) {
    return 0;
  }

  if (cache[i][numOfTransactionLeft][isHolding] !== undefined) {
    return cache[i][numOfTransactionLeft][isHolding];
  }
  const doNoThing = dp(prices, cache, i + 1, numOfTransactionLeft, isHolding);
  let tradeProfit = 0;
  if (isHolding === 1) {
    tradeProfit =
      prices[i] + dp(prices, cache, i + 1, numOfTransactionLeft - 1, 0);
  } else {
    tradeProfit = dp(prices, cache, i + 1, numOfTransactionLeft, 1) - prices[i];
  }
  const max = Math.max(doNoThing, tradeProfit);

  cache[i][numOfTransactionLeft][isHolding] = max;
  return max;
};
