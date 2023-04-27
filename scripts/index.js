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
function closePopup(popupElement) {
  page.style.removeProperty("overflow");
  popupElement.classList.remove("popup_opened");
  popupElement.setAttribute('aria-hidden', 'true');
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.setAttribute('aria-hidden', 'false');
  page.style.overflow = "hidden";
}

// Обработчики открытия попапа

function openPreview (place) {
  openPopup(popupPreview);
  popupPreview.querySelector('.popup__image').src = place.link;
  popupPreview.querySelector('.popup__image').alt = place.name;
  popupPreview.querySelector('.popup__caption').textContent = place.name;
}

function openEditPopup(evt) {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openAddPopup(evt) {
  openPopup(popupAdd);
  placeTitle.value = "";
  placeUrl.value = "";
}

const editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", openEditPopup);

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", openAddPopup);

const closePreviewButton = popupPreview.querySelector(".popup__close");
closePreviewButton.addEventListener("click", () => {
  closePopup(popupPreview)
});

const closeEditPopupButton = popupEdit.querySelector(".popup__close");
closeEditPopupButton.addEventListener("click", () => {
  closePopup(popupEdit)
});

const closeAddPopupButton = popupAdd.querySelector(".popup__close");
closeAddPopupButton.addEventListener("click", () => {
  closePopup(popupAdd)
});

// Обработчик «отправки» формы
function handleProfileFormSubmit (evt) {
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

formEditProfile.addEventListener('submit', handleProfileFormSubmit);

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
