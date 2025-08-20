# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  The SQL `CRUD` operations are `create` (insert), `read` (select), `update` (update), and `delete` (delete).

- How do you add a row to a SQL table?
  You add a row to a SQL table with `insert into`, the name of the table you wish to insert into, and all the attributes for that row wrapped in parenthesis, with each attribute wrapped in double quotes and separated by commas. Then use `values` to define the values.

- How do you add multiple rows to a SQL table at once?
  You can add multiple rows to an SQL table at once by wrapping each row in `values` you want to insert in parenthesis `()` and separating each row with a comma `,`.

- How do you update rows in a database table?
  You can update rows in a database table with an `update` statement and `set` with an attribute and the value of the attribute you want to (re)set. You might also want to use a `where` clause to only target specific rows, or else you will update the entire table.

- How do you delete rows from a database table?
  You can delete rows form a database table with a `delete` statement, `from`, and the name of the table you want to delete from.

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  It is important use a `where` clause to only target specific rows, or else you may delete the entire table, which is an action you cannot easily undo!

- How do you accidentally delete or update all rows in a table?
  You can accidentally delete or update all rows in a table if you are not careful and forget a `where` clause.

- How do you get back the modified row without a separate `select` statement?
  You can get back the modified row withou a separate `select` statement by having a `returning *` statement at the end of your query.

- Why did you get an error when trying to delete certain films?
  You get an error trying to delete certain films because it violates the foreign key constraint. There are some attributes from the row you are trying to delete that are still being used elsewhere.
