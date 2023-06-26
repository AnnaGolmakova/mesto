import Popup from './Popup.js';

/**
 * Popup with form
 * @constructor
 * @param {string} selector - Selector for an html element.
 * @param {function} submitCallback - Callback for handling of a form submit.
 */

class PopupWithForm extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector('.form');
    this._inputs = this._form.querySelectorAll('.form__input');
    this._submitButton = this._form.querySelector('.save-button');
    this._submitButtonText = this._submitButton.textContent;
    this.setEventListeners();
  }

  _getInputValues() {
    const values = {}
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    })
    return values;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitCallback(this._getInputValues());
  }

  displayLoading() {
    this._submitButton.textContent = 'Сохранение...';
  }

  finishLoading() {
    this._submitButton.textContent = this._submitButtonText;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      this._handleSubmit(evt);
    });
    super.setEventListeners();
  }

  close() {
    this._reset();
    super.close();
  }

  _reset() {
    this._form.reset();
  }
}

export default PopupWithForm;
