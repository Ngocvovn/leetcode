import { findAllPossibleFBT } from '../../src/dp/all-possible-full-binary-tree';

describe('all possible full binary tree', () => {
  it('should return all possible full binary tree', () => {
    const result = findAllPossibleFBT(3);
    expect(result.length).toBe(1);
  });
  it('should return all possible full binary tree', () => {
    const result = findAllPossibleFBT(7);
    expect(result.length).toBe(5);
  });
});
