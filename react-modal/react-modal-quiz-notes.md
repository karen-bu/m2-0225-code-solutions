# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  The `<dialog>` element is used to bring up a modal (blocks interaction with main app) or non-modal (does not block interaction with main app) component that a user is meant to interact with, like a textbox, alert, inspector, etc.

- How do you show and hide a modal dialog?
  You show and hide a modal dialogue with `.showModal()`. You can close it with `.close()`.

- How do you manipulate child components in React? Why will that not work for the `<dialog>` element?

- How do you call the dialog element's functions in React?

- How can you render nested components or JSX elements in React?
  You can render nested components or JSX elements in React by passing it as a prop `{ children }` to the parent component. You can then use `{ children }` like you would any other prop.
