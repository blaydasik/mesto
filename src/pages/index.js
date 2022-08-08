//импорт главного файла стилей
import './index.css';

//импортируем из модулей
//класс для отрисовки элементов
import { Section } from '../components/Section.js'
//класс popup'ов
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
//массив карточек
import { initialCards } from '../utils/cards.js';
//класс карточки
import { Card } from '../components/Сard.js';
//класс для валидации формы
import { FormValidator } from '../components/FormValidator.js';
//класс информации о пользователе
import { UserInfo } from '../components/UserInfo.js';
//константы
import { validationSettings } from '../utils/constants.js';

//настройки для классов
const cardTemplate = '.card-template';

//селектор контейнера для добавления карточек
const cardsContainer = '.cards';

//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

//создадим экземпляры классов popup'ов
const popupProfile = new PopupWithForm('.popup_type_profile', handleSubmitEditProfile);
popupProfile.setEventListeners();
const popupAddCard = new PopupWithForm('.popup_type_add-card', handleSubmitAddCard);
popupAddCard.setEventListeners();
const popupPictureView = new PopupWithImage('.popup_type_picture-view');
popupPictureView.setEventListeners();

//Находим формы в DOM
const formProfile = document.querySelector('.popup__form_type_profile');
const formAddCard = document.querySelector('.popup__form_type_add-card');
//находим поля форм в DOM
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_about');

//создадим класс информации о пользователе
const userInformation = new UserInfo({ selectorName: '.profile__name', selectorAbout: '.profile__about' });

//функция, создающая карточку
function createCard(cardData, cardTemplate, popupPictureView) {
    const card = new Card(cardData, cardTemplate, popupPictureView.open.bind(popupPictureView));
    const cardElement = card.fillInCard();
    return (cardElement);
}

//обработчик submit формы редактирования профиля
function handleSubmitEditProfile(userData) {
    userInformation.setUserInfo(userData);
    popupProfile.close();
};

//обработчик submit формы добавления карточки
function handleSubmitAddCard(cardData) {
    cardList.addItem(createCard(cardData, cardTemplate, popupPictureView));
    popupAddCard.close();
}

//обработчик нажатия кнопки редактирования профиля
function handleEditProfile() {
    const { name, about } = userInformation.getUserInfo();
    nameInput.value = name;
    jobInput.value = about;
    formProfileValidator.validateOnOpen();
    popupProfile.open();
}

//навесим обработчик на кнопку редактирования профиля
buttonEdit.addEventListener('click', handleEditProfile);

//обработчик нажатия кнопки добавления карточки
buttonAdd.addEventListener('click', function () {
    formAddCardValidator.validateOnOpen();
    popupAddCard.open();
});

//добавляем инициализированные карточки
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item, cardTemplate, popupPictureView));
    }
}, cardsContainer);
cardList.renderElements();

//включим валидацию для форм согласно заданным настройкам
const formProfileValidator = new FormValidator(validationSettings, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationSettings, formAddCard);
formAddCardValidator.enableValidation();