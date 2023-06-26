(()=>{"use strict";var t=document.querySelector(".add-button"),e=document.querySelector(".edit-button"),n=document.querySelector(".avatar-button"),r=document.forms["edit-profile"],o=r.querySelector(".form__input_title"),i=r.querySelector(".form__input_subtitle");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}const a=function(){function t(e,n,r,o,i,u){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#card-template";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardID=e._id,this._title=e.name,this._imageUrl=e.link,this._likes=e.likes,this._ownerID=e.owner._id,this._myID=n,this._canBeDeleted=this._ownerID===this._myID,this._handleCardClick=r,this._handleDelete=o,this._handleLike=i,this._handleDislike=u,this._templateSelector=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeButton()})),this._deleteButton.addEventListener("click",(function(){t._handleDelete()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._title,t._imageUrl)}))}},{key:"_isLikedByMe",value:function(){var t=this;return this._likes.find((function(e,n,r){return t._myID===e._id}))}},{key:"updateLikes",value:function(t){this._likes=t,this._likeCounter.textContent=this._likes.length,this._isLikedByMe()?this._likeButton.classList.add("card__like-button_active"):this._likeButton.classList.remove("card__like-button_active")}},{key:"_handleLikeButton",value:function(){this._isLikedByMe()?this._handleDislike():this._handleLike()}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._cardImage=this._card.querySelector(".card__image"),this._cardImage.src=this._imageUrl,this._cardImage.alt=this._title,this._card.querySelector(".card__title").textContent=this._title,this._likeButton=this._card.querySelector(".card__like-button"),this._likeCounter=this._card.querySelector(".card__like-counter"),this.updateLikes(this._likes),this._deleteButton=this._card.querySelector(".card__delete-button"),this._canBeDeleted||(this._deleteButton.style.display="none"),this._setEventListeners(),this._card}},{key:"delete",value:function(){this._card.remove()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}const h=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_showInputError",(function(t,e){var n=r._form.querySelector(".".concat(t.id,"-error"));n.textContent=e,n.classList.add(r._errorClass),t.classList.add(r._inputErrorClass)})),f(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(r._errorClass),t.classList.remove(r._inputErrorClass)})),f(this,"_isValid",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),f(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),f(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1)})),f(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._isValid(t),r._toggleButtonState()}))}))})),f(this,"enableValidation",(function(){r._setEventListeners()})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}const v=function(){function t(e){var n=e.items,r=e.renderer,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".cards";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=n,this._renderer=r,this._container=document.querySelector(o)}var e,n;return e=t,n=[{key:"renderItems",value:function(){var t=this;this._initialArray.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"setItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.addItem(this._renderer(t),e)}},{key:"addItem",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this._container.prepend(t):this._container.append(t)}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}const b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupElement=document.querySelector(e),this._closeButton=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),this._popupElement.setAttribute("aria-hidden","false"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.setAttribute("aria-hidden","true"),this._popupElement.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close()})),this._closeButton.addEventListener("click",(function(e){t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}const j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".popup_preview";return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popupElement.querySelector(".popup__image"),t._caption=t._popupElement.querySelector(".popup__caption"),t.setEventListeners(),t}return e=u,(n=[{key:"open",value:function(t,e){this._image.src=e,this._image.alt=t,this._caption.textContent=t,k(E(u.prototype),"open",this).call(this)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}const B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popupElement.querySelector(".form"),n._inputs=n._form.querySelectorAll(".form__input"),n._submitButton=n._form.querySelector(".save-button"),n._submitButtonText=n._submitButton.textContent,n.setEventListeners(),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this._submitCallback(this._getInputValues())}},{key:"displayLoading",value:function(){this._submitButton.textContent="Сохранение..."}},{key:"finishLoading",value:function(){this._submitButton.textContent=this._submitButtonText}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){t._handleSubmit(e)})),C(I(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._reset(),C(I(u.prototype),"close",this).call(this)}},{key:"_reset",value:function(){this._form.reset()}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},D.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}const x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".popup_confirm";return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._confirmButton=t._popupElement.querySelector(".save-button"),t.setEventListeners(),t}return e=u,n=[{key:"_handleConfirm",value:function(t){t.preventDefault(),this._confirmCallback(),this.close(!1)}},{key:"setEventListeners",value:function(){var t=this;this._confirmButton.addEventListener("click",(function(e){t._handleConfirm(e)})),D(A(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(t,e){this._confirmCallback=t,this._cancelCallback=e,D(A(u.prototype),"open",this).call(this)}},{key:"close",value:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this._cancelCallback(),D(A(u.prototype),"close",this).call(this)}}],n&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}const z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileElement=document.querySelector(e.profileSelector),this._nameElement=this._profileElement.querySelector(e.nameSelector),this._jobElement=this._profileElement.querySelector(e.jobSelector),this._avatarElement=this._profileElement.querySelector(e.avatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name,job:this._job,avatar:this._avatar,id:this._id}}},{key:"getUserID",value:function(){return this._id}},{key:"setUserInfo",value:function(t,e){this._name=t,this._job=e,this._nameElement.textContent=this._name,this._jobElement.textContent=this._job}},{key:"setAvatar",value:function(t){this._avatar=t,this._avatarElement.src=this._avatar}},{key:"setID",value:function(t){this._id=t}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cohortID="cohort-69",this._token="23d842e4-8f3f-4a07-a998-efb30ba352b8",this._host="mesto.nomoreparties.co"}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}},{key:"getCards",value:function(){var t=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/cards"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}},{key:"createCard",value:function(t,e){var n=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then((function(t){return n._checkResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"putLike",value:function(t){var e=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"updateProfile",value:function(t,e){var n=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then((function(t){return n._checkResponse(t)}))}},{key:"updateAvatar",value:function(t){var e=this;return fetch("https://".concat(this._host,"/v1/").concat(this._cohortID,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return e._checkResponse(t)}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()),H=new z({profileSelector:".profile",nameSelector:".profile__info-title",jobSelector:".profile__info-subtitle",avatarSelector:".profile__avatar"}),$=[],F=new v({items:$,renderer:function(t){var e=new a(t,H.getUserID(),(function(){X.open(t.name,t.link)}),(function(){return new Promise((function(t,e){Y.open((function(){t("Ok")}),(function(){e("Удаление отменено")}))})).then((function(){return G.deleteCard(t._id)})).then((function(){e.delete()})).catch((function(t){console.log(t)}))}),(function(){G.putLike(t._id).then((function(t){e.updateLikes(t.likes)})).catch((function(t){console.log(t)}))}),(function(){G.removeLike(t._id).then((function(t){e.updateLikes(t.likes)})).catch((function(t){console.log(t)}))}));return e.generateCard()}}),K=[G.getUserInfo(),G.getCards()];Promise.all(K).then((function(t){var e;H.setUserInfo(t[0].name,t[0].about),H.setAvatar(t[0].avatar),H.setID(t[0]._id),$.push.apply($,function(t){if(Array.isArray(t))return J(t)}(e=t[1])||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),F.renderItems()})).catch((function(t){console.log(t)}));var Q,W={};Q={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".save-button",inactiveButtonClass:"save-button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"},Array.from(document.querySelectorAll(Q.formSelector)).forEach((function(t){var e=new h(Q,t),n=t.getAttribute("name");W[n]=e,e.enableValidation()}));var X=new j,Y=new x,Z=new B(".popup_add",(function(t){return Z.displayLoading(),G.createCard(t.name,t.url).then((function(t){F.setItem(t,!0),Z.close()})).catch((function(t){console.log(t)})).finally((function(){Z.finishLoading()}))})),tt=new B(".popup_edit",(function(t){return tt.displayLoading(),G.updateProfile(t.name,t.job).then((function(){H.setUserInfo(t.name,t.job),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.finishLoading()}))})),et=new B(".popup_update-avatar",(function(t){return et.displayLoading(),G.updateAvatar(t.url).then((function(){H.setAvatar(t.url),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.finishLoading()}))}));e.addEventListener("click",(function(t){W["edit-profile"].resetValidation();var e=H.getUserInfo(),n=e.name,r=e.job;o.value=n,i.value=r,tt.open()})),t.addEventListener("click",(function(t){W["create-place"].resetValidation(),Z.open()})),n.addEventListener("click",(function(t){W["update-avatar"].resetValidation(),et.open()}))})();