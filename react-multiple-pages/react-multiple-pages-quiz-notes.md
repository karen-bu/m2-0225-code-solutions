# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  The browser URL does not change when navigating through a Single Page App, unless you add routing. However, a user probably expects the URL to change as they navigate through the browser app, which may present UX issues as they hit the "back" button and leave the page entirely.

- What NPM package can be used to make navigating a React app behave as users expect?
  The npm package `React Router` can be used to make navigating a React app behave as users expect.

- Which React Router component(s) can be used to set up your app's navigation?
  `Route` and `Link` can be used to set up your app's navigation.

- How does React Router match the browser URL to one of your app's React components?
  React Router matches the browser URL to a React component using a colon `:` in the identifier portion of the path. It can then match the URL against fixed portions of the path and put teh "wildcard" portions into an object, then accessed in the `useParams` hook..

- What is the purpose of React Router's `Outlet` component?
  React Router's `Outlet` component is used in parent route elements to render child route elements, os nested UI can show up when child routes are rendered.

- What React component is used to statically navigate to another page? What HTML element does it render to?
  THe `Link` component is used to navigate to another page. It renders to an anchor `a` HTML element.

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  The `useParams` React Router hook is used to access route apth dynamic segments.

- What React Router hook is used to navigate programmatically?
  The `useNavigate` hook is used to navigate programmatically.
