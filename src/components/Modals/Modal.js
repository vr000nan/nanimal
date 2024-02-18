import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ children, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return isOpen ? ReactDOM.createPortal(
    <div className="modal--mask">
      <div className="modal-window">
        {children}
      </div>
    </div>,
    modalRootEl
  ) : null;
};

export default Modal;
