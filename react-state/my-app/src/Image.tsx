import './Image.css';

import { useState } from 'react';

type Props = {
  srcs: string[];
};
export function Image({ srcs }: Props) {
  const [srcIndex, setSRCIndex] = useState(0);

  function handleImageClick() {
    if (srcIndex >= srcs.length - 1) {
      setSRCIndex(0);
    } else {
      setSRCIndex(srcIndex + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleImageClick}
          src={srcs[srcIndex]}
          alt={srcs[srcIndex]}
        />
      </div>
    </div>
  );
}
