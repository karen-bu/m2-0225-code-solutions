import './App.css';
import { useState } from 'react';
import { Stopwatch } from './Stopwatch';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timerID, setTimerID] = useState<NodeJS.Timeout>();

  const isPlaying = timerID;

  function startTimer() {
    setTimerID(setInterval(() => setSeconds((prev) => prev + 1), 1000));
  }

  function stopTimer() {
    clearInterval(timerID);
    setTimerID(undefined);
  }

  function resetTimer() {
    if (isPlaying) return;
    setSeconds(0);
    setTimerID(undefined);
  }

  return (
    <>
      <Stopwatch
        time={seconds}
        isPlaying={isPlaying}
        playClick={startTimer}
        pauseClick={stopTimer}
        stopwatchClick={resetTimer}
      />
    </>
  );
}

export default App;
