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
    this.close();
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
