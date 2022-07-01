import BinaryTreeNode from '../../src/binary-tree/binary-tree-node';
import { findDepth } from '../../src/binary-tree/maximum-depth-binary-tree';

describe('it should return the maximum depth of a binary tree', () => {
  it('should return the maximum depth of a binary tree', () => {
    const depth = findDepth(new BinaryTreeNode(0, null, new BinaryTreeNode(1)));
    expect(depth).toBe(2);
  });
});
