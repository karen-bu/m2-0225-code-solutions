import './Toggle.css';

type ToggleProps = {
  onToggleClick: () => void;
  toggleState: string;
  switchState: string;
  textState: string;
};

export function Toggle({
  onToggleClick,
  toggleState,
  switchState,
  textState,
}: ToggleProps) {
  return (
    <div className="container">
      <div className={toggleState} onClick={onToggleClick}>
        <div className={switchState}></div>
      </div>
      <div className="on-off-text">
        <p>{textState}</p>
      </div>
    </div>
  );
}
