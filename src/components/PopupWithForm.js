import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonSave = this._form.querySelector('.popup__button-save');
    //объект со значениями input'ов
    this._formValues = {};
    this._handleFormSubmit = handleFormSubmit;
    //сохраним исходный текст на кнопке
    this._textOnButton = this._buttonSave.textContent;
    this._textUX = "Сохранение...";
  }

  //приватный метод, получающий данные полей формы
  _getInputValues() {
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  //добавим обработчик submit form
  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  //добавим очистку формы при закрытии
  close() {
    this._form.reset();
    super.close();
  }

  //добавим метод для улучшения UX (Сохранение)
  renderLoading() {
    this._buttonSave.textContent =
      this._buttonSave.textContent === this._textUX ? this._textOnButton : this._textUX;
  }

}