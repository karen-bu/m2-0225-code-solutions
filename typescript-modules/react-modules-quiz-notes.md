# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?
  Modules are a collection of code in an external file that performs a specific task or function. They are helpful to allow the devleoper to better organize their code.

- What is the difference between named and default imports?
  The difference between named and default imports is that a named import is named in the file it is created in, and must be imported with that exact name in a different file. A default import is not named in the file it is created in, and the name is assigned upon importing.

Named imports are imported with `import`, then curly brackets `{ }` containing the exact name of the module. Default imports are imported with `import` and then assigned a name, without use of curly brackets.

- What is the difference between named and default exports?
  The difference between named and default exports is that a file can have multiple named exports (as their names are unique), but a file can only have one default export (as the name is not unique). Default exports are exported with `export default function` whereas named exports are exported simply with `export function`.
