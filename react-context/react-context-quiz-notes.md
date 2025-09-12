# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  React "context" allows data to be managed by one component but then easily shared with other components. It prevents issues with "prop drilling" where data has to be passed so much that it makes code messy and hard to work with.

- What values can be stored in context?
  Any values can be stored in cotnext.

- How do you create context and make it available to the components?
  You can create context and make it available to the components with the `useContext` hook and having a provider, `MyContext.Provider`.

- How do you access the context values?
  You can access context values by destructuring it from `useContext` like how you would destructure any other values from other hooks.

- When would you use context? (in addition to the best answer: "rarely")
  You can use context for situations like user login, or setting dark/light themes on an application.
