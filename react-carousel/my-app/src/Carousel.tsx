import Image from './App';
import { ForwardButton } from './ForwardButton';
import { PrevButton } from './PrevButton';
import { CarouselDots } from './CarouselDots';
import { CarouselImage } from './CarouselImage';
import './Carousel.css';
import { useState } from 'react';

type Image = {
  src: string;
  alt: string;
};

type CarouselProps = {
  carouselImages: Image[];
};

export function Carousel({ carouselImages }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickPrev() {
    if (currentIndex >= 1) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(carouselImages.length - 1);
    }
    console.log(currentIndex);
  }

  function handleClickForward() {
    if (currentIndex < carouselImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === carouselImages.length - 1) {
      setCurrentIndex(0);
    }
  }

  function autoScroll() {
    setTimeout(() => handleClickForward(), 3000);
    console.log(currentIndex);
  }

  function handleClickDots(currentIndex: number) {
    setCurrentIndex(currentIndex);
  }

  autoScroll();

  return (
    <div>
      <div>
        <h1>Jujutsu Kaisen Characters</h1>
      </div>
      <div className="content-container">
        <div className="column-33">
          <PrevButton prevClick={handleClickPrev} />
        </div>
        <div className="column-33">
          <CarouselImage
            imgSrc={carouselImages[currentIndex].src}
            imgAlt={carouselImages[currentIndex].alt}
          />
        </div>
        <div className="column-33">
          <ForwardButton forwardClick={handleClickForward} />
        </div>
      </div>
      <div className="dots-container">
        <CarouselDots
          carouselContent={carouselImages}
          current={currentIndex}
          dotClick={handleClickDots}
        />
      </div>
    </div>
  );
}
