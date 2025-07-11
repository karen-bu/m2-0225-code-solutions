# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  A `hook` in Ract is a special type of function that allows components to have access to the `state` variable, among other React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The `Rules of Hooks` are:

1. Hooks must start with `use`followed by an uppercase letter
2. A hook can only be called by React components and other hooks.
3. All hooks must be called at the top level of a component. They cannot be called inside conditionals, loops, or other nested functions. They must always be called in the same order.
4. If a function follows a hook naming convention, the function is a hook and must follow the Rules of Hooks.

- What is the purpose of state in React?
  The purpose of `state` in React is to store desired data so that it does not disappear upon new renders of components, enabling the stored data to be re-used. `state` can also be used to force a component to re-render if the value is changed.

- Why can't we just maintain state in a local variable?
  We can't just maintain state in a local variable because that data does not persist between calls. Every time a component gets called, or is re-rendered, the data in the local variable will disappears as that local variable is essentially reset.

- What two actions happen when you call a `state setter` function?
  When you call a `state setter` function, the `state` variable is assigned a value, and then that value is updated with the setter part of the function.

- When does the local `state variable` get updated with the new value?
  The local `state variable` gets updated with the new value only when the component is re-rendered.
