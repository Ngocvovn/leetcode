import { findMaximumProfit } from '../../src/dp/best-time-to-trade-stock-with-cool-down';

describe('best time to buy and sell stock with cool down', () => {
  it('should find max profit', () => {
    const maxProfit = findMaximumProfit([1, 2, 3, 0, 2]);
    expect(maxProfit).toEqual(3);
  });

  it('should find max profit 2', () => {
    const maxProfit = findMaximumProfit([1]);
    expect(maxProfit).toEqual(0);
  });

  it('should find max profit 3', () => {
    const maxProfit = findMaximumProfit([1, 2, 7, 0, 2]);
    expect(maxProfit).toEqual(6);
  });
});
