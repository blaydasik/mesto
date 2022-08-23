export class UserInfo {

  constructor({ selectorName, selectorAbout, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._about = document.querySelector(selectorAbout);
    this._avatar = document.querySelector(selectorAvatar);
  }

  //публичный метод, получающий данные о пользователе из html
  getUserInfo() {
    return ({
      name: this._name.textContent,
      about: this._about.textContent
    });
  }

  //публичный метод, добавляющий данные пользователя на страницу
  setUserInfo({ name, about, avatar }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  }
}