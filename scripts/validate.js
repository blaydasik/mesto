//функция, отображающая сообщение об ошибки
function showErrorMessage(fieldset, inputsItem) {
  //определим span для выведения ошибки
  const str = '.popup__error'+`${inputsItem.id}`.slice(5);
  const errorItem = fieldset.querySelector(str);
  //подсветим input с ошибкой
  inputsItem.classList.add(settings.inputErrorClass);
  //запишем текст ошибки в span
  errorItem.textContent = inputsItem.validationMessage;
  //отобразим span с ошибкой
  errorItem.classList.add(settings.errorClass);
}

//функция, скрывающая сообщение об ошибки
function hideErrorMessage(fieldset, inputsItem) {
  //определим span, отображающий ошибку
  const str = '.popup__error'+`${inputsItem.id}`.slice(5);

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
function validateInput(fieldset, inputsItem) {
  if (inputsItem.validity.valid) {
    hideErrorMessage(fieldset, inputsItem);
  } else {
    showErrorMessage(fieldset, inputsItem);
  }
}

//функция, проверяющая набор inputs на валидность
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
    submitButton.classList.remove(settings.inactiveButtonClass);
  } else {
    submitButton.classList.add(settings.inactiveButtonClass);
  }
}

//обработчик fieldset
function handleInput(fieldset, inputs, inputsItem, submitButton) {
  //отобразим или скроем ошибку на основании валидности input
  validateInput(fieldset, inputsItem);
  //определим состояние кнопки по результатам валидации
  toggleButtonState(inputs, submitButton);
}

//массив для обработчиков listener
const handlerName = [];

//функция, устанавливающая обработчик на набор полей
function setEventListener(fieldset) {
  //найдем все inputs в наборе полей
  const inputs = Array.from(fieldset.querySelectorAll(settings.inputSelector));
  //найдем кнопку submit
  const submitButton = fieldset.querySelector(settings.submitButtonSelector);
  //навесим обработчики на ввод в inputs  
  inputs.forEach((inputsItem) => {
    //чтобы при открытии popup произошла валидация
    handleInput(fieldset, inputs, inputsItem, submitButton);
    handlerName.push(() => { handleInput(fieldset, inputs, inputsItem, submitButton) });
    inputsItem.addEventListener('input', handlerName[handlerName.length - 1]);
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
    fieldsets.forEach((fieldsetsItem) => setEventListener(fieldsetsItem));
  });
}

//функция, отключающая валидацию
function disableValidation(settings) {
  //получим список валидируемых форм
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((formsItem) => {
    let i = 0;
    //удалим обработчики со всех наборов полей
    const fieldsets = Array.from(formsItem.querySelectorAll(settings.fieldsetSelector));
    fieldsets.forEach((fieldsetsItem) => {
      const inputs = Array.from(fieldsetsItem.querySelectorAll(settings.inputSelector));
      inputs.forEach((inputsItem) => {
        inputsItem.removeEventListener('submit', handlerName[i]);
        i++;
      });
    });
  });
}