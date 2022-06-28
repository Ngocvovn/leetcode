import { countVowelsPermutation } from '../../src/dp/count-vowels-permutation';

describe('Count Vowels Permutation', () => {
  it('should return the count of possible combination', () => {
    expect(countVowelsPermutation(2)).toBe(10);
  });

  it('should return the count of possible combination 2', () => {
    expect(countVowelsPermutation(5)).toBe(68);
  });
});
