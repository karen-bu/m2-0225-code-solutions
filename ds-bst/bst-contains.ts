import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns true iff `value` is in the BST.
 */
export function contains(bst: BinarySearchTree, value: number): boolean {
  return containsRecursive(bst.root, value);
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  if (!node) return false;

  if (node.value === value) {
    return true;
  } else if (containsRecursive(node.right, value)) {
    return true;
  } else if (containsRecursive(node.left, value)) {
    return true;
  } else return false;
}
