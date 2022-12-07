class Node {
  isFolder: boolean;
  size: number;
  children: Node[];
  parent: Node;
  name: string;
  constructor(isFolder: boolean, size: number, name: string) {
    this.isFolder = isFolder;
    this.name = name;
    this.children = [];
    this.size = size;
  }
  addChild(node: Node) {
    if (this.children.find((c) => c.name === node.name)) return;
    this.children.push(node);
    node.parent = this;
  }

  findSizeOfDirectory(sizes: number[]): number {
    let sum = 0;
    for (const child of this.children) {
      if (child.isFolder) {
        const childSize = child.findSizeOfDirectory(sizes);
        sum += childSize;
      } else {
        sum += child.size;
      }
    }
    sizes.push(sum);
    return sum;
  }
}

const buildTree = (input: string): Node => {
  const lines = input.split('\n');
  const root = new Node(true, 0, '/');
  let currentNode = root;
  for (let i = 1; i < lines.length; i++) {
    const args = lines[i].split(' ');
    if (args[0] === 'dir') {
      currentNode.addChild(new Node(true, 0, args[1]));
    } else if (args[1] === 'cd') {
      if (args[2] === '..') {
        currentNode = currentNode.parent;
      } else {
        currentNode = currentNode.children.find(
          (child) => child.name === args[2],
        );
      }
    } else if (args[1] === 'ls') {
      continue;
    } else {
      currentNode.addChild(new Node(false, parseInt(args[0]), args[1]));
    }
  }
  return root;
};

export const solution = (input: string): number => {
  const root = buildTree(input);
  const sizes = [];
  root.findSizeOfDirectory(sizes);
  return sizes
    .filter((s) => s <= MAX_SIZE)
    .reduce((acc, value) => acc + value, 0);
};

export const solution2 = (input: string): number => {
  const root = buildTree(input);
  const sizes = [];
  const currentUnusedSpace = SYSTEM_SPACE - root.findSizeOfDirectory(sizes);

  let minDir = currentUnusedSpace;
  for (let i = 0; i < sizes.length; i++) {
    if (
      sizes[i] + currentUnusedSpace >= LEAST_UNUSED_SPACE &&
      minDir > sizes[i]
    )
      minDir = sizes[i];
  }
  return minDir;
};

const MAX_SIZE = 100000;
const SYSTEM_SPACE = 70000000;
const LEAST_UNUSED_SPACE = 30000000;
