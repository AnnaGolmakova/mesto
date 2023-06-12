/**
 * Oтвечает за управление отображением информации о пользователе на странице
 * @constructor
 * @param {Object} options - Selectors' settings.
 * @param {string} options.profileSelector - Selector for a profile element.
 * @param {string} options.nameSelector - Selector for a name element.
 * @param {string} options.jobSelector - Selector for a job element.
 */

class UserInfo {
  constructor(options) {
    this._profileElement = document.querySelector(options.profileSelector);
    this._nameElement = this._profileElement.querySelector(options.nameSelector);
    this._jobElement = this._profileElement.querySelector(options.jobSelector);
  }

  getUserInfo() {
    return {
      name: this._name,
      job: this._job
    }
  }

  setUserInfo(name, job) {
    this._name = name;
    this._job = job;
    this._nameElement.textContent = this._name;
    this._jobElement.textContent = this._job;
  }
}

export default UserInfo;
