class Popup {
  constructor(selector) {
    this.popupElement = document.querySelector(selector);
    this.closeButton = this.popupElement.querySelector('.popup__close');
    this.isOpened = false;
  }

  open() {
    this.isOpened = true;
    this.popupElement.classList.add('popup_opened');
    this.popupElement.setAttribute('aria-hidden', 'false');
    window.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.isOpened = false;
    this.popupElement.setAttribute('aria-hidden', 'true');
    this.popupElement.classList.remove("popup_opened");
    window.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this.popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
    });
    this.closeButton.addEventListener('click', (evt) => {
      this.close()
    });
  }
}

export default Popup;
