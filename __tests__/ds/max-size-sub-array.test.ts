import { maxSubArrayLen } from '../../src/ds/max-size-sub-array';

describe('maximum size subarray sum equals k', () => {
  it('should return the length of the longest subarray', () => {
    const nums = [1, -1, 5, -2, 3];
    const k = 3;
    expect(maxSubArrayLen(nums, k)).toBe(4);
  });
});
