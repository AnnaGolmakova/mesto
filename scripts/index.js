const page = document.querySelector("body");

// Профиль на странице
const profileTitle = document.querySelector(".profile__info-title");
const profileSubtitle = document.querySelector(".profile__info-subtitle");

// Список карточек и их шаблон
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

// Кнопка добавления места
const addButton = document.querySelector(".add-button");

// Поп-ап добавления места
const popupAdd = document.querySelector(".popup_add");
const closeAddPopupButton = popupAdd.querySelector(".popup__close");
const formPlaceCreation = document.getElementsByName("create-place")[0];
const placeTitle = formPlaceCreation.querySelector(".form__input_title");
const placeUrl = formPlaceCreation.querySelector(".form__input_subtitle");

// Кнопка редактирования профиля
const editButton = document.querySelector(".edit-button");

// Поп-ап редактирования профиля
const popupEdit = document.querySelector(".popup_edit");
const formEditProfile = document.getElementsByName("edit-profile")[0];
const closeEditPopupButton = popupEdit.querySelector(".popup__close");
const nameInput = formEditProfile.querySelector(".form__input_title");
const jobInput = formEditProfile.querySelector(".form__input_subtitle");

// Поп-ап просмотра картинок
const popupPreview = document.querySelector(".popup_preview")
const closePreviewButton = popupPreview.querySelector(".popup__close");
const popupImage = popupPreview.querySelector('.popup__image');
const popupCaption = popupPreview.querySelector('.popup__caption');


// Создание карточек
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


// Обработчики открытия попапа

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.setAttribute('aria-hidden', 'false');
  page.style.overflow = "hidden";
}

function openPreview(place) {
  openPopup(popupPreview);
  popupImage.src = place.link;
  popupImage.alt = place.name;
  popupCaption.textContent = place.name;
}

function openEditPopup(evt) {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
editButton.addEventListener("click", openEditPopup);

function openAddPopup(evt) {
  openPopup(popupAdd);
  placeTitle.value = "";
  placeUrl.value = "";
}
addButton.addEventListener("click", openAddPopup);


// Обработчик закрытия попапа
function closePopup(popupElement) {
  page.style.removeProperty("overflow");
  popupElement.setAttribute('aria-hidden', 'true');
  popupElement.classList.remove("popup_opened");
}

closePreviewButton.addEventListener("click", () => {
  closePopup(popupPreview)
});

closeEditPopupButton.addEventListener("click", () => {
  closePopup(popupEdit)
});

closeAddPopupButton.addEventListener("click", () => {
  closePopup(popupAdd)
});


// Обработчик отправки формы профиля
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
  closePopup(popupEdit);
}

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
  closePopup(popupAdd);
}

formPlaceCreation.addEventListener('submit', handleCardCreate);
