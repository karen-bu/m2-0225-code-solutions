import { createPortal } from 'react-dom';

type PopupProps = {
  popupState: boolean;
  positionTo: HTMLElement | null;
};

export function Popup({ popupState, positionTo }: PopupProps) {
  const buttonPosition = positionTo?.getBoundingClientRect();
  const top = buttonPosition ? buttonPosition.bottom : '10%';
  const left = buttonPosition ? buttonPosition.left : '2.125%';

  const popupList = createPortal(
    popupState && (
      <div style={{ top, left, position: 'absolute' }}>
        <ul className="popup">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
    document.body
  );

  return popupList;
}
