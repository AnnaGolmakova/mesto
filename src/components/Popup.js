/**
 * Popup
 * @constructor
 * @param {string} selector - Selector for an html element.
 */

class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._closeButton = this._popupElement.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    this._popupElement.setAttribute('aria-hidden', 'false');
    window.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.setAttribute('aria-hidden', 'true');
    this._popupElement.classList.remove("popup_opened");
    window.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close()
      }
    });
    this._closeButton.addEventListener('click', (evt) => {
      this.close()
    });
  }
}

export default Popup;
