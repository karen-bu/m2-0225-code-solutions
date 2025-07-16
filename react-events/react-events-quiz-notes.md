# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  An `event` in React, just like in JavaScript, is an action or occurrence (an 'interesting change') that happens to a certain element.

- What is an "event handler"? Which component declares the handler?
  An `event handler` is a function that does something when an `event` happens. You can declare an event handler on one of several components: a Button for `onClick`, a Form for `onSubmit`, etc.

- How do you pass an event handler to a React component?
  You can pass an event handler to a React component by defining it in the component function.

- What is the naming convention for event handlers?
  The naming convention for event handlers is that they start with `on` and then usually the name of that event (a click, submit, hover, etc.)

- What is an "event handler prop"? Which component declares the prop?
  An `event handler prop` is a custom event handler. The child component declares the event handler prop.

- What are some custom event handler props a component may wish to define?
  Some common custom event handler props a component may wish to define are `onClick`, `onSubmit`, `onHover`

- What is the naming convention for custom event handler props?
  The naming convention for custom event handler props is to name it `handle` and then the event it is meant to handle, such as `handleClick` to handle an `onClick` event.
