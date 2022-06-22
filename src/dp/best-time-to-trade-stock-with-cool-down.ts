/**
 * You are given an integer array prices where prices[i]
 * is the price of a given stock on the ith day, and an integer k.
 * Find the maximum profit you can achieve. You may complete at most k transactions.
 * @param prices
 * @param k
 * @returns
 */
export const findMaximumProfit = (prices: number[]): number => {
  const cache = Array.from({ length: prices.length }).map(() =>
    Array.from({ length: 2 }).map(() => []),
  );
  return dp(prices, cache, 0, 0, 0);
};

/**
 * Idea is you can do nothing on a day or buy or sell depend on if you already bought stock or not
 */
const dp = (
  prices: number[],
  cache: number[][][],
  i: number,
  isHolding: 0 | 1,
  isCoolDown: 0 | 1,
): number => {
  if (i === prices.length) {
    return 0;
  }

  if (cache[i][isHolding][isCoolDown] !== undefined) {
    return cache[i][isHolding][isCoolDown];
  }
  const doNoThing = dp(prices, cache, i + 1, isHolding, 0);

  if (isCoolDown === 1) {
    cache[i][isHolding][isCoolDown] = doNoThing;
    return doNoThing;
  }

  let tradeProfit = 0;
  if (isHolding === 1) {
    tradeProfit = prices[i] + dp(prices, cache, i + 1, 0, 1);
  } else {
    tradeProfit = dp(prices, cache, i + 1, 1, 0) - prices[i];
  }
  const max = Math.max(doNoThing, tradeProfit);

  cache[i][isHolding][isCoolDown] = max;
  return max;
};
