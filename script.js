let popup = document.querySelector(".popup");
let page = document.querySelector("body");
let profileTitle = document.querySelector(".profile__info-title");
let profileSubtitle = document.querySelector(".profile__info-subtitle");

// Обработчик закрытия попапа
function closePopup() {
  page.style.removeProperty("overflow");
  popup.classList.remove("popup_opened");
}

// Обработчик открытия попапа
function openPopup() {
  page.style.overflow = "hidden";
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
}

let editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", openPopup);

let closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", closePopup);

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
