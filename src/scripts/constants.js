const profileOptions = {
  profileSelector: '.profile',
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle',
  avatarSelector: '.profile__avatar'
}

const validationParams = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.save-button',
  inactiveButtonClass: 'save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

// Кнопка добавления места
const addButton = document.querySelector(".add-button");

// Кнопка редактирования профиля
const editButton = document.querySelector(".edit-button");

// Кнопка редактирования аватара
const avatarButton = document.querySelector(".avatar-button");

// Форма редактирования профиля
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.querySelector(".form__input_title");
const jobInput = formEditProfile.querySelector(".form__input_subtitle");

export { profileOptions, validationParams, addButton, editButton, avatarButton, nameInput, jobInput };
