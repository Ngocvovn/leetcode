import { minimizeSumOfTwoArrays } from '../src/minimum-sum-of-two-arrays';

describe('minimum sum of two arrays', () => {
  it('should return minimum sum of two arrays', async () => {
    const result = minimizeSumOfTwoArrays([2, 1, 4, 5, 7], [3, 2, 4, 8, 6]);
    expect(result).toBe(65);
  });
});
