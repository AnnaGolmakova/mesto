const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

const cardsList = document.querySelector('.cards');

function createCard(place) {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__image').src = place.link;
  card.querySelector('.card__image').alt = place.name;
  card.querySelector('.card__title').textContent = place.name;
  card.querySelector('.card__like-button').addEventListener("click", handleLike);
  card.querySelector('.card__delete-button').addEventListener("click", () => {
    deleteCard(card);
  });
  card.querySelector('.card__image').addEventListener("click", () => {
    openPreview(place);
  });

  return card;
}

initialCards.forEach((place) => {
  cardsList.append(createCard(place));
});

function deleteCard(card) {
  card.remove();
}

function handleLike (evt) {
  evt.target.classList.toggle('card__like-button_active');
}

const page = document.querySelector("body");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupPreview = document.querySelector(".popup_preview")
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");

// Обработчик закрытия попапа
function closePopup() {
  page.style.removeProperty("overflow");
  document.querySelector(".popup_opened").classList.remove("popup_opened");
  document.querySelector(".popup_opened").setAttribute('aria-hidden', 'true');
}

// Обработчик открытия попапа
function openEditPopup(evt) {
  page.style.overflow = "hidden";
  popupEdit.classList.add("popup_opened");
  popupEdit.setAttribute('aria-hidden', 'false');

// Обработчики открытия попапа

function openPreview (place) {
  page.style.overflow = "hidden";
  popupPreview.classList.add("popup_opened");
  popupPreview.setAttribute('aria-hidden', 'false');
  popupPreview.querySelector('.popup__image').src = place.link;
  popupPreview.querySelector('.popup__image').alt = place.name;
  popupPreview.querySelector('.popup__caption').textContent = place.name;
}

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openAddPopup(evt) {
  page.style.overflow = "hidden";
  popupAdd.classList.add("popup_opened");
  popupAdd.setAttribute('aria-hidden', 'false');
  placeTitle.value = "";
  placeUrl.value = "";
}

const editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", openEditPopup);

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", openAddPopup);

const closeButtons = document.querySelectorAll(".popup__close");
closeButtons.forEach((element) => {
  element.addEventListener("click", closePopup);
});

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

const formEditProfile = document.getElementsByName("edit-profile")[0];
const nameInput = formEditProfile.querySelector(".form__input_title");
const jobInput = formEditProfile.querySelector(".form__input_subtitle");

formEditProfile.addEventListener('submit', handleFormSubmit);

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

  cardsList.prepend(createCard({
    name: placeTitle.value,
    link: placeUrl.value
  }));
  closePopup();
}

const formPlaceCreation = document.getElementsByName("create-place")[0];
const placeTitle = formPlaceCreation.querySelector(".form__input_title");
const placeUrl = formPlaceCreation.querySelector(".form__input_subtitle");

formPlaceCreation.addEventListener('submit', handleCardCreate);
