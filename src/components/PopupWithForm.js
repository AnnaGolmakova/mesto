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
    this.submitCallback = submitCallback;
    this.form = this.popupElement.querySelector('.form');
    this.inputs = this.form.querySelectorAll('.form__input');
    this.setEventListeners();
  }

  _getInputValues() {
    const values = {}
    this.inputs.forEach((input) => {
      values[input.name] = input.value;
    })
    return values;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.submitCallback(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    this.form.addEventListener('submit', (evt) => {
      this._handleSubmit(evt);
    });
    super.setEventListeners();
  }

  close() {
    this.reset();
    super.close();
  }

  reset() {
    this.form.reset();
  }
}

export default PopupWithForm;
