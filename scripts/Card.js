class Card {
  constructor(title, imageUrl, liked = false, templateSelector = '#card-template') {
    this.title = title;
    this.imageUrl = imageUrl;
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

  _handleLike() {
    this.liked = !this.liked;
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _handleCardClick() {
    this._card.dispatchEvent(this.eventOpenPreview);
  }

  generateCard() {
    this._card = this._getTemplate();

    const cardImage = this._card.querySelector('.card__image');
    cardImage.src = this.imageUrl;
    cardImage.alt = this.title;

    this._card.querySelector('.card__title').textContent = this.title;

    this._likeButton = this._card.querySelector('.card__like-button');
    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._card.querySelector('.card__delete-button').addEventListener("click", () => {
      this._deleteCard(this._card);
    });
    cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });

    return this._card;
  }

  _deleteCard() {
    this._card.remove();
  }

}

export default Card;
