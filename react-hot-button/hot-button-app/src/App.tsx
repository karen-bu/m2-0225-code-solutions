import { useState } from 'react';
import { Header } from './Header';
import { Button } from './Button';
import { Description } from './Description';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  let buttonClass = '';
  if (count >= 0 && count <= 3) {
    buttonClass = 'class-1';
  } else if (count > 3 && count <= 6) {
    buttonClass = 'class-2';
  } else if (count > 6 && count <= 9) {
    buttonClass = 'class-3';
  } else if (count > 9 && count <= 12) {
    buttonClass = 'class-4';
  } else if (count > 12 && count <= 15) {
    buttonClass = 'class-5';
  } else if (count > 15) {
    buttonClass = 'class-6';
  }

  return (
    <>
      <Header />
      <Button handleClick={handleButtonClick} buttonClass={buttonClass} />
      <Description count={count} />
    </>
  );
}

export default App;
