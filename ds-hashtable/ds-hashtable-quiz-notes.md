# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.
  A Hash Table stores data as key/value pairs. The keys are stored in a list, and "hashed" so the key is reduced to a number between 0 and the size of the list, which is then used as an index in the buckets list to find the item.

- What are some examples of when you would use a Hash Table?
  You might use a Hash Table when storing people's usernames and passwords, so a password is not stored as-is and can be fetched easily based on the username.

- How do you read a key's value in a Hash Table? What is its time complexity?
  To read a key's value in a Hash Table you can use `read` for Map and `has` for Set. The time complexity is constant-time, or O(1).

- How do you add a key/value into a Hash Table? What is its time complexity?
  To read a key's value in a Hash Table you can use `add` for Map or Set. The time complexity is constant-time, or O(1).

- How do you update a key's value in a Hash Table? What is its time complexity?
  To read a key's value in a Hash Table by finding the value and assigning it a new value with `set`. The time complexity is constant-time, or O(1).

- How do you remove a key/value from a Hash Table? What is its time complexity?
  To read a key's value in a Hash Table you can use `delete` (for once key/value) or `clear` (for all the key/values) for Map or Set. The time complexity is constant-time, or O(1).
