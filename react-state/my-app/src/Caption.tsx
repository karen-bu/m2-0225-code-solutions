import { useState } from 'react';

type Props = {
  captions: string[];
};

export function Caption({ captions }: Props) {
  const [captionIndex, setCaptionIndex] = useState(0);

  function handleCaptionClick() {
    if (captionIndex >= captions.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }

  return <h3 onClick={handleCaptionClick}>{captions[captionIndex]}</h3>;
}
