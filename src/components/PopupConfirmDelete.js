import { Popup } from "./Popup.js";

export class PopupConfirmDelete extends Popup {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  //дополним метод открытия попапа
  open(cardElement, cardID) {
    this._cardElement = cardElement;
    this._cardID = cardID;
    super.open();
  }

  //добавим обработчик submit form
  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardElement, this._cardID);
    });
    document.addEventListener('keypress', (evt) => {
      if (evt.key === 'Enter') {
        this._handleFormSubmit(this._cardElement, this._cardID);
      }
    })
    super.setEventListeners();
  }

}