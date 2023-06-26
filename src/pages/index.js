import { profileOptions, validationParams, addButton, editButton, avatarButton, nameInput, jobInput } from '../scripts/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/API.js';
import './index.css';

const api = new Api();

const profile = new UserInfo(profileOptions);

const initialCards = [];
const cardsList = new Section({
  items: initialCards,
  renderer: createCard
});


const initialData = [api.getUserInfo(), api.getCards()]
Promise.all(initialData)
  .then((results) => {
    profile.setUserInfo(results[0].name, results[0].about);
    profile.setAvatar(results[0].avatar);
    profile.setID(results[0]._id);
    initialCards.push(...results[1]);
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

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
  const cardElement = new Card(
    place,
    profile.getUserID(),
    () => {
      previewPopup.open(place.name, place.link)
    },
    () => {
      return new Promise(function (resolve, reject) {
        confirmationPopup.open(
          () => { resolve("Ok") },
          () => { reject("Удаление отменено") }
        )
      })
        .then(() => {
          return api.deleteCard(place._id);
        })
        .then(() => {
          cardElement.delete();
        })
        .catch((err) => {
          console.log(err);
        })
    },
    () => {
      api.putLike(place._id)
        .then((result) => {
          cardElement.updateLikes(result.likes)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    () => {
      api.removeLike(place._id)
        .then((result) => {
          cardElement.updateLikes(result.likes)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  );
  return cardElement.generateCard();
}



// Поп-апы
const previewPopup = new PopupWithImage();

const confirmationPopup = new PopupWithConfirmation();

const addPopup = new PopupWithForm('.popup_add', (values) => {
  addPopup.displayLoading();
  return api.createCard(values.name, values.url)
    .then((result) => {
      cardsList.setItem(result, true);
      addPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addPopup.finishLoading();
    })
});

const editPopup = new PopupWithForm('.popup_edit', (values) => {
  editPopup.displayLoading();
  return api.updateProfile(values.name, values.job)
    .then(() => {
      profile.setUserInfo(values.name, values.job);
      editPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editPopup.finishLoading();
    })
});

const avatarPopup = new PopupWithForm('.popup_update-avatar', (values) => {
  avatarPopup.displayLoading();
  return api.updateAvatar(values.url)
    .then(() => {
      profile.setAvatar(values.url);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.finishLoading();
    })
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
