/*
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

*/

//функция, отображающая сообщение об ошибки
function showErrorMessage(fieldset, inputsItem) {
  //определим span для выведения ошибки
  const errorItem = fieldset.querySelector(`.${inputsItem.id}-error`);
  //подсветим input с ошибкой
  inputsItem.classList.add(settings.inputErrorClass);
  //запишем текст ошибки в span
  errorItem.textContent = inputsItem.validationMessage;
  //отобразим span с ошибкой
  errorItem.classList.add(settings.errorClass);
}

//функция, отображающая или скрывающая сообщение об ошибке на основании 
//валидности input 
function validateInput(fieldset,inputsItem) {
  if(inputsItem.validity.valid) {
    hideErrorMessage(fieldset, inputsItem);    
  } else {
    showErrorMessage(fieldset, inputsItem);    
  }
}

//функция, проверяющая набор inputs на валидность
function checkInput(inputs) {
  //проверим, есть ли хотя бы один невалидный input
  //если true, то нашелся хотя бы один невалидный input
console.log(inputs);

inputs.forEach( (item) => { 
  console.log(item);
  console.log(item.validity);

});
  return !inputs.some( (inputsItem) => {
    //вызывается пока не вернется true, а мы ищем хотя бы один невалидный 
console.log('checkInput '+inputsItem+' is '+inputsItem.validity.valid)   
    return !inputsItem.validity.valid;
  });
}

//функция, меняющая состояние кнопки submit на основании валидности inputs
function toggleButtonState(inputs, submitButton) {
  //проверим массив inputs на валидность
  if(checkInput(inputs)) {
    submitButton.classList.remove(settings.inactiveButtonClass);
  } else {
    submitButton.classList.add(settings.inactiveButtonClass);
  }
}

//функция, устанавливающая обработчик на набор полей
function setEventListener(fieldset) {
  //найдем все inputs в наборе полей
  const inputs = Array.from(fieldset.querySelectorAll(settings.inputSelector));
  //найдем кнопку submit
  const submitButton = fieldset.querySelector(settings.submitButtonSelector);
  //при инициализации проведем валидацию и на ее основании определим состояние кнопки submit
  toggleButtonState(inputs,submitButton);
console.log('toggled');
  //навесим обработчики на ввод в inputs
  inputs.forEach((inputsItem) => {
    inputsItem.addEventListener('input', () => {
      //отобразим или скроем ошибку на основании валидности input
      validateInput(fieldset,inputsItem);
      //определим состояние кнопки по результатам валидации
      toggleButtonState(inputs,submitButton);
console.log('toggled');
    });
  });
}

//функция, активизирующая валидацию с заданными параметрами:
//formSelector - общий класс для валидируемых форм
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
    fieldsets.forEach( (fieldsetsItem) => setEventListener(fieldsetsItem));
  });
}