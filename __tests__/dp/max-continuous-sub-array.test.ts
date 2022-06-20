import { findMaxContinuousSubArray } from '../../src/dp/max-continuous-sub-array';

describe('find max continuous sub array', () => {
  it('should find max continuous sub array', () => {
    const max = findMaxContinuousSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(max).toBe(6);
  });
});
