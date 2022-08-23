export class Api {

    //входные данные - адрес для запроса и объект заголовка
    constructor({ link, headers }) {
        this.link = link;
        this.headers = headers;
    }

    //приватный метод проверки ответа сервера
    _validateAnswer(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    //публичный метод, получающий информацию о пользователе с сервера
    downloadUserInfo() {
        return fetch(`${this.link}/users/me`, {
            headers: this.headers
        })
            .then(this._validateAnswer.bind(this));
    }

    
}