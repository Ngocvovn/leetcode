import { findMaxProfitWith1Transaction } from '../../src/dp/best-time-to-buy-sell-stock-with-1-transaction';

describe('best time to buy and sell stock with 1 transaction', () => {
  it('should find the best time to buy and sell stock with 1 transaction', () => {
    const min = findMaxProfitWith1Transaction([7, 1, 5, 3, 6, 4]);
    expect(min).toBe(5);
  });
});
