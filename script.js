let popup = document.querySelector(".popup");

function closePopup() {
  popup.classList.remove("popup_opened");
}

function openPopup() {
  nameInput.value = document.querySelector(".profile__info-title").textContent;
  jobInput.value = document.querySelector(".profile__info-subtitle").textContent;
  popup.classList.add("popup_opened");
}

let editButton = document.querySelector(".edit-button");
editButton.addEventListener("click", openPopup);

let closeButton = document.querySelector(".popup__close");
closeButton.addEventListener("click", closePopup);


let formElement = document.querySelector(".form");

let nameInput = formElement.querySelector(".form__input_title");
let jobInput = formElement.querySelector(".form__input_subtitle");

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

  document.querySelector(".profile__info-title").textContent = nameInput.value;
  document.querySelector(".profile__info-subtitle").textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
