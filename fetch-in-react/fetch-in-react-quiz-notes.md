# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  The JavaScript function `fetch` can be used in React to make HTTP requests to a server.

- What two things need to be done to properly handle HTTP request errors? Why?
  The two things to handle HTTP request errors is one - check for a 500 server error in case something has gone wrong with the database, and two, check for a 404 error in case the database is okay, but the specific piece of data cannot be found.

- How can `useEffect` be used to load data for a component?
  `useEffect` can be used to load data for a component by setting the state for loading to `true` or `false` depending on if data is done loading or not. If loading state is `false` then you can display the page, as it will have all the data it needs to populate the page corectly.

- How do you use `useEffect` to load component data just once when the component mounts?
  You can use `useEffect` to load component data just once when the component mounts by using a state setter function.

- How do you use `useEffect` to load component data every time the data key changes?
  You can use `useEffect` to load component data every time the data key changes with the dependency array.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  In a large-scale production app, third-party data management libraries are better alternatives for loading and managing backend data. Some examples are React Query and Vercel SWR.
