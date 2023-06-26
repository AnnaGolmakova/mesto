import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(selector = '.popup_confirm') {
    super(selector);
    this._confirmButton = this._popupElement.querySelector('.save-button');
    this.setEventListeners();
  }

  _handleConfirm(evt) {
    evt.preventDefault();
    this._confirmCallback();
    this.close(false);
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
    super.open();
  }

  close(shouldRunCallback = true) {
    if (shouldRunCallback) {
      this._cancelCallback()
    }
    super.close();
  }

}

export default PopupWithConfirmation;
