export default function Modal({
  el, // eslint-disable-line no-unused-vars
  openButton,
  closeButton,
  overlay
}) {
  const state = {
    isShow: false
  };
  const className = {
    show: 'is-show'
  };

  const init = () => {
    addEvent();
  };

  const addEvent = () => {
    openButton.addEventListener('click', show, false);
    closeButton.addEventListener('click', hide, false);
  };

  const show = () => {
    state.isShow = true;
    overlay.classList.add(className.show);
  };

  const hide = () => {
    state.isShow = false;
    overlay.classList.remove(className.show);
  };

  init();

  return {
    ...arguments[0],
    state,
    show,
    hide
  };
}
