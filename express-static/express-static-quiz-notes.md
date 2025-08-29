# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  The purpose of Express Static middleware is to make it convenient to serve tstatic content - it lookst at request paths to see if a file is stored in a location on the server's file system, and if so, it sends the file as the HTTP response.

- What does `express.static()` return?
  `express.static()` returns static images from a specified root directory.

- What are several examples of static files?
  Several examples of static files are `.jpg` files, `.png` files, and `.tiff` files.

- What is a good way to serve application images using Express?
  A good way to serve application images using Express is to put them in a shared "public" directory, and using `express.static()` to return them using that public director as the specified root directory.
