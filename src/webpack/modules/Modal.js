export default class Modal {
  constructor({ el, openButton, closeButton, overlay }) {
    this.el = el;
    this.openButton = openButton;
    this.closeButton = closeButton;
    this.overlay = overlay;
    this.isShow = false;
    this.className = {
      show: 'is-show'
    };

    this.addEvent();
  }

  addEvent() {
    this.openButton.addEventListener(
      'click',
      () => {
        this.show();
      },
      false
    );

    this.closeButton.addEventListener(
      'click',
      () => {
        this.hide();
      },
      false
    );
  }

  show() {
    this.isShow = true;
    this.overlay.classList.add(this.className.show);
  }

  hide() {
    this.isShow = false;
    this.overlay.classList.remove(this.className.show);
  }
}
