import { findMaxMultiplication } from '../../src/dp/max-score-multiplication-1770';

describe('max score multiplication', () => {
  it('find max score multiplication', () => {
    const max = findMaxMultiplication(
      [-5, -3, -3, -2, 7, 1],
      [-10, -5, 3, 4, 6],
    );
    expect(max).toBe(102);
  });

  it('find max score multiplication 2', () => {
    const max = findMaxMultiplication([1, 2, 3], [3, 2, 1]);
    expect(max).toBe(14);
  });
});
