class Api {
  constructor() {
    this._cohortID = 'cohort-69';
    this._token = '23d842e4-8f3f-4a07-a998-efb30ba352b8';
    this._host = 'mesto.nomoreparties.co';
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserInfo() {
    return fetch(`https://${this._host}/v1/${this._cohortID}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
      .then((res) => this._checkResponse(res))
  }

  getCards() {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
      .then((res) => this._checkResponse(res))
  }

  createCard(name, link) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then((res) => this._checkResponse(res))
  }

  deleteCard(cardID) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards/${cardID}`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      }
    })
      .then((res) => this._checkResponse(res))
  }

  putLike(cardID) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token
      }
    })
      .then((res) => this._checkResponse(res))
  }

  removeLike(cardID) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      }
    })
      .then((res) => this._checkResponse(res))
  }

  updateProfile(name, about) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then((res) => this._checkResponse(res))
  }

  updateAvatar(avatar) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then((res) => this._checkResponse(res))
  }
}

export default Api;
