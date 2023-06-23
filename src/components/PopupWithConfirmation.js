import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(selector = '.popup_confirm') {
    super(selector);
    this._confirmButton = this._popupElement.querySelector('.form__save-button');
    this.setEventListeners();
  }

  _handleConfirm(evt) {
    evt.preventDefault();
    this._confirmCallback();
    this.close(false);
  }

  _handleEnterClose(evt) {
    if (evt.key === 'Enter') {
      this._confirmCallback();
      this.close(false);
    }
  }

  setEventListeners() {
    this._confirmButton.addEventListener('click', (evt) => {
      this._handleConfirm(evt);
    });
    super.setEventListeners();
  }

  open(confirmCallback, cancelCallback) {
    this._confirmCallback = confirmCallback;
    this._cancelCallback = cancelCallback;
    window.addEventListener("keydown", this._handleEnterClose.bind(this));
    super.open();
  }

  close(shouldRunCallback = true) {
    if (shouldRunCallback) {
      this._cancelCallback()
    }
    window.removeEventListener("keydown", this._handleEnterClose);
    super.close();
  }

}

export default PopupWithConfirmation;
