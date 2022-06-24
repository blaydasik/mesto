//функция, отображающая сообщение об ошибки
function showErrorMessage(fieldset, inputsItem, settings) {
  //определим span для выведения ошибки
  const str = '.popup__error' + `${inputsItem.id}`.slice(5);
  const errorItem = fieldset.querySelector(str);
  //подсветим input с ошибкой
  inputsItem.classList.add(settings.inputErrorClass);
  //запишем текст ошибки в span
  errorItem.textContent = inputsItem.validationMessage;
  //отобразим span с ошибкой
  errorItem.classList.add(settings.errorClass);
}

//функция, скрывающая сообщение об ошибки
function hideErrorMessage(fieldset, inputsItem, settings) {
  //определим span, отображающий ошибку
  const str = '.popup__error' + `${inputsItem.id}`.slice(5);
  const errorItem = fieldset.querySelector(str);
  //уберем подсветку input с ошибкой
  inputsItem.classList.remove(settings.inputErrorClass);
  //удалим текст ошибки в span
  errorItem.textContent = '';
  //скроем span с ошибкой
  errorItem.classList.remove(settings.errorClass);
}

//функция, отображающая или скрывающая сообщение об ошибке на основании 
//валидности input 
function validateInput(fieldset, inputsItem, settings) {
  if (inputsItem.validity.valid) {
    hideErrorMessage(fieldset, inputsItem, settings);
  } else {
    showErrorMessage(fieldset, inputsItem, settings);
  }
}

//функция, проверяющая набор inputs на валидность
//true - прошел проверку
function checkInput(inputs) {
  //проверим, есть ли хотя бы один невалидный input
  //если true, то нашелся хотя бы один невалидный input
  return !inputs.some((inputsItem) => {
    //вызывается пока не вернется true, а мы ищем хотя бы один невалидный 
    return !inputsItem.validity.valid;
  });
}

//функция, меняющая состояние кнопки submit на основании валидности inputs
function toggleButtonState(inputs, submitButton) {
  //проверим массив inputs на валидность
  if (checkInput(inputs)) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

//функция, устанавливающая обработчик на набор полей
function setEventListener(fieldset, settings) {
  //найдем все inputs в наборе полей
  const inputs = Array.from(fieldset.querySelectorAll(settings.inputSelector));
  //найдем кнопку submit
  const submitButton = fieldset.querySelector(settings.submitButtonSelector);
  //навесим обработчики на ввод в inputs  
  inputs.forEach((inputsItem) => {
    inputsItem.addEventListener('input', () => {
      //отобразим или скроем ошибку на основании валидности input
      validateInput(fieldset, inputsItem, settings);
      //определим состояние кнопки по результатам валидации
      toggleButtonState(inputs, submitButton);
    });
  });
}

//функция, активизирующая валидацию с заданными параметрами:
//formSelector - класс валидируемой формы
//inputSelector - общий класс для валидируемых inputs
//submitButtonSelector - общий класс для кнопок submit
//inactiveButtonClass - модификатор для неактивного состояния кнопки submit
//inputErrorClass - модификатор для невалидного состояния iтput
//errorClass - модификатор для активного состояния ошибки
function enableValidation(settings) {
  //получим список валидируемых форм
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((formsItem) => {
    //отменим стандартную обработку submit
    formsItem.addEventListener('submit', (evt) => evt.preventDefault());
    //установим обработчики на все наборы полей
    const fieldsets = Array.from(formsItem.querySelectorAll(settings.fieldsetSelector));
    fieldsets.forEach((fieldsetsItem) => setEventListener(fieldsetsItem, settings));
  });
}

function validateOnOpen(formCurrent, settings) {
  const fieldsets = Array.from(formCurrent.querySelectorAll(settings.fieldsetSelector));
  fieldsets.forEach((fieldsetsItem) => {
    const inputs = Array.from(fieldsetsItem.querySelectorAll(settings.inputSelector));
    const submitButton = fieldsetsItem.querySelector(settings.submitButtonSelector);
    inputs.forEach((inputsItem) => {
      //отобразим или скроем ошибку на основании валидности input
      validateInput(fieldsetsItem, inputsItem, settings);
      //определим состояние кнопки по результатам валидации
      toggleButtonState(inputs, submitButton);
    });
  });
}