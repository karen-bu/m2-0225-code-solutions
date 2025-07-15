type buttonProp = {
  label: string;
  handleButtonClick: () => void;
};

export function Button({ label, handleButtonClick }: buttonProp) {
  return <button onClick={handleButtonClick}>{label}</button>;
}
