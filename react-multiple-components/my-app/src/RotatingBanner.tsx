import { useState } from 'react';
import { ForwardPrevButton } from './ForwardPrevButton';
import { CarouselButton } from './CarouselButton';
import './RotatingBanner.css';

type Props = {
  animals: string[];
};

export function RotatingBanner({ animals }: Props) {
  const [index, setIndex] = useState(0);
  const [carouselButtonClass, setButtonClass] = useState('carousel button');

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

  function handleCarouselClick(index: number) {
    setIndex(index);
    setButtonClass('carousel button active');
  }

  return (
    <div>
      <div>
        <p>{animals[index]}</p>
      </div>
      <div className="subdiv">
        <ForwardPrevButton handleClick={handleClickPrev} label="PREVIOUS" />
      </div>
      <CarouselButton
        current={index}
        handleClick={(index) => handleCarouselClick(index)}
        array={animals}
        buttonClass={carouselButtonClass}
      />
      <div className="subdiv">
        <ForwardPrevButton handleClick={handleClickNext} label="NEXT" />
      </div>
    </div>
  );
}
