//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__button-close');

//находим popup в DOM
const popup = document.querySelector('.popup');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_about');

//находим поля в профиле
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

//функция открывающая/закрывающая popup
function popupSwitch() {
    popup.classList.toggle('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = jobInput.value;
    popupSwitch();
}

// обработчик нажатия кнопок редактирования профиля и сохранить/закрыть
function profileEdit() {
    popupSwitch();
    //если popup открылся   
    if (popup.classList.contains('popup_opened')) {
        nameInput.value = nameProfile.textContent;
        jobInput.value = aboutProfile.textContent;
    }
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//прикрепляем обработчики к кнопкам
buttonEdit.addEventListener('click', profileEdit);
buttonClose.addEventListener('click', profileEdit);