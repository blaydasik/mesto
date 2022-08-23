export class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //публичный метод для открытия popup
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  //публичный метод для закрытия popup
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  //приватный метод для закрытия popup при нажатии на Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') this.close();
  }

  //публичный метод добавляющий слушатель клика на закрытие popup
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      const clickedElementCL = evt.target.classList;
      if ((clickedElementCL.contains('popup_opened')) ||
        (clickedElementCL.contains('popup__button-close'))) {
        this.close();
      }
    });
  }
}