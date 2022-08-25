export class Section {
  //на вход объект, содержащий массив добавляемых элементов и функцию-отрисовки
  //второй параметр - слектор контейнера, куда добавлять
  constructor({ items, renderer }, containerSelector) {
    this._initialItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //публичный метод для отрисовки всех элементов
  renderElements() {
    this._initialItems.forEach(this._renderer.bind(this));
  }

  //публичный метод для добавления DOM-элемента в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

  //публичный метод для удаления DOM-элемента со страницы
  deleteItem(element) {
    element.remove();
    element = null;
  }

}