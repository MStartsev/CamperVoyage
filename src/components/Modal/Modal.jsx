import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import ModalAdvert from './ModalAdvert/ModalAdvert';
import sprite from 'icons/sprite.svg';
import css from './Modal.module.css';

const Modal = ({ children, advert, onClose }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleCloseOnOverlayClick = event => {
      if (event.target.classList.contains(css.overlay)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleCloseOnOverlayClick);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleCloseOnOverlayClick);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.close_button} onClick={onClose}>
          <svg className={css.modal_close_icon} width={32} height={32}>
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <div className={css.content}>{children}</div>
        <ModalAdvert advert={advert} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
