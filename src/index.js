import initialCards from './scripts/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import './pages/index.css';

const profile = new UserInfo('Жак-Ив Кусто', 'Исследователь океана');

// Кнопка добавления места
const addButton = document.querySelector(".add-button");

// Кнопка редактирования профиля
const editButton = document.querySelector(".edit-button");

// Форма редактирования профиля
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.querySelector(".form__input_title");
const jobInput = formEditProfile.querySelector(".form__input_subtitle");


// Параметры валидации
const validationParams = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
}

const formValidators = {}

const enableValidation = (validationParams) => {
  const formList = Array.from(document.querySelectorAll(validationParams.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationParams, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationParams);


// Создание карточек
function createCard(place) {
  const cardElement = new Card(place.name, place.link, () => {
    previewPopup.open(place.name, place.link)
  });
  return cardElement.generateCard();
}

const cardsList = new Section({
  items: initialCards,
  renderer: createCard
});

cardsList.renderItems();


// Поп-апы
const previewPopup = new PopupWithImage();

const addPopup = new PopupWithForm('.popup_add', (values) => {
  cardsList.setItem({
    name: values.name,
    link: values.url
  }, true);
});

const editPopup = new PopupWithForm('.popup_edit', (values) => {
  profile.setUserInfo(values.name, values.job);
});

function openEditPopup(evt) {
  formValidators["edit-profile"].resetValidation();
  nameInput.value = profile.name;
  jobInput.value = profile.job;
  editPopup.open();
}
editButton.addEventListener("click", openEditPopup);

function openAddPopup(evt) {
  formValidators["create-place"].resetValidation();
  addPopup.open();
}
addButton.addEventListener("click", openAddPopup);
