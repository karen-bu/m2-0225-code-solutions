import { useState } from 'react';
import { ForwardPrevButton } from './ForwardPrevButton';
import { CarouselButton } from './CarouselButton';

type Props = {
  animals: string[];
};

export function RotatingBanner({ animals }: Props) {
  const [index, setIndex] = useState(0);

  function handleClickPrev() {
    if (index >= 1) {
      setIndex(index - 1);
    } else if (index === 0) {
      setIndex(animals.length - 1);
    }
  }

  function handleClickNext() {
    if (index < animals.length - 1) {
      setIndex(index + 1);
    } else if (index === animals.length - 1) {
      setIndex(0);
    }
  }

  return (
    <div>
      <div>{animals[index]}</div>
      <div className="subdiv">
        <ForwardPrevButton handleClick={handleClickPrev} label="PREVIOUS" />
      </div>
      <CarouselButton
        handleClick={(buttonIndex) => setIndex(buttonIndex)}
        array={animals}
      />
      <div className="subdiv">
        <ForwardPrevButton handleClick={handleClickNext} label="NEXT" />
      </div>
    </div>
  );
}
