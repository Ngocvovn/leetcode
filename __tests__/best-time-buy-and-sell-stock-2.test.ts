import { findMaxProfit } from '../src/best-time-buy-and-sell-stock-2.js';

describe('find max profile', () => {
  it('should return max profit', () => {
    expect(findMaxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });
  it('should return max profit', () => {
    expect(findMaxProfit([5, 4, 3, 2, 1])).toBe(0);
  });
});
