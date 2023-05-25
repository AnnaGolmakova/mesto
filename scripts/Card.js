class Card {
  constructor(title, imageUrl, handleCardClick, liked = false, templateSelector = '#card-template') {
    this.title = title;
    this.imageUrl = imageUrl;
    this._handleCardClick = handleCardClick;
    this.liked = liked;
    this.templateSelector = templateSelector;
    this.eventOpenPreview = new CustomEvent("openPreview", {
      bubbles: true,
      detail: {
        name: this.title,
        link: this.imageUrl
      }
    });
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      this._handleLike();
    });
    this.deleteButton.addEventListener("click", () => {
      this._deleteCard(this._card);
    });
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick(this.title, this.imageUrl);
    });
  }

  _handleLike() {
    this.liked = !this.liked;
    this.likeButton.classList.toggle('card__like-button_active');
  }


  generateCard() {
    this._card = this._getTemplate();

    this.cardImage = this._card.querySelector('.card__image');
    this.cardImage.src = this.imageUrl;
    this.cardImage.alt = this.title;

    this._card.querySelector('.card__title').textContent = this.title;

    this.likeButton = this._card.querySelector('.card__like-button');
    this.deleteButton = this._card.querySelector('.card__delete-button');

    this._setEventListeners();

    return this._card;
  }

  _deleteCard() {
    this._card.remove();
  }

}

export default Card;
