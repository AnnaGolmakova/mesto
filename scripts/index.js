const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.cards');

function createCard(place) {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__image').src = place.link;
  card.querySelector('.card__image').alt = place.name;
  card.querySelector('.card__title').textContent = place.name;

  cardsList.append(card);
}

initialCards.forEach(createCard)

let page = document.querySelector("body");
let popupEdit = document.querySelector(".popup_edit");
let popupAdd = document.querySelector(".popup_add");
let profileTitle = document.querySelector(".profile__info-title");
let profileSubtitle = document.querySelector(".profile__info-subtitle");

// Обработчик закрытия попапа
function closePopup() {
  page.style.removeProperty("overflow");
  document.querySelector(".popup_opened").classList.remove("popup_opened");
}

// Обработчик открытия попапа
function openPopup(evt) {
  page.style.overflow = "hidden";

  if (evt.target.className === "edit-button") {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popupEdit.classList.add("popup_opened");
  }
  if (evt.target.className === "add-button") {
    popupAdd.classList.add("popup_opened");
  }
}

let editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", openPopup);

let addButton = document.querySelector(".add-button");
addButton.addEventListener("click", openPopup);

let closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((element) => {
  element.addEventListener("click", closePopup);
});

let likeButton = document.querySelectorAll(".card__like-button");
likeButton.forEach((element) => {
  element.addEventListener("click", (evt) => {
    alert("Лайк!")
  });
});

let formElement = document.querySelector(".form");
let nameInput = formElement.querySelector(".form__input_title");
let jobInput = formElement.querySelector(".form__input_subtitle");

// Обработчик «отправки» формы
function handleFormSubmit (evt) {
  evt.preventDefault();

  if (nameInput.value.length === 0 && jobInput.value.length === 0) {
    alert("Заполните имя и должность");
    return;
  }
  if (jobInput.value.length === 0) {
    alert("Заполните должность");
    return;
  }
  if (nameInput.value.length === 0) {
    alert("Заполните имя");
    return;
  }

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);

//Обработчик создания карточки
function handleCardCreate (evt) {
  evt.preventDefault();

  if (placeTitle.value.length === 0 && placeUrl.value.length === 0) {
    alert("Заполните название и добавьте ссылку");
    return;
  }
  if (placeUrl.value.length === 0) {
    alert("Добавьте ссылку");
    return;
  }
  if (placeTitle.value.length === 0) {
    alert("Заполните название");
    return;
  }

  createCard({
    name: placeTitle.value,
    link: placeUrl.value
  })
  closePopup();
}

let formPlaceCreation = document.getElementsByName("create-place")[0];
let placeTitle = formPlaceCreation.querySelector(".form__input_title");
let placeUrl = formPlaceCreation.querySelector(".form__input_subtitle");

formPlaceCreation.addEventListener('submit', handleCardCreate);

