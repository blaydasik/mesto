


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

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
  toggleButtonState(inputList,buttonElement); 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList,buttonElement);
    });
  });
};



const hasInvalidInput = (inputList) => {
  return inputList.some( (inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
    buttonElement.classList.remove('button_inactive');
  }
}*/

//функция, проверяющая набор inputs на валидность
function checkInput(inputs) {
  //проверим, есть ли хотя бы один невалидный input
  //если true, то нашелся хотя бы один невалидный input 
  return inputs.some( (inputsItem) => {
    //вызывается пока не вернется true, а мы ищем хотя бы один невалидный
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
console.log(settings);
  const inputs = Array.from(fieldset.querySelectorAll(settings.inputSelector));
  //найдем кнопку submit
  const submitButton = fieldset.querySelector(settings.submitButtonSelector);
  //при инициализации проведем валидацию и на ее основании определим состояние кнопки submit
console.log('initialize button check');
  toggleButtonState(inputs,submitButton);
  //навесим обработчики на ввод в inputs
  inputs.forEach((inputsItem) => {
    inputsItem.addEventListener('input', () => {
      //отобразим или скроем ошибку на основании валидности input
      validateInput(fieldset,inputsItem);
      //определим состояние кнопки по результатам валидации
      toggleButtonState(inputs,submitButton);
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