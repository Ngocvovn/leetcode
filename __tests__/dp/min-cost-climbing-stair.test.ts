import { minCostClimbingStairs } from '../../src/dp/min-cost-climbing-stair';

describe('min cost climbing stair', () => {
  it('calculate correct min cost to climb stair', () => {
    const max = minCostClimbingStairs([10, 15, 20]);
    expect(max).toBe(15);
  });
  it('calculate correct min cost to climb stair 2', () => {
    const max = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
    expect(max).toBe(6);
  });
});
