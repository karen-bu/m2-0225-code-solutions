type CarouselImageProps = {
  imgSrc: string;
  imgAlt: string;
};

export function CarouselImage({ imgSrc, imgAlt }: CarouselImageProps) {
  return <img src={imgSrc} alt={imgAlt} />;
}
