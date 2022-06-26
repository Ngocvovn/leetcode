export const findMaxProfitWithTransactionFee = (
  prices: number[],
  fee: number,
): number => {
  const cache: number[][] = Array.from({ length: prices.length }).map(() => []);
  const max = dp(prices, cache, 0, 0, fee);
  return max;
};

/**
 * Idea is you can do nothing on a day or buy or sell depend on if you already bought stock or not
 */
const dp = (
  prices: number[],
  cache: number[][],
  i: number,
  isHolding: 0 | 1,
  fee: number,
): number => {
  if (i === prices.length) {
    return 0;
  }

  if (cache[i][isHolding] !== undefined) {
    return cache[i][isHolding];
  }
  const doNoThing = dp(prices, cache, i + 1, isHolding, fee);

  let tradeProfit = 0;
  if (isHolding === 1) {
    tradeProfit = prices[i] + dp(prices, cache, i + 1, 0, fee) - fee;
  } else {
    tradeProfit = dp(prices, cache, i + 1, 1, fee) - prices[i];
  }
  const max = Math.max(doNoThing, tradeProfit);

  cache[i][isHolding] = max;
  return max;
};
