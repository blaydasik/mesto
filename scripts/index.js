//находим template и его элементы в DOM
const cardTemplate = document.querySelector('.card-template').content;
const card = cardTemplate.querySelector('.card');
const cards = document.querySelector('.cards');

//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseList = document.querySelectorAll('.popup__button-close');
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
function createCard(cardData) {  
    const newCard = card.cloneNode(true);  
    const newImg = newCard.querySelector('.card__image');
    //навесим обрабочик на like 
    const buttonLike = newCard.querySelector('.card__button-like');
    buttonLike.addEventListener('click', () => {
        buttonLike.classList.toggle('card__button-like_active');
    });
    //навесим обработчик на удаление карточки
    const buttonDelete = newCard.querySelector('.card__button-delete');
    buttonDelete.addEventListener('click', () => {
        newCard.remove();
    });
    //навесим обработчик по клику на картинку
    newImg.addEventListener('click', () => viewImage(newCard));
    //зададим необходимые свойства карточке
    newCard.querySelector('.card__title').textContent=cardData.title;
    newImg.src=cardData.img;
    newImg.alt=cardData.title; 
    return(newCard);   
}

//функция, открывающая картинку для просмотра
function viewImage(currentCard) {
    const currentCardImg = currentCard.querySelector('.card__image');
    popupImageTitle.textContent = currentCard.querySelector('.card__title').textContent;
    popupImage.src = currentCardImg.src;
    popupImage.alt = currentCardImg.alt;
    openPopup(popupPictureView);   
}

//функция открывающая popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

//функция закрывающая popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//обработчик отправки формы редактирования профиля
function submitFormEditProfile(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = jobInput.value;
    closePopup(popupProfile);
}

//обработчик отправки формы добавления карточки
function submitFormAddCard(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    const cardData={
        title: titleInput.value,
        img: linkInput.value
    }
    const card = createCard(cardData);
    cards.prepend(card); 
    evt.target.reset();
    closePopup(popupAddCard);
}

// обработчик нажатия кнопки редактирования профиля
function editProfile(popup) {    
    nameInput.value = nameProfile.textContent;
    jobInput.value = aboutProfile.textContent;
    openPopup(popup);
}

// Прикрепляем обработчики к формам:
// они будут следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', submitFormEditProfile);
formAddCard.addEventListener('submit', submitFormAddCard);

//прикрепляем обработчики к кнопкам
buttonEdit.addEventListener('click', function() {
    editProfile(popupProfile);
});
buttonCloseList.forEach(function(item) {
    item.addEventListener('click', function(evt) {
        //определим, какой popup должен закрыться        
        const popupCurrent = evt.target.closest('.popup');
        closePopup(popupCurrent);
    });
});
buttonAdd.addEventListener('click', function() {
    openPopup(popupAddCard);
});

//добавляем инициализированные карточки
for( let i=0; i<6; i++) {
    
}
initialCards.forEach( (item) => {
    const card = createCard(item);
    cards.prepend(card);
});