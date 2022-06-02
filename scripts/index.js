//находим кнопки в DOM
let buttonEdit = document.querySelector('.profile__edit-button');
let buttonAdd = document.querySelector('.profile__add-button');
let buttonLike = document.querySelector('.card__button-like');
let buttonClose = document.querySelector('.popup__button-close');
let buttonSave = document.querySelector('.popup__button-save');

//находим popup в DOM
let popup = document.querySelector('.popup');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_about');

//находим поля в профиле
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

//функция сохранения результата ввода в popup
function saveResult() {
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = jobInput.value;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    saveResult();
}

//функция открывающая/закрывающая popup
function popupSwitch() {
    popup.classList.toggle('popup_opened');
}

//обработчик нажатия клавиш
function keyPressed(evt) {
    if(evt.code === 'Escape') {
        popupSwitch();
        document.removeEventListener('keydown',keyPressed);      
    } else {
        if(evt.code === 'Enter') {
            popupSwitch();
            saveResult()
            document.removeEventListener('keydown',keyPressed);      
        }
    }
}

// обработчик нажатия кнопок редактирования профиля и сохранить/закрыть
function profileEdit(evt) { 
    popupSwitch(); 
    //popup открылся   
    if(popup.classList.contains('popup_opened')) {  
        document.addEventListener('keydown',keyPressed);
        nameInput.value = nameProfile.textContent;
        jobInput.value = aboutProfile.textContent;
    } else { //popup закрылся
        document.removeEventListener('keydown',keyPressed);
        if(evt.currentTarget.classList.contains('popup__button-save')) {
            saveResult();
        }
    }
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//прикрепляем обработчики к кнопкам
buttonEdit.addEventListener('click', profileEdit);
buttonClose.addEventListener('click', profileEdit);
buttonSave.addEventListener('click', profileEdit);