import { verifyPathSum } from '../../src/binary-tree/path-sum';

describe('it should return path sum check of a binary tree', () => {
  it('should return path sum check of a binary tree', () => {
    const isPathSum = verifyPathSum(null, 0);
    expect(isPathSum).toBe(true);
  });
});
