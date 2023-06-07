class FormValidator {
  constructor(options, form) {
    this.inputSelector = options.inputSelector;
    this.submitButtonSelector = options.submitButtonSelector;
    this.inactiveButtonClass = options.inactiveButtonClass;
    this.inputErrorClass = options.inputErrorClass;
    this.errorClass = options.errorClass;
    this.form = form;
    this.inputList = Array.from(this.form.querySelectorAll(this.inputSelector));
    this.buttonElement = this.form.querySelector(this.submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
    inputElement.classList.add(this.inputErrorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this.errorClass);
    inputElement.classList.remove(this.inputErrorClass);
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this.inputList)) {
      this.buttonElement.classList.add(this.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  };

  resetValidation() {
    this._toggleButtonState();

    this.inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }


  _setEventListeners = () => {
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };

}

export default FormValidator;
