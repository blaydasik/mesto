export class Card {

  constructor(cardData, templateSelector, handleCardClick, handleDeleteCard) {
    this._title = cardData.title;
    this._src = cardData.img;
    this._alt = cardData.title;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;    
  }

  //приватный метод для получения шаблона разметки карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  //частный метод для заполения карточки данными
  fillInCard() {
    this._element = this._getTemplate();
    //выберем все нужные элементы
    this._newImg = this._element.querySelector('.card__image');
    this._buttonLike = this._element.querySelector('.card__button-like');
    this._buttonDelete = this._element.querySelector('.card__button-delete');
    //добавим обработчики
    this._setEventListeners();
    //зададим необходимые свойства карточке    
    this._newImg.src = this._src;
    this._newImg.alt = this._alt;
    this._element.querySelector('.card__title').textContent = this._title;

    //вернём элемент наружу
    return this._element;
  }

  //навесим обработчики
  _setEventListeners() {
    //на like   
    this._buttonLike.addEventListener('click', () => this._handleLikeButton());

    //на удаление карточки    
    this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
    

    //по клику на картинку
    this._newImg.addEventListener('click', () => {
      this._handleCardClick({ title: this._title, img: this._src });
    });
  }

  //обработчик лайка
  _handleLikeButton() {
    this._buttonLike.classList.toggle('card__button-like_active');
  }

  //обработчик удаления карточки
  _handleDeleteButton() {

    this._element.remove();
    this._element = null;
  }
}