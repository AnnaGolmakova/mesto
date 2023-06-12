import Popup from './Popup.js';

/**
 * Popup for image preview
 * @constructor
 * @param {string} selector - Selector for an html element.
 */

class popupWithImage extends Popup {
  constructor(selector = '.popup_preview') {
    super(selector);
    this._image = this._popupElement.querySelector('.popup__image');
    this._caption = this._popupElement.querySelector('.popup__caption');
    this.setEventListeners();
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }
}


export default popupWithImage;
