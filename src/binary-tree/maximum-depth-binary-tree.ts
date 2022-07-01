import TreeNode from './binary-tree-node';

export const findDepth = (root: TreeNode | null): number => {
  return findLevelOfNode(root, 0);
};

const findLevelOfNode = (node: TreeNode | null, level: number): number => {
  if (node === null) {
    return level;
  }
  return Math.max(
    findLevelOfNode(node.left, level + 1),
    findLevelOfNode(node.right, level + 1),
  );
};
