import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type FowardButtonClick = {
  forwardClick: () => void;
};

export function ForwardButton({ forwardClick }: FowardButtonClick) {
  return (
    <div>
      <MdOutlineKeyboardArrowRight
        onClick={forwardClick}
        className="carousel-button"
      />
    </div>
  );
}
