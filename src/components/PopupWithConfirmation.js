import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(selector, confirmCallback) {
    super(selector);
    this._confirmCallback = confirmCallback;
    this._confirmButton = this._popupElement.querySelector('.form__save-button');
    this.setEventListeners();
  }

  _handleConfirm(evt) {
    evt.preventDefault();
    this._confirmCallback();
    this.close();
  }

  _handleEnterClose(evt) {
    if (evt.key === 'Enter') {
      this._confirmCallback();
      this.close();
    }
  }

  setEventListeners() {
    this._confirmButton.addEventListener('click', (evt) => {
      this._handleConfirm(evt);
    });
    super.setEventListeners();
  }

  open() {
    window.addEventListener("keydown", this._handleEnterClose);
    super.open();
  }

  close() {
    window.removeEventListener("keydown", this._handleEnterClose);
    super.close();
  }

}

export default PopupWithConfirmation;
