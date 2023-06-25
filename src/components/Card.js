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
  constructor(place, myID, handleCardClick, handleDelete, handleLike, handleDislike, templateSelector = '#card-template') {
    this._cardID = place._id;
    this._title = place.name;
    this._imageUrl = place.link;
    this._likes = place.likes;
    this._ownerID = place.owner._id;
    this._myID = myID;
    this._canBeDeleted = this._ownerID === this._myID;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
    this._handleLike = handleLike;
    this._handleDislike = handleDislike;
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
      this._handleLikeButton();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDelete()
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._imageUrl);
    });
  }

  _isLikedByMe() {
    return this._likes.find((item, index, array) => {
      return this._myID === item._id;
    })
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length;
    if (this._isLikedByMe()) {
      this._likeButton.classList.add('card__like-button_active');
    } else {
      this._likeButton.classList.remove('card__like-button_active');
    }
  }

  _handleLikeButton() {
    if (this._isLikedByMe()) {
      this._handleDislike()
    } else {
      this._handleLike()
    }
  }

  generateCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector('.card__image');
    this._cardImage.src = this._imageUrl;
    this._cardImage.alt = this._title;

    this._card.querySelector('.card__title').textContent = this._title;

    this._likeButton = this._card.querySelector('.card__like-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this.updateLikes(this._likes)

    this._deleteButton = this._card.querySelector('.card__delete-button');

    if (!this._canBeDeleted) {
      this._deleteButton.style.display = "none";
    }

    this._setEventListeners();

    return this._card;
  }

  delete() {
    this._card.remove();
  }

}

export default Card;
