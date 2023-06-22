/**
 * Card for some place.
 * @constructor
 * @param {string} title - Name of the place on card.
 * @param {string} imageUrl - URL for the image.
 * @param {function} handleCardClick - Callback for opening preview.
 * @param {boolean} liked - Like button state.
 * @param {string} templateSelector - Selector for html template.
 */

class Card {
  constructor(place, handleCardClick, handleDelete, templateSelector = '#card-template') {
    this._cardID = place.cardID;
    this._title = place.title;
    this._imageUrl = place.imageUrl;
    this._liked = place.liked;
    this._canBeDeleted = place.canBeDeleted;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDelete();
      this._deleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._imageUrl);
    });
  }

  _handleLike() {
    this._liked = !this.liked;
    this._likeButton.classList.toggle('card__like-button_active');
  }


  generateCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector('.card__image');
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;

    this._card.querySelector('.card__title').textContent = this._title;

    this._likeButton = this._card.querySelector('.card__like-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this._likeCounter.textContent = this._liked;

    this._deleteButton = this._card.querySelector('.card__delete-button');

    if (!this._canBeDeleted) {
      this._deleteButton.style.display = "none";
    }

    this._setEventListeners();

    return this._card;
  }

  _deleteCard() {
    this._card.remove();
  }

}

export default Card;
