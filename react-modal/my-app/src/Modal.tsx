import { useRef, useEffect, type ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      modal.current?.close();
    } else {
      modal.current?.showModal();
    }
  }, [isOpen]);

  return (
    <dialog ref={modal} onClose={onClose}>
      {children}
    </dialog>
  );
}
