//импорт главного файла стилей
import './index.css';

//импортируем из модулей
//класс для отрисовки элементов
import { Section } from '../components/Section.js'
//класс popup'ов
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
//класс карточки
import { Card } from '../components/Сard.js';
//класс для валидации формы
import { FormValidator } from '../components/FormValidator.js';
//класс информации о пользователе
import { UserInfo } from '../components/UserInfo.js';
//класс для работы с Api
import { Api } from '../components/Api.js';
//константы
import { validationSettings } from '../utils/constants.js';
import { apiSettings } from '../utils/constants.js';

//настройки для классов
const cardTemplate = '.card-template';

//селектор контейнера для добавления карточек
const cardsContainer = '.cards';

//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonUpdate = document.querySelector('.profile__update-button');

//создадим экземпляры классов popup'ов
const popupProfile = new PopupWithForm('.popup_type_profile', handleSubmitEditProfile);
popupProfile.setEventListeners();
const popupAddCard = new PopupWithForm('.popup_type_add-card', handleSubmitAddCard);
popupAddCard.setEventListeners();
const popupPictureView = new PopupWithImage('.popup_type_picture-view');
popupPictureView.setEventListeners();
const popupConfirmDeleteCard = new PopupWithConfirmation('.popup_type_confirm-delete', handleDeleteCard);
popupConfirmDeleteCard.setEventListeners();
const popupUpdateAvatar = new PopupWithForm('.popup_type_update-avatar', handleSubmitUpdateAvatar);
popupUpdateAvatar.setEventListeners();

//Находим формы в DOM
const formProfile = document.querySelector('.popup__form_type_profile');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const formUpdateAvatar = document.querySelector('.popup__form_type_update-avatar');
//находим поля форм в DOM
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_about');

//создадим класс информации о пользователе
const userInformation = new UserInfo({ selectorName: '.profile__name', selectorAbout: '.profile__about', selectorAvatar: '.profile__picture' });

//массив карточек
let cardList;

//создадим класс для работы с Api
const workingApi = new Api(apiSettings);

//обработчик ошибок в запросе
function proceedError(err) {
  alert(`Ошибка. Запрос не выполнен: ${err}`);
}

//получим информацию о пользователе и массив карточек с сервера
Promise.all([workingApi.downloadUserInfo(), workingApi.downloadCards()])
  .then(([userData, cardsData]) => {
    userInformation.setUserInfo(userData);
    //добавим карточки на страницу
    cardList = new Section({
      items: cardsData,
      renderer: (item) => {
        //проверим, принадлежит ли карточка пользователю
        const isMine = (item.owner._id === userData._id);
        //проверим лайкал ли пользователь карточку
        const isLiked = item.likes.some((likesArray) => {
          return (likesArray._id === userData._id);
        });
        cardList.addItem(createCard(item, cardTemplate, isMine, isLiked,
          popupPictureView, popupConfirmDeleteCard, handleLike));
      }
    }, cardsContainer);
    cardList.renderElements();
  })
  .catch(proceedError.bind(this));

//функция, создающая карточку
function createCard(cardData, cardTemplate, isMine, isLiked, popupPictureView,
  popupConfirmDeleteCard, handleLike) {
  const card = new Card(cardData, cardTemplate, isMine, isLiked,
    popupPictureView.open.bind(popupPictureView),
    popupConfirmDeleteCard.open.bind(popupConfirmDeleteCard),
    handleLike);
  const cardElement = card.fillInCard();
  return (cardElement);
}

//обработчик submit формы добавления карточки
function handleSubmitAddCard(cardData) {
  popupAddCard.renderLoading();
  workingApi.addNewCard(cardData)
    //при успешном выполнении обновляем данные на странице
    .then((data) => {
      cardList.addItem(createCard(data, cardTemplate, true, false,
        popupPictureView, popupConfirmDeleteCard, handleLike));
      popupAddCard.close();
    })
    .catch(proceedError.bind(this))
    .finally( () => popupAddCard.renderLoading());
}

//функция для удаления карточки с сервера
function handleDeleteCard(cardElement, cardID) {
  workingApi.deleteCard(cardID)
    //при успешном выполнении обновляем данные на странице
    .then(() => {
      cardList.deleteItem(cardElement);
      popupConfirmDeleteCard.close();
    })
    .catch(proceedError.bind(this));
}

//функция, обрабатывающая нажатие на лайк
function handleLike(cardId, state, renderLike) {
  workingApi.proceedLike(cardId, state)
    //при успешном выполнении обновляем данные на странице
    .then((data) => renderLike(data))
    .catch(proceedError.bind(this));
}

//обработчик нажатия кнопки редактирования профиля
function handleEditProfile() {
  const { name, about } = userInformation.getUserInfo();
  nameInput.value = name;
  jobInput.value = about;
  formProfileValidator.validateOnOpen();
  popupProfile.open();
}

//обработчик submit формы редактирования профиля
function handleSubmitEditProfile(userData) {
  popupProfile.renderLoading();  
  workingApi.setNewUserInfo(userData)
    //при успешном выполнении обновляем данные на странице
    .then((data) => {
      userInformation.setUserInfo(data);
      popupProfile.close();
    })
    .catch(proceedError.bind(this))
    .finally( () => popupProfile.renderLoading() );
}

//обработчик submit формы обновления аватара
function handleSubmitUpdateAvatar(link) {
  popupUpdateAvatar.renderLoading();
  workingApi.updateUserAvatar(link.avatar)
    //при успешном выполнении обновляем данные на странице
    .then((data) => {
      userInformation.setUserInfo(data);
      popupUpdateAvatar.close();
    })
    .catch(proceedError.bind(this))
    .finally( () => popupUpdateAvatar.renderLoading());
}

//навесим обработчик на кнопку редактирования профиля
buttonEdit.addEventListener('click', handleEditProfile);

//обработчик нажатия кнопки добавления карточки
buttonAdd.addEventListener('click', function () {
  formAddCardValidator.validateOnOpen();
  popupAddCard.open();
});

//навесим обработчик на кнопку редактирования аватара
buttonUpdate.addEventListener('click', function () {
  formUpdateAvatarValidator.validateOnOpen();
  popupUpdateAvatar.open();
});

//включим валидацию для форм согласно заданным настройкам
const formProfileValidator = new FormValidator(validationSettings, formProfile);
formProfileValidator.enableValidation();
const formAddCardValidator = new FormValidator(validationSettings, formAddCard);
formAddCardValidator.enableValidation();
const formUpdateAvatarValidator = new FormValidator(validationSettings, formUpdateAvatar);
formUpdateAvatarValidator.enableValidation();