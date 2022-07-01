import TreeNode from './binary-tree-node';

export const verifyPathSum = (
  root: TreeNode | null,
  target: number,
): boolean => {
  if (root === null) {
    return false;
  }
  return dp(root, 0, target);
};

const dp = (node: TreeNode | null, sum: number, target: number): boolean => {
  if (node && node.left === null && node.right === null) {
    if (sum + node.val === target) {
      return true;
    }
    return false;
  }

  if (node === null) {
    return false;
  }

  return (
    dp(node.left, sum + node.val, target) ||
    dp(node.right, sum + node.val, target)
  );
};
