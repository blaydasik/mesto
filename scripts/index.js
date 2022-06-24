//параметры валидации:
//formSelector - общий класс для валидируемых форм
//inputSelector - общий класс для валидируемых inputs
//submitButtonSelector - общий класс для кнопок submit
//inactiveButtonClass - модификатор для неактивного состояния кнопки submit
//inputErrorClass - модификатор для невалидного состояния iтput
//errorClass - модификатор для активного состояния ошибки
const settings = {
    formSelector: '.popup__form',
    fieldsetSelector: '.popup__fieldset',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

//находим template и его элементы в DOM
const cardTemplate = document.querySelector('.card-template').content;
const card = cardTemplate.querySelector('.card');
const cards = document.querySelector('.cards');

//находим кнопки в DOM
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseList = document.querySelectorAll('.popup__button-close');
const buttonAdd = document.querySelector('.profile__add-button');

//находим popups в DOM
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupPictureView = document.querySelector('.popup_type_picture-view');

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

//находим поля для вставки значений в popup
const popupImageTitle = popupPictureView.querySelector('.popup__image-title');
const popupImage = popupPictureView.querySelector('.popup__image');

//сохраним функции - обработчики слушателей клика по оверлею и нажатия Esc
let listenerClosePopupOnClick = null;
let listenerClosePopupOnEsc = null;

//функция, создающая карточку
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
    newImg.addEventListener('click', () => viewImage(cardData));
    //зададим необходимые свойства карточке
    newCard.querySelector('.card__title').textContent = cardData.title;
    newImg.src = cardData.img;
    newImg.alt = cardData.title;
    return newCard;
}

//функция, открывающая картинку для просмотра
function viewImage(currentCard) {
    popupImageTitle.textContent = currentCard.title;
    popupImage.src = currentCard.img;
    popupImage.alt = currentCard.title;
    openPopup(popupPictureView);
}

//функция открывающая popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    listenerClosePopupOnClick = (evt) => closePopupOnClick(popup, evt);
    listenerClosePopupOnEsc = (evt) => closePopupOnEsc(popup, evt);
    popup.addEventListener('click', listenerClosePopupOnClick);
    document.addEventListener('keydown', listenerClosePopupOnEsc);
}

//функция закрывающая popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//обработчик отправки формы редактирования профиля
function handleSubmitEditProfile(evt) {
    //предотвратим submit при нажатии enter для невалидной формы
    if (!evt.submitter.classList.contains(settings.inactiveButtonClass)) {
        nameProfile.textContent = nameInput.value;
        aboutProfile.textContent = jobInput.value;
        //отключим валидацию
        settings.formSelector = '.popup__form_type_profile';
        disableValidation(settings);
        closePopup(popupProfile);
    }
}

//обработчик отправки формы добавления карточки
function handleSubmitAddCard(evt) {
    //предотвратим submit при нажатии enter для невалидной формы
    if (!evt.submitter.classList.contains(settings.inactiveButtonClass)) {
        const cardData = {
            title: titleInput.value,
            img: linkInput.value
        }
        const card = createCard(cardData);
        cards.prepend(card);
        evt.target.reset();
        closePopup(popupAddCard);
        //отключим валидацию
        settings.formSelector = '.popup__form_type_add-card';
        disableValidation(settings);
    }
}

// Прикрепляем обработчики к формам:
// они будут следить за событием “submit” - «отправка»
formProfile.addEventListener('submit', handleSubmitEditProfile);
formAddCard.addEventListener('submit', handleSubmitAddCard);

//прикрепляем обработчики к кнопкам
buttonEdit.addEventListener('click', function () {
    openEditProfilePopup(popupProfile);
});

// обработчик нажатия кнопки редактирования профиля
function openEditProfilePopup(popup) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = aboutProfile.textContent;
    settings.formSelector = '.popup__form_type_profile';
    enableValidation(settings);
    openPopup(popup);
}

//обработчик нажатия кнопки добавления карточки
buttonAdd.addEventListener('click', function (evt) {
    settings.formSelector = '.popup__form_type_add-card';
    enableValidation(settings);
    openPopup(popupAddCard);
});

//обработчик нажатий кнопок закрыть
buttonCloseList.forEach(function (item) {
    item.addEventListener('click', function (evt) {
        //определим, какой popup должен закрыться        
        const popupCurrent = evt.target.closest('.popup');
        //если это не popup картинки
        if (!popupCurrent.classList.contains('popup_type_picture-view')) {
            //найдем форму
            const formCurrent = popupCurrent.querySelector(settings.formSelector);
            //очистим поля формы для формы добавления картинок
            if (formCurrent.classList.contains('popup__form_type_add-card')) formCurrent.reset();
            //отключим валидацию
            settings.formSelector = '.' + formCurrent.classList[1];
            disableValidation(settings);
        };
        //удалим слушателей
        popupCurrent.removeEventListener('click', listenerClosePopupOnClick);
        document.removeEventListener('keydown', listenerClosePopupOnEsc);
        closePopup(popupCurrent);
    });
});

//обработчик клика по overlay
function closePopupOnClick(popup, evt) {
    if (evt.target.classList.contains('popup_opened')) {
        //для popups с формами отключим валидацию
        if (!popup.classList.contains('popup_type_picture-view')) {
            disableValidation(settings);
        }
        closePopup(popup);
    }
}

//обработчик нажатия на ESC
function closePopupOnEsc(popup, evt) {
    if (evt.key === 'Escape') {
        //для popups с формами отключим валидацию
        if (!popup.classList.contains('popup_type_picture-view')) {
            disableValidation(settings);
        }
        closePopup(popup);
    }
}

//добавляем инициализированные карточки
initialCards.forEach((item) => {
    const card = createCard(item);
    cards.prepend(card);
});