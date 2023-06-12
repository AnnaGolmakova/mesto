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
  constructor(title, imageUrl, handleCardClick, liked = false, templateSelector = '#card-template') {
    this._title = title;
    this._imageUrl = imageUrl;
    this._handleCardClick = handleCardClick;
    this._liked = liked;
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
    this._deleteButton = this._card.querySelector('.card__delete-button');

    this._setEventListeners();

    return this._card;
  }

  _deleteCard() {
    this._card.remove();
  }

}

export default Card;
