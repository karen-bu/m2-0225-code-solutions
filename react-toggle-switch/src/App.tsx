import { useState } from 'react';
import './App.css';
import { Toggle } from './Toggle';

const toggleObject = [
  {
    toggleClass: 'toggle-class-1',
    switchClass: 'switch-class-1',
    onOffText: 'OFF',
  },
  {
    toggleClass: 'toggle-class-2',
    switchClass: 'switch-class-2',
    onOffText: 'ON',
  },
];

function App() {
  const [index, setIndex] = useState(0);

  function handleToggleClick() {
    if (index === 0) {
      setIndex(index + 1);
    }
    if (index === 1) {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <div>
        <h1>🟢 React Toggle Switch 🟢</h1>
      </div>
      <div>
        <Toggle
          onToggleClick={handleToggleClick}
          toggleState={toggleObject[index].toggleClass}
          switchState={toggleObject[index].switchClass}
          textState={toggleObject[index].onOffText}
        />
      </div>
    </>
  );
}

export default App;
