# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  Conventional HTTP methods for each of the CRUD operations are `POST` for Create, `GET` for Read, `PUT` for Update, and `DELETE` for Delete. The server is not required to implement these methods according to this convention, there may be unfriendly servers out there.

- What is Express middleware?
  Express middleware are functions that have access to the request object `req`, the response object `res`, and the next middleware function, which fulfill specific requested actions. When Express receives an HTTP request, it passes the request into the middlware array. The array will keep returning `next()` and passing the request on until it stops processing and reutnrs the response.

- What is Express middleware useful for?
  Express middleware is helpful for quickly and efficiently routing requests. You can route requests down specific paths and define multiple routes for a path.

- How do you mount a middleware with an Express application?
  You mount a middleware with an Express application by calling it in the `app.use` function and specifying the path for which the middleware function is invoked, and a callback function if there is one.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Express passes the request `req` object and the response `res` object to the middleware to manage the request/response lifecycle of the server.

- How do you specify and retrieve route parameters?
  You can specify and retrieve route parameters by adding them as an object in the `request.params` key.
