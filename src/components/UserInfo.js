export class UserInfo {

  constructor({ selectorName, selectorAbout }) {
    this._name = document.querySelector(selectorName);
    this._about = document.querySelector(selectorAbout);
  }

  //публичный метод, получающий данные о пользователе из html
  getUserInfo() {
    return ({
      name: this._name.textContent,
      about: this._about.textContent
    });
  }

  //публичный метод, добавляющий данные пользователя на страницу
  setUserInfo({ name_profile, about_profile }) {
    this._name.textContent = name_profile;
    this._about.textContent = about_profile;
  }
}