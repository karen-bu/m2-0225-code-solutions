# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  The purpose of the `pg` NPM package is to connect Node.js (and by extension, Express) with PostgreSQL, allowing Express to programmatically access databases.

- How do you tell `pg` which database to connect to?
  You can tell `pg` which database to connect to when you create your database connection object (a pool) and then note the database name at the end of the connection string.

- How do you send SQL to PostgreSQL from your Express server?
  You can send SQL to PostgreSQL from your express server using middleware, via a try/catch block.

- How do you access the rows that get returned from the SQL query?
  You can access the rows that get returned from the SQL query by assigning it to a variable and having the middleware send the rows as part of the `result` handler.

- What must you always remember to put around your asynchronous route handlers? Why?
  You must always remember to put brackets around asynchronous route handlers so you can create a try/catch block to handle both the request and the error if the request doesn't work.

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  SQL Injection Attack is a way that others can possibly maliciously gain access and modify or even delete your SQL tables by taking advantage of dynamic values in SQL and injecting their own. You can avoid it by never inserting values into SQL using a template literal, and using escape characters instead (in the case of pg, parameterized queries using a $).
