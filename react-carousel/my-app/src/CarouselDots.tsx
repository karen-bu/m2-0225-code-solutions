import { GoDotFill, GoDot } from 'react-icons/go';
import Image from './App';

type Image = {
  src: string;
  alt: string;
};

type CarouselDotsProps = {
  carouselContent: Image[];
  current: number;
  dotClick(index: number): void;
};

export function CarouselDots({
  carouselContent,
  current,
  dotClick,
}: CarouselDotsProps) {
  const carouselDotList = carouselContent.map((_, dotIndex) =>
    current === dotIndex ? (
      <GoDotFill
        className="carousel-dot"
        key={dotIndex}
        onClick={() => dotClick(dotIndex)}
      />
    ) : (
      <GoDot
        className="carousel-dot"
        key={dotIndex}
        onClick={() => dotClick(dotIndex)}
      />
    )
  );

  return <div>{carouselDotList}</div>;
}
