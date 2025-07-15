import './Button.css';

type ButtonProps = {
  handleClick: () => void;
  buttonClass: string;
};

export function Button({ buttonClass, handleClick }: ButtonProps) {
  return (
    <button className={buttonClass} onClick={handleClick}>
      Hot Button
    </button>
  );
}
