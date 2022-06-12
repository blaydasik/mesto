//находим template и его элементы в DOM
const cardTemplate = document.querySelector('.card_template').content;
const cardImage = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__title');
const cards = document.querySelector('.cards');

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

//функция, добавляющая карточку на страницу
function addCard(cardToAdd) {
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);
    const newImg = newCard.querySelector('.card__image');
    newCard.querySelector('.card__title').textContent=cardToAdd.title;
    newImg.src=cardToAdd.img;
    newImg.alt=cardToAdd.title;
    cards.appendChild(newCard);
}

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

//массив с карточками при загрузке страницы
const initialCards = [
    {
        title: 'Голден ретривер',
        img: './images/golden-retriever.jpg'
    },
    {
        title: 'Цвергшнауцер',
        img: './images/zvergschnaucer.jpg'
    },
    {
        title: 'Вельш корги пемброк',
        img: './images/velsh-corgi-pembrok.jpg'
    },
    {
        title: 'Лабрадор',
        img: './images/labrador.jpg'
    },
    {
        title: 'Сибирский хаски',
        img: './images/siberian-husky.jpg'
    },
    {
        title: 'Большая компания',
        img: './images/big-company.jpg'
    }
];

//добавляем инициализированные карточки
for( let i=0; i<6; i++) {
    addCard(initialCards[i]);
}