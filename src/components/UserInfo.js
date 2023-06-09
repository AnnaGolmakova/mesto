/**
 * Oтвечает за управление отображением информации о пользователе на странице
 * @constructor
 * @param {string} name - User's name.
 * @param {string} job - User's job title.
 * @param {string} selector - Selector for an html element.
 */

class UserInfo {
  constructor(name, job, selector = '.profile') {
    this.profileElement = document.querySelector(selector);
    this.nameElement = this.profileElement.querySelector('.profile__info-title');
    this.jobElement = this.profileElement.querySelector('.profile__info-subtitle');
    this.setUserInfo(name, job);
  }

  getUserInfo() {
    return {
      name: this.name,
      job: this.job
    }
  }

  setUserInfo(name, job) {
    this.name = name;
    this.job = job;
    this.nameElement.textContent = this.name;
    this.jobElement.textContent = this.job;
  }
}

export default UserInfo;
