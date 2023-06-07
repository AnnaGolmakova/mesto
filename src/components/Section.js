/**
 * Отвечает за отрисовку элементов на странице.
 * @constructor
 * @param {array} items - Массив данных, которые нужно добавить на страницу при инициализации класса.
 * @param {function} renderer -  Функция, которая отвечает за создание и отрисовку данных на странице.
 * @param {string} selector - Cелектор контейнера, в который нужно добавлять созданные элементы.
 */

class Section {
  constructor({ items, renderer }, selector = '.cards') {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._initialArray.forEach((item) => {
      this.setItem(item)
    })
  }

  setItem(item, prepend = false) {
    if (prepend) {
      this._container.prepend(this._renderer(item));
    } else {
      this._container.append(this._renderer(item));
    }
  }
}

export default Section;
