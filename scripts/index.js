//находим template и его элементы в DOM
const cardTemplate = document.querySelector('.card_template').content;
const cardImage = document.querySelector('.card__image');
const cardTitle = document.querySelector('.card__title');
const cards = document.querySelector('.cards');

//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelectorAll('.popup__button-close');
const buttonAdd = document.querySelector('.profile__add-button');

//находим popupы в DOM
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupPictureView = document.querySelector('.popup_type_picture-view');

// Находим формы в DOM
const formProfile = document.querySelector('.popup__form_type_profile');
const formAddCard = document.querySelector('.popup__form_type_add-card');
// Находим поля форм в DOM
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_about');
const titleInput = formAddCard.querySelector('.popup__input_type_title');
const linkInput = formAddCard.querySelector('.popup__input_type_link');

//находим поля для вставки значений в профиле
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

//находим поля для вставки значений в popup
const popupImageTitle = popupPictureView.querySelector('.popup__image-title');
const popupImage = popupPictureView.querySelector('.popup__image');

//функция, добавляющая карточку на страницу
function addCard(cardToAdd) {
    const newCard = cardTemplate.querySelector('.card').cloneNode(true);
    const newImg = newCard.querySelector('.card__image');
    //навесим обрабочик на like 
    const buttonLike = newCard.querySelector('.card__button-like');
    buttonLike.addEventListener('click', cardLike);
    //навесим обработчик на удаление карточки
    const buttonDelete = newCard.querySelector('.card__button-delete');
    buttonDelete.addEventListener('click', cardDelete);
    //навесим обработчик по клику на картинку
    const clickOnImage = newCard.querySelector('.card__image');
    clickOnImage.addEventListener('click', imageView);
    //зададим необходимые свойства карточке
    newCard.querySelector('.card__title').textContent=cardToAdd.title;
    newImg.src=cardToAdd.img;
    newImg.alt=cardToAdd.title;
    cards.prepend(newCard);
}

//функция, реализующая like/dislike
function cardLike(evt) {
    //определим лайкнутую карточку
    const currentButton = evt.target;
    currentButton.classList.toggle('card__button-like_active');
}

//функция, удаляющая карточку
function cardDelete(evt) {
    //определим лайкнутую карточку
    const currentCard = evt.target.parentNode;
    currentCard.remove();
}

//функция, открывающая картинку для просмотра
function imageView(evt) {
    //определим карточку, где произошел клик на картинку
    currentCard = evt.target.parentNode;
    popupImageTitle.textContent = currentCard.querySelector('.card__title').textContent;
    popupImage.src = currentCard.querySelector('.card__image').src;
    popupImage.alt = currentCard.querySelector('.card__image').alt;
    popupSwitch(popupPictureView);   
}

//функция открывающая/закрывающая popup
function popupSwitch(popup) {
    popup.classList.toggle('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    //определим, в каком popup возникло событие submit 
    const popupCurrent = evt.target.parentNode.parentNode;
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    if(popupCurrent.classList.contains('popup_type_profile')) {
        nameProfile.textContent = nameInput.value;
        aboutProfile.textContent = jobInput.value;
    } else if(popupCurrent.classList.contains('popup_type_add-card')) {
        const cardToAdd={
            title: titleInput.value,
            img: linkInput.value
        }
        addCard(cardToAdd);    
    }
    popupSwitch(popupCurrent);
}

// обработчик нажатия кнопки редактирования профиля
function profileEdit(popup) {
    popupSwitch(popup);
    nameInput.value = nameProfile.textContent;
    jobInput.value = aboutProfile.textContent;
}

// Прикрепляем обработчики к формам:
// они будут следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', formSubmitHandler);

//прикрепляем обработчики к кнопкам
buttonEdit.addEventListener('click', function() {
    profileEdit(popupProfile);
});
buttonClose.forEach(function(item) {
    item.addEventListener('click', function(evt) {
        //определим, какой popup должен закрыться
        const popupCurrent = evt.target.parentNode.parentNode;
        popupSwitch(popupCurrent);
    });
});
buttonAdd.addEventListener('click', function() {
    popupSwitch(popupAddCard);
});

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