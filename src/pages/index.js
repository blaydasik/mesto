//импорт главного файла стилей
//import './index.css'; 

//импортируем из модулей
//класс для отрисовки элементов
import { Section } from '../components/Section.js'
//массив карточек
import { initialCards } from '../components/cards.js';
//класс карточки
import { Card } from '../components/Сard.js';
//класс для валидации формы
import { FormValidator } from '../components/FormValidator.js';

//параметры валидации:
//formSelector - общий класс для валидируемых форм
//fieldsetSelector - общий класс для fildset'ов
//inputSelector - общий класс для валидируемых inputs
//submitButtonSelector - общий класс для кнопок submit
//inactiveButtonClass - модификатор для неактивного состояния кнопки submit
//inputErrorClass - модификатор для невалидного состояния iтput
//errorClass - модификатор для активного состояния ошибки
const validationSettings = {
    formSelector: '.popup__form',
    fieldsetSelector: '.popup__fieldset',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//настройки для классов
const cardTemplate = '.card-template';

//селектор контейнера для добавления карточек
const cardsContainer = '.cards';

//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonSaveCard = document.getElementById('popup__button-save_card');

//находим popups в DOM
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupPictureView = document.querySelector('.popup_type_picture-view');
const popupCommonList = document.querySelectorAll('.popup');

//находим поля для вставки значений в popup
const popupImageTitle = popupPictureView.querySelector('.popup__image-title');
const popupImage = popupPictureView.querySelector('.popup__image');

//Находим формы в DOM
const formProfile = document.querySelector('.popup__form_type_profile');
const formAddCard = document.querySelector('.popup__form_type_add-card');
//находим поля форм в DOM
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_about');
const titleInput = formAddCard.querySelector('.popup__input_type_title');
const linkInput = formAddCard.querySelector('.popup__input_type_link');

//находим поля для вставки значений в профиле
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');

//функция, создающая карточку
function createCard(cardData, cardTemplate, viewImage) {
    const card = new Card(cardData, cardTemplate, viewImage);
    const cardElement = card.fillInCard();
    return (cardElement);
}

//функция, открывающая картинку для просмотра
function viewImage(cardData) {
    popupImageTitle.textContent = cardData.title;
    popupImage.src = cardData.img;
    popupImage.alt = cardData.title;
    openPopup(popupPictureView);
}

//обработчик нажатия на ESC
const closePopupOnEsc = (evt) => {
    if (evt.key === 'Escape') {
        //определим открытый popup
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

//функция открывающая popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
}

//функция закрывающая popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEsc);
}

//обработчик отправки формы редактирования профиля
function handleSubmitEditProfile(evt) {
    //отменим стандартную обработку submit
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = jobInput.value;
    closePopup(popupProfile);
};

//обработчик отправки формы добавления карточки
function handleSubmitAddCard(evt, cardTemplate) {
    //отменим стандартную обработку submit
    evt.preventDefault();
    const cardData = {
        title: titleInput.value,
        img: linkInput.value
    }
    const cardList = new Section({
        items: [cardData],
        renderer: (item) => {
            cardList.addItem(createCard(item, cardTemplate, viewImage));
        }
    }, cardsContainer);
    cardList.renderElements();
    closePopup(popupAddCard);
}

// Прикрепляем обработчики к формам:
// они будут следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleSubmitEditProfile);
formAddCard.addEventListener('submit', (evt) => { handleSubmitAddCard(evt, cardTemplate) });

//прикрепим обработчик клика на overlay, он же отслеживает 
//нажатия на кнопку закрытия popup
popupCommonList.forEach((popupItem) => {
    popupItem.addEventListener('mousedown', (evt) => {
        const clickedElementCL = evt.target.classList;
        if ((clickedElementCL.contains('popup_opened')) ||
            (clickedElementCL.contains('popup__button-close'))) {
            closePopup(popupItem);
        }
    });
});

//обработчик нажатия кнопки редактирования профиля
buttonEdit.addEventListener('click', function () {
    nameInput.value = nameProfile.textContent;
    jobInput.value = aboutProfile.textContent;
    formProfileValidator.validateOnOpen();
    openPopup(popupProfile);
});

//обработчик нажатия кнопки добавления карточки
buttonAdd.addEventListener('click', function () {
    formAddCard.reset();
    formAddCardValidator.validateOnOpen();
    openPopup(popupAddCard);
});

//добавляем инициализированные карточки
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item, cardTemplate, viewImage));
    }
}, cardsContainer);
cardList.renderElements();

//включим валидацию для форм согласно заданным настройкам
const formProfileValidator = new FormValidator(validationSettings, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationSettings, formAddCard);
formAddCardValidator.enableValidation();