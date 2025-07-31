import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

type PrevButtonProps = {
  prevClick: () => void;
};

export function PrevButton({ prevClick }: PrevButtonProps) {
  return (
    <div>
      <MdOutlineKeyboardArrowLeft
        onClick={prevClick}
        className="carousel-button"
      />
    </div>
  );
}
