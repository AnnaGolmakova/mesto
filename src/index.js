import initialCards from './scripts/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import './pages/index.css';


// Профиль на странице
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");

// Кнопка добавления места
const addButton = document.querySelector(".add-button");

// Поп-ап добавления места
const popupAdd = document.querySelector(".popup_add");
const formPlaceCreation = document.forms["create-place"];
const placeTitle = formPlaceCreation.querySelector(".form__input_title");
const placeUrl = formPlaceCreation.querySelector(".form__input_subtitle");

// Кнопка редактирования профиля
const editButton = document.querySelector(".edit-button");

// Поп-ап редактирования профиля
const popupEdit = document.querySelector(".popup_edit");
const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.querySelector(".form__input_title");
const jobInput = formEditProfile.querySelector(".form__input_subtitle");

// Поп-ап просмотра картинок
const popupPreview = document.querySelector(".popup_preview");
const popupImage = popupPreview.querySelector('.popup__image');
const popupCaption = popupPreview.querySelector('.popup__caption');

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
  const cardElement = new Card(place.name, place.link, openPreview);
  return cardElement.generateCard();
}

const cardsList = new Section({
  items: initialCards,
  renderer: createCard
});

cardsList.renderItems();


// Обработчики открытия попапа

const editPopup = new Popup(".popup_edit");

function openPreview(name, link) {
  openPopup(popupPreview);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

function openEditPopup(evt) {
  formValidators["edit-profile"].resetValidation();
  editPopup.open();
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
editButton.addEventListener("click", openEditPopup);

function openAddPopup(evt) {
  formPlaceCreation.reset();
  formValidators["create-place"].resetValidation();
  openPopup(popupAdd);
}
addButton.addEventListener("click", openAddPopup);

// Обработчик отправки формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

formEditProfile.addEventListener('submit', handleProfileFormSubmit);


//Обработчик создания карточки
function handleCardCreate(evt) {
  evt.preventDefault();

  cardsList.setItem({
    name: placeTitle.value,
    link: placeUrl.value
  }, true);

  closePopup(popupAdd);
}

formPlaceCreation.addEventListener('submit', handleCardCreate);
