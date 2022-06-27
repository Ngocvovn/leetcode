import { paintHouseForMinCost } from '../../src/dp/paint-house-for-min-cost';

describe('Paint House for Min Cost', () => {
  it('should return the min cost', () => {
    const costs = [
      [17, 2, 17],
      [16, 16, 5],
      [14, 3, 19],
    ];
    expect(paintHouseForMinCost(costs)).toBe(10);
  });

  it('should return the min cost 2', () => {
    const costs = [[7, 6, 2]];
    expect(paintHouseForMinCost(costs)).toBe(2);
  });
});
