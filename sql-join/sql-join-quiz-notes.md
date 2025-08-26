# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  A foreign key is a shared column between tables that can be used to join the two tables together.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  You can join two SQL tables using `join` and `using`, or by using `join` and `on` (where the tables and attributes you want to join by are specified).

- How do you temporarily rename columns or tables in a SQL statement?
  You can temporarily rename columns or tables in an SQL statement by using aliases. You can create an alias using `as` and renaming the column or table name with `as` and the alias name.

- How do you create a one-to-many relationship between two tables?
  You can create a one-to-many relationship between two tables by using a foreign key in one table pointing to a primary key in another table.

- How do you create a many-to-many relationship between two tables?
  You create a many-to-many relationship between two tables using a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table, called a `join table`.
