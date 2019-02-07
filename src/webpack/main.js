import Modal from './modules/modal';

window.addEventListener(
  'DOMContentLoaded',
  () => {
    const modal = new Modal({
      el: document.querySelector('.modal'),
      openButton: document.querySelector('.button'),
      closeButton: document.querySelector('.modal__close'),
      overlay: document.querySelector('.overlay')
    });

    window.addEventListener(
      'mousewheel',
      e => {
        if (modal.isShow) {
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
        if (modal.isShow) {
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
