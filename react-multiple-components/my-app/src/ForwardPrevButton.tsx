type Props = {
  handleClick: () => void;
  label: string;
};

export function ForwardPrevButton({ handleClick, label }: Props) {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
}
