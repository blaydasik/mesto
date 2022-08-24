export class Card {

  constructor(cardData, templateSelector, isMine, isLiked, handleCardClick, 
    handleDeleteCard, handleLike) {
    this._title = cardData.name;
    this._src = cardData.link;
    this._alt = cardData.name;
    this._likeCounter = cardData.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLike = handleLike;
    this._cardID = cardData._id;
    this._ownerID = cardData.owner._id;
    this._isMine = isMine;
    this._isLiked = isLiked;
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

  //публичный метод для заполения карточки данными
  fillInCard() {
    this._element = this._getTemplate();
    //выберем все нужные элементы
    this._newImg = this._element.querySelector('.card__image');
    this._likesCounterElement = this._element.querySelector('.card__likes-counter');
    this._buttonLike = this._element.querySelector('.card__button-like');
    this._buttonDelete = this._element.querySelector('.card__button-delete');
    //если карточка не принадлежит пользователю, убираем кнопку удаления карточки
    if (!this._isMine) {
      this._buttonDelete.remove();
    }
    //если пользователь лайкал карточку, проставим лайк
    if(this._isLiked) {
      this._buttonLike.classList.add('card__button-like_active');
    }
    //добавим обработчики
    this._setEventListeners();
    //зададим необходимые свойства карточке    
    this._newImg.src = this._src;
    this._newImg.alt = this._alt;
    this._element.querySelector('.card__title').textContent = this._title;
    this._likesCounterElement.textContent = this._likeCounter;
    //вернём элемент наружу
    return this._element;
  }

  //навесим обработчики
  _setEventListeners() {
    //на like   
    this._buttonLike.addEventListener('click', () => 
    {      
      this._handleLike(this._cardID,
         this._buttonLike.classList.contains('card__button-like_active'), 
         this._handleLikeButton.bind(this));
    });

    //на удаление карточки 
    if (this._isMine) {
      this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteCard(this._element, this._cardID);
      });
    }

    //по клику на картинку
    this._newImg.addEventListener('click', () => {
      this._handleCardClick({ title: this._title, img: this._src });
    });
  }

  //обработчик лайка
  _handleLikeButton(data) {    
    this._buttonLike.classList.toggle('card__button-like_active');
    this._likesCounterElement.textContent = data.likes.length;
  }

}