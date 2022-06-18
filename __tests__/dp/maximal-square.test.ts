import { maximalSquare } from '../../src/dp/maximal-square';

describe('maximal square', () => {
  it('should find max square', () => {
    const max = maximalSquare([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ]);
    expect(max).toBe(4);
  });
});
