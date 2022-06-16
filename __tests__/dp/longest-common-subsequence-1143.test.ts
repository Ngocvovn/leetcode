import { longestCommonSubsequence } from '../../src/dp/longest-common-subsequence-1143';

describe('longest common subsequence', () => {
  it('find longest common subsequence', () => {
    const longest = longestCommonSubsequence('abcde', 'ace');
    expect(longest).toBe(3);
  });
});
