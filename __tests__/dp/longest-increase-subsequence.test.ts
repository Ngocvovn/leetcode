import { findLongestIncreasingSubsequence } from '../../src/dp/longest-increase-subsequence';

describe('longest increasing subsequence', () => {
  it('should return longest increasing subsequence', async () => {
    const result = findLongestIncreasingSubsequence([1, 3, 5, 4, 7]);
    expect(result).toBe(4);
  });

  it('should return longest increasing subsequence 2', async () => {
    const result = findLongestIncreasingSubsequence([
      1, 3, 6, 7, 9, 4, 10, 5, 6,
    ]);
    expect(result).toBe(6);
  });
});
