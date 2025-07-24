type Props = {
  handleClick(buttonIndex: number): void;
  array: string[];
};

export function CarouselButton({ handleClick, array }: Props) {
  const buttonList = array.map((_item, index) => (
    <button key={index} onClick={() => handleClick(index)}>
      {index}
    </button>
  ));

  return <div className="subDiv">{buttonList}</div>;
}
