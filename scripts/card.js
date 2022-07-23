export class Card {

  constructor(cardData, templateSelector) {
    this._title = cardData.title;
    this._src = cardData.img;
    this._alt = cardData.title;
  }

  //приватный метод для получения шаблона разметки карточки
  _getTemplate() {
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement;  
  }

  //частный метод для заполения карточки данными
  fillInCard() {
    this._element = this._getTemplate();
    //зададим необходимые свойства карточке
    const newImg = this._element.querySelector('.card__image');
    newImg.src = this._src;
    newImg.alt = this._alt;  
    this._element.querySelector('.card__title').textContent = this._title;
  
    //вернём элемент наружу
    return this._element;
  }
}

//функция, создающая карточку
function createCard(cardData) {

  
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
}