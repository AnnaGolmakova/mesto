import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Профиль на странице
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");

// Список карточек
const cardsList = document.querySelector('.cards');

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
function createCard(name, link) {
  const cardElement = new Card(name, link, openPreview);
  return cardElement.generateCard();
}

initialCards.forEach((place) => {
  cardsList.append(createCard(place.name, place.link));
});


// Обработчики открытия попапа

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.setAttribute('aria-hidden', 'false');
  window.addEventListener("keydown", closeOnEsc);
}

function openPreview(name, link) {
  openPopup(popupPreview);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

function openEditPopup(evt) {
  formValidators["edit-profile"].resetValidation();
  openPopup(popupEdit);
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


// Обработчик закрытия попапа
const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

function closePopup(popupElement) {
  popupElement.setAttribute('aria-hidden', 'true');
  popupElement.classList.remove("popup_opened");
  window.removeEventListener("keydown", closeOnEsc);
}

function closeOnEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

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

  cardsList.prepend(createCard(placeTitle.value, placeUrl.value));

  closePopup(popupAdd);
}

formPlaceCreation.addEventListener('submit', handleCardCreate);
