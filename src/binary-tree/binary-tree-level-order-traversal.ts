import TreeNode from './binary-tree-node';

export const levelOrderTraversal = (root: TreeNode | null): number[][] => {
  const result: number[][] = [];
  travelRecursiveLy(root, 0, result);
  return result;
};

const travelRecursiveLy = (
  node: TreeNode,
  level: number,
  result: number[][],
) => {
  if (node && node.val !== null) {
    if (result[level] === undefined) {
      result[level] = [];
    }
    result[level].push(node.val);
    if (node.left) {
      travelRecursiveLy(node.left, level + 1, result);
    }
    if (node.right) {
      travelRecursiveLy(node.right, level + 1, result);
    }
  }
};
