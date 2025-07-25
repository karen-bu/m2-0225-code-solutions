type Props = {
  handleClick(buttonIndex: number): void;
  array: string[];
  current: number;
  buttonClass: string;
};

export function CarouselButton({ handleClick, array, current }: Props) {
  const buttonList = array.map((_item, buttonIndex) => (
    <button
      key={buttonIndex}
      className={
        current === buttonIndex ? 'carousel button active' : 'carousel button'
      }
      onClick={() => handleClick(buttonIndex)}>
      {buttonIndex}
    </button>
  ));

  return <div className="subDiv">{buttonList}</div>;
}
