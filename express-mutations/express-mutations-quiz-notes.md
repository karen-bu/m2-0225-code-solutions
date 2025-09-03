# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  The significance of an HTTP request's method is that it outlines what happens to the database and how they will mutate data in that database, if applicable - generally actions are one of the four CRUD actions.

- What is the significance of an HTTP response's status?
  The significance of an HTTP response's status is that it provides a plain English summary of what happened as a result of the request you sent, whether it is good (like 200/201 errors), bad (like 400 and 500 errors), or just confirming an action took place (like a 204 error).

- What does the express.json() middleware do and when would you need it?
  The `express.json()` middleware parses incoming JSON requests, you would need it in most cases when you are fetching data from a database.
