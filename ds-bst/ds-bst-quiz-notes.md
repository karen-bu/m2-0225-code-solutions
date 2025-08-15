# ds-bst-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Binary Search Tree data structure.
  The Binary Search Tree structure holds data in an upside-down branching structure where each node at every level can have at most two children. The nodes are ordered so that every element in the left subtree of a node is less than the current node, and every element in the right subtree of a node is greater than the current node.

- What are some examples of when you would use a Binary Search Tree?
  You might want to hold data in a Binary Search Tree if you are going to be constantly checking it for largest or smallest values.

- How do you determine if an element is in a Binary Search Tree? What is its time complexity?
  You can determine if an element is in a Binary Search Tree with `find`. The time complexity is logarithmic-time, or O(1/n).

- How do you add an element into a Binary Search Tree? What is its time complexity?
  You can add an element into a Binary Search Tree with the `insert`. The time complexity is logarithmic-time, or O(1/n).

- How do you remove an element from a Binary Search Tree? What is its time complexity?
  You can remove an element from a Binary Search Tree with the `.deleteNode` method. The time complexity is logarithmic-time, or O(1/n).
