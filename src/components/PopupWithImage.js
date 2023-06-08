import Popup from './Popup.js';

class popupWithImage extends Popup {
  constructor(selector = '.popup_preview') {
    super(selector);
    this.image = this.popupElement.querySelector('.popup__image');
    this.caption = this.popupElement.querySelector('.popup__caption');
    this.setEventListeners();
  }

  open(name, link) {
    this.image.src = link;
    this.image.alt = name;
    this.caption.textContent = name;
    super.open();
  }
}


export default popupWithImage;
