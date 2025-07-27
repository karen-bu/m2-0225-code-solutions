import './App.css';
import { useState } from 'react';
import { Stopwatch } from './Stopwatch';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timerID, setTimerID] = useState<NodeJS.Timeout>();

  function startTimer() {
    setTimerID(setInterval(() => setSeconds((prev) => prev + 1), 1000));
  }

  function stopTimer() {
    clearInterval(timerID);
  }

  function resetTimer() {
    setSeconds(0);
    setTimerID(undefined);
  }

  return (
    <>
      <Stopwatch
        time={seconds}
        timerID={timerID}
        playClick={startTimer}
        pauseClick={stopTimer}
        stopwatchClick={resetTimer}
      />
    </>
  );
}

export default App;
