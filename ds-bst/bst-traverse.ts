import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  if (!node) return [];

  const leftArray = traverseRecursive(node?.left);
  const nodeArray = [node.value];
  const rightArray = traverseRecursive(node?.right);

  const traverseArray = [...leftArray, ...nodeArray, ...rightArray];

  return traverseArray;
}
