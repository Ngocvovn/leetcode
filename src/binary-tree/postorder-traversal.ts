import TreeNode from './binary-tree-node';

export const postorderTraversal = (root: TreeNode | null): number[] => {
  const result = [];
  travelRecursiveLy(root, result);
  return result;
};

const travelRecursiveLy = (node: TreeNode, result: number[]) => {
  if (node && node.val !== null) {
    if (node.left) {
      travelRecursiveLy(node.left, result);
    }
    if (node.right) {
      travelRecursiveLy(node.right, result);
    }
    result.push(node.val);
  }
};
