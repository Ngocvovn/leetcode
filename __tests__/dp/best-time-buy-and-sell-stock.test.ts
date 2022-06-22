import { findMaximumProfit } from '../../src/dp/best-time-buy-and-sell-stock';

describe('best time to buy and sell stock', () => {
  it('should find max profit', () => {
    const maxProfit = findMaximumProfit([3, 2, 6, 5, 0, 3], 2);
    expect(maxProfit).toEqual(7);
  });

  it.only('should find max profit 2', () => {
    const maxProfit = findMaximumProfit([3, 3, 5, 0, 0, 3, 1, 4], 2);
    expect(maxProfit).toEqual(6);
  });
});
