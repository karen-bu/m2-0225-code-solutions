import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          JSX is a JavaScript extension that allows developers to write code for
          dynamic DOM creation. This allows complex HTML structures, CSS styles,
          and attributes to be applied very quickly. The syntax for JSX is very
          similar to HTML, but the code is a lot easier to read and more
          organized.
        </p>
        <p>
          React uses JSX to render components as functions can return JSX
          markup. This can then be used to construct the DOM. In short, React
          will call the component function, that then converts to HTML and
          pushed to the DOM, which is then displayed by the browser.
        </p>
      </div>
    </>
  );
}

export default App;
