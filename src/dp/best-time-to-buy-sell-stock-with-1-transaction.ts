export const findMaxProfitWith1Transaction = (prices: number[]): number => {
  let currentProfit = -prices[0];
  let holdingAt = 0;
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[holdingAt]) {
      currentProfit = prices[i] - prices[holdingAt];
    } else {
      currentProfit = -prices[i];
      holdingAt = i;
    }

    maxProfit = Math.max(currentProfit, maxProfit);
  }
  return maxProfit;
};
