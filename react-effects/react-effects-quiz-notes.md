# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  A component is mounted to the DOM when it is used in the code that builds the (virtual) DOM tree.

- What is a React Effect?
  A React Effect is a piece of code that lets you run some code after a component renders, or when something else happens.

- When should you use an Effect and when should you not use an Effect?
  You should use an effect when you need to synchronize with an external system (such as browser APIs, widgets, a network, etc.). You should not use them if you don't need to use anything external in your code, such as setting state based on another state.

- When do Effects run?
  Effects run after every commit (i.e. modification to the DOM).

- What function is used to declare an Effect?
  The function used to declare an Effect is a hook called `useEffect`.

- What are Effect dependencies and how do you declare them?
  An Effect dependency controls when an Effect renders, in order to make sure an Effect only re-runs when needed instead of after every render. An example would be only firing the Effect if a state changes.

- Why would you want to clean up from an Effect?
  You might want to clean up from an effect to stop, undo, or revert whatever the Effect does, such as disconnecting a connect, unsubscribing a subscribe, or canceling a fetch.

- How do you clean up from an Effect?
  You clean up from an Effect by passing a cleanup function to the `useEffect` hook.

- When does the cleanup function run?
  The cleanup function runs after commit (i.e. after the component is added to the DOM or removed from the DOM). It also runs after every re-render with changed dependencies.
