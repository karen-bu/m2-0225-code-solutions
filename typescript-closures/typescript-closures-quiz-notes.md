# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  In JavaScript, scope is determined when you start the program. There may be local context (functions, etc.) to look at as well. While running the code, if JavaScript encounters a function, it will first look at the local context, and failing to find anything in the local context that will allow the code to run, then look at the global context.

- What allows JavaScript functions to "remember" variables from their surroundings?
  A closure allows a JavaScript function to remember variables from their surroundings.

- What values does a closure contain?
  A closure contains all the variables that were in scope at the time of the creation of the function, including the values of these variables.

- When is a closure created?
  A closure is created when a function is declared.

- How can you tell if a function will be created with a closure?
  You can tell if a function will be created with a closure when it is created and nested inside another function, or returned from another function.

- In React, what is one important case where you need to know if a closure was created?
  In React, you need to know if a closure was created or not in order to use `useEffect`.
