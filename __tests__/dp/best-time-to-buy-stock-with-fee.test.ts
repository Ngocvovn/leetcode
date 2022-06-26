import { findMaxProfitWithTransactionFee } from '../../src/dp/best-time-to-buy-stock-with-fee';

describe('find best time to buy and sell stock with fee', () => {
  it('should find the best time to buy and sell stock with fee', () => {
    const max = findMaxProfitWithTransactionFee([1, 3, 2, 8, 4, 9], 2);
    expect(max).toBe(8);
  });
});
