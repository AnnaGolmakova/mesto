import { profileOptions, validationParams } from '../scripts/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/API.js';
import './index.css';

const api = new Api();

const profile = new UserInfo(profileOptions);

api.getUserInfo()
  .then((result) => {
    profile.setUserInfo(result.name, result.about);
    profile.setAvatar(result.avatar);
  })
  .catch((err) => {
    console.log(err);
  });


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

const initialCards = await api.getCards()
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log(err);
  });

const cardsList = new Section({
  items: initialCards,
  renderer: createCard
});

cardsList.renderItems();

// Поп-апы
const previewPopup = new PopupWithImage();

const addPopup = new PopupWithForm('.popup_add', (values) => {
  api.createCard(values.name, values.url)
    .then((result) => {
      cardsList.setItem({
        name: values.name,
        link: values.url
      }, true);
    })
    .catch((err) => {
      console.log(err);
    });
});

const editPopup = new PopupWithForm('.popup_edit', (values) => {
  api.updateProfile(values.name, values.job)
    .then((result) => {
      profile.setUserInfo(values.name, values.job);
    })
    .catch((err) => {
      console.log(err);
    });
});

const avatarPopup = new PopupWithForm('.popup_update-avatar', (values) => {
  api.updateAvatar(values.url)
    .then((result) => {
      profile.setAvatar(values.url);
    })
    .catch((err) => {
      console.log(err);
    });
});

function openEditPopup(evt) {
  formValidators["edit-profile"].resetValidation();
  const { name, job } = profile.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;
  editPopup.open();
}
editButton.addEventListener("click", openEditPopup);

function openAddPopup(evt) {
  formValidators["create-place"].resetValidation();
  addPopup.open();
}
addButton.addEventListener("click", openAddPopup);

function openAvatarPopup(evt) {
  formValidators["update-avatar"].resetValidation();
  avatarPopup.open();
}
avatarButton.addEventListener("click", openAvatarPopup);
