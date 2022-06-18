import { findMinimunNumberOfCoinsNeeded } from '../../src/dp/coin-change';

describe('find fewest number of coins needed for exchange', () => {
  it('should find fewest number of coins needed for exchange', () => {
    const min = findMinimunNumberOfCoinsNeeded([1, 2, 5], 11);
    expect(min).toBe(3);
  });

  it('should find fewest number of coins needed for exchange 2', () => {
    const min = findMinimunNumberOfCoinsNeeded([2], 3);
    expect(min).toBe(-1);
  });

  it('should find fewest number of coins needed for exchange 3', () => {
    const min = findMinimunNumberOfCoinsNeeded([186, 419, 83, 408], 6249);
    expect(min).toBe(20);
  });
});
