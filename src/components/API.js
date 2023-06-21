class Api {
  constructor() {
    this._cohortID = 'cohort-69';
    this._token = '23d842e4-8f3f-4a07-a998-efb30ba352b8';
    this._host = 'mesto.nomoreparties.co';
  }

  getUserInfo() {
    return fetch(`https://${this._host}/v1/${this._cohortID}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getCards() {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardID) {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards/${cardID}`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  putLike() {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  removeLike() {
    return fetch(`https://${this._host}/v1/${this._cohortID}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}

export default Api;
