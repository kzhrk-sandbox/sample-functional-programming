import Modal from './modules/Modal';

window.addEventListener(
  'DOMContentLoaded',
  () => {
    const modal = Modal({
      el: document.querySelector('.modal'),
      openButton: document.querySelector('.button'),
      closeButton: document.querySelector('.modal__close'),
      overlay: document.querySelector('.overlay')
    });

    window.addEventListener(
      'mousewheel',
      e => {
        if (modal.state.isShow) {
          e.preventDefault();
        }
      },
      {
        passive: false
      }
    );

    window.addEventListener(
      'touchmove',
      e => {
        if (modal.state.isShow) {
          e.preventDefault();
        }
      },
      {
        passive: false
      }
    );
  },
  false
);
