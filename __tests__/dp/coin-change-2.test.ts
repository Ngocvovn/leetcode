import { findTotalOfCombinations } from '../../src/dp/coin-change-2';

describe('find  the number of combinations that make up the amount', () => {
  it('should find  the number of combinations that make up the amount', () => {
    const min = findTotalOfCombinations([1, 5], 12);
    expect(min).toBe(3);
  });

  it.only('should find  the number of combinations that make up the amount 2', () => {
    const min = findTotalOfCombinations([1, 2, 5], 5);
    expect(min).toBe(4);
  });
});
