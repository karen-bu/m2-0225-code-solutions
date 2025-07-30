import './Stopwatch.css';
import { FaPlay, FaPause } from 'react-icons/fa';

type StopwatchProps = {
  playClick: () => void;
  pauseClick: () => void;
  stopwatchClick: () => void;
  time: number;
  isPlaying: NodeJS.Timeout | undefined;
};

export function Stopwatch({
  stopwatchClick,
  time,
  isPlaying,
  playClick,
  pauseClick,
}: StopwatchProps) {
  return (
    <div className="container">
      <div className="stopwatch" onClick={stopwatchClick}>
        <p>{time}</p>
      </div>
      {!isPlaying ? (
        <div className="button">
          <FaPlay className="play-button" onClick={playClick} />
        </div>
      ) : (
        <div className="button">
          <FaPause className="pause-button" onClick={pauseClick} />
        </div>
      )}
    </div>
  );
}
