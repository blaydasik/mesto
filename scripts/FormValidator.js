//параметры валидации:
//formSelector - класс валидируемой формы
//fieldsetSelector - общий класс для fildset'ов
//inputSelector - общий класс для валидируемых inputs
//submitButtonSelector - общий класс для кнопок submit
//inactiveButtonClass - модификатор для неактивного состояния кнопки submit
//inputErrorClass - модификатор для невалидного состояния iтput
//errorClass - модификатор для активного состояния ошибки

export class FormValidator {

  constructor(validationSettings, validatingForm) {
    this._validationSettings = validationSettings;
    this._validatingForm = validatingForm;
    this._fieldsets = Array.from(this._validatingForm.querySelectorAll(this._validationSettings.fieldsetSelector));
  }

  //метод, отображающий сообщение об ошибки
  _showErrorMessage(fieldset, inputsItem) {
    //определим span для выведения ошибки
    const str = '.popup__error' + `${inputsItem.id}`.slice(5);
    const errorItem = fieldset.querySelector(str);
    //подсветим input с ошибкой
    inputsItem.classList.add(this._validationSettings.inputErrorClass);
    //запишем текст ошибки в span
    errorItem.textContent = inputsItem.validationMessage;
    //отобразим span с ошибкой
    errorItem.classList.add(this._validationSettings.errorClass);
  }

  //метод, скрывающий сообщение об ошибки
  _hideErrorMessage(fieldset, inputsItem) {
    //определим span, отображающий ошибку
    const str = '.popup__error' + `${inputsItem.id}`.slice(5);
    const errorItem = fieldset.querySelector(str);
    //уберем подсветку input с ошибкой
    inputsItem.classList.remove(this._validationSettings.inputErrorClass);
    //удалим текст ошибки в span
    errorItem.textContent = '';
    //скроем span с ошибкой
    errorItem.classList.remove(this._validationSettings.errorClass);
  }

  //метод, отображающий или скрывающий сообщение об ошибке на основании 
  //валидности input 
  _validateInput(fieldset, inputsItem) {
    if (inputsItem.validity.valid) {
      this._hideErrorMessage(fieldset, inputsItem);
    } else {
      this._showErrorMessage(fieldset, inputsItem);
    }
  }

  //метод, проверяющий набор inputs на валидность
  //true - прошел проверку
  _checkInput(inputs) {
    //проверим, есть ли хотя бы один невалидный input
    //если true, то нашелся хотя бы один невалидный input
    return !inputs.some((inputsItem) => {
      //вызывается пока не вернется true, а мы ищем хотя бы один невалидный 
      return !inputsItem.validity.valid;
    });
  }

  //метод, меняющий состояние кнопки submit на основании валидности inputs
  _toggleButtonState(inputs, submitButton) {
    //проверим массив inputs на валидность
    if (this._checkInput(inputs)) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", "disabled");
    }
  }

  //метод, устанавливающий обработчик на набор полей
  _setEventListener(fieldset) {
    //найдем все inputs в наборе полей
    const inputs = Array.from(fieldset.querySelectorAll(this._validationSettings.inputSelector));
    //найдем кнопку submit
    const submitButton = fieldset.querySelector(this._validationSettings.submitButtonSelector);
    //навесим обработчики на ввод в inputs  
    inputs.forEach((inputsItem) => {
      inputsItem.addEventListener('input', () => {
        //отобразим или скроем ошибку на основании валидности input
        this._validateInput(fieldset, inputsItem);
        //определим состояние кнопки по результатам валидации
        this._toggleButtonState(inputs, submitButton);
      });
    });
  }

  //публичный метод, включающий валидацию
  enableValidation() {
    //установим обработчики на все наборы полей    
    this._fieldsets.forEach((fieldsetsItem) => this._setEventListener(fieldsetsItem));
  }

  //публичный метод, производящий валидацию формы при открытии popup
  validateOnOpen() {
    this._fieldsets.forEach((fieldsetsItem) => {
      const inputs = Array.from(fieldsetsItem.querySelectorAll(this._validationSettings.inputSelector));
      const submitButton = fieldsetsItem.querySelector(this._validationSettings.submitButtonSelector);
      //определим состояние кнопки по результатам валидации
      this._toggleButtonState(inputs, submitButton);
      //очистим ошибки
      inputs.forEach((inputsItem) => {
        this._hideErrorMessage(fieldsetsItem, inputsItem);
      });
    });
  }
}