class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const findAllPossibleFBT = (n: number): Array<TreeNode | null> => {
  if (n % 2 === 0) {
    return [];
  }

  const cache = {};
  const allTrees = dp(n, cache);
  return allTrees.reduce((acc, tree) => {
    acc.push(convertToResult(tree));
    return acc;
  }, []);
};

const dp = (
  n: number,
  cache: { [key: number]: Array<TreeNode> },
): Array<TreeNode | null> => {
  if (n === 1) {
    return [new TreeNode(0, new TreeNode(null), new TreeNode(null))];
  }

  if (cache[n] !== undefined) {
    return cache[n];
  }

  const results = [];

  for (let i = 1; i < n; i += 2) {
    const left = dp(i, cache);
    const right = dp(n - i - 1, cache);
    for (let j = 0; j < left.length; j++) {
      for (let k = 0; k < right.length; k++) {
        const root = new TreeNode(0, left[j], right[k]);
        results.push(root);
      }
    }
  }
  cache[n] = results;
  return results;
};

const convertToResult = (root: TreeNode) => {
  const fifo = [root];
  const result = [];
  while (fifo.length > 0) {
    const node = fifo.shift();
    if (node) {
      fifo.push(node.left);
      fifo.push(node.right);
      result.push(node.val);
    }
  }
  // trimm all nulls
  const lastZeroIndex = result.lastIndexOf(0);
  return result.slice(0, lastZeroIndex + 1);
};
