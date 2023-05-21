class FormValidator {
  constructor(options) {
    this.formSelector = options.formSelector;
    this.inputSelector = options.inputSelector;
    this.submitButtonSelector = options.submitButtonSelector;
    this.inactiveButtonClass = options.inactiveButtonClass;
    this.inputErrorClass = options.inputErrorClass;
    this.errorClass = options.errorClass;
    this.enableValidation(options);
  }

  _showInputError = (formElement, inputElement, options, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(options.errorClass);
    inputElement.classList.add(options.inputErrorClass);
  };

  _hideInputError = (formElement, inputElement, options) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(options.errorClass);
    inputElement.classList.remove(options.inputErrorClass);
  };

  _isValid = (formElement, inputElement, options) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, options, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement, options);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _setEventListeners = (formElement, options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement, options)
        this._toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
      });
    });
  };

  enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement, options);
    });
  };

}

export default FormValidator;
