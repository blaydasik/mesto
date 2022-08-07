import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    //находим поля для вставки значений в popup
    this._imageTitle = this._popup.querySelector('.popup__image-title');
    this._image = this._popup.querySelector('.popup__image');
  }

  //переопределим публичный метод для открытия попапа с картинкой
  open(cardData) {
    this._imageTitle.textContent = cardData.title;
    this._image.src = cardData.img;
    this._image.alt = cardData.title;
    super.open();
  }

}