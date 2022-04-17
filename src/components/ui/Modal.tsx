import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useModal } from '@/utils/hooks/modal.hook';

type Props = {
  children: React.ReactNode;
};

const ModalCloseButton = () => {
  const { handleHide } = useModal();

  return (
    <button
      className="absolute top-0 right-0 p-2 bg-gray-100 hover:bg-gray-300 font-semibold"
      onClick={handleHide}
    >
      Close
    </button>
  );
};

const ModalBody = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-full">
      {children}
    </div>
  );
};

const ModalHeader = ({ children }: Props) => {
  return (
    <div>
      <h3 className="font-bold text-lg">{children}</h3>
    </div>
  );
};

const ModalContent = ({ children }: Props) => {
  return <div className="h-full p-5">{children}</div>;
};

type ModalProps = {
  isVisible: boolean;
  onHide: () => void;
} & Props;

const Modal = ({ isVisible, onHide, children }: ModalProps) => {
  const closeOnEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape);

    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = 'unset';
    };
  }, [closeOnEscape, isVisible]);

  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="m-2 fixed z-20 left-0 top-0 right-0 bottom-0 bg-gray-200">
      {children}
    </div>,
    document.querySelector('#modal-root')!
  );
};

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.CloseButton = ModalCloseButton;

export default Modal;
