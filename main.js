(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialItems=r,this._renderer=o,this._container=document.querySelector(n)}var n,r;return n=t,(r=[{key:"renderElements",value:function(){this._initialItems.forEach(this._renderer.bind(this))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"deleteItem",value:function(e){e.remove(),e=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){var n=t.target.classList;(n.contains("popup_opened")||n.contains("popup__button-close"))&&e.close()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,n,r,o,u=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(o){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function f(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=u.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonSave=n._form.querySelector(".popup__button-save"),n._formValues={},n._handleFormSubmit=t,n._textOnButton=n._buttonSave.textContent,n._textUX="Сохранение...",n}return t=f,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),a(l(f.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),a(l(f.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(){this._buttonSave.textContent=this._buttonSave.textContent===this._textUX?this._textOnButton:this._textUX}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageTitle=t._popup.querySelector(".popup__image-title"),t._image=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){this._imageTitle.textContent=e.title,this._image.src=e.img,this._image.alt=e.title,h(b(a.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(r);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function E(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"open",value:function(e,t){this._cardElement=e,this._cardID=t,k(L(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardElement,e._cardID)})),document.addEventListener("keypress",(function(t){"Enter"===t.key&&e._handleFormSubmit(e._cardElement,e._cardID)})),k(L(a.prototype),"setEventListeners",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(r);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._src=t.link,this._alt=t.name,this._likeCounter=t.likes.length,this._templateSelector=n,this._handleCardClick=i,this._handleDeleteCard=a,this._handleLike=u,this._cardID=t._id,this._ownerID=t.owner._id,this._isMine=r,this._isLiked=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"fillInCard",value:function(){return this._element=this._getTemplate(),this._newImg=this._element.querySelector(".card__image"),this._likesCounterElement=this._element.querySelector(".card__likes-counter"),this._buttonLike=this._element.querySelector(".card__button-like"),this._buttonDelete=this._element.querySelector(".card__button-delete"),this._isMine||this._buttonDelete.remove(),this._isLiked&&this._buttonLike.classList.add("card__button-like_active"),this._setEventListeners(),this._newImg.src=this._src,this._newImg.alt=this._alt,this._element.querySelector(".card__title").textContent=this._title,this._likesCounterElement.textContent=this._likeCounter,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){e._handleLike(e._cardID,e._buttonLike.classList.contains("card__button-like_active"),e._handleLikeButton.bind(e))})),this._isMine&&this._buttonDelete.addEventListener("click",(function(){e._handleDeleteCard(e._element,e._cardID)})),this._newImg.addEventListener("click",(function(){e._handleCardClick({title:e._title,img:e._src})}))}},{key:"_handleLikeButton",value:function(e){this._buttonLike.classList.toggle("card__button-like_active"),this._likesCounterElement.textContent=e.likes.length}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationSettings=t,this._validatingForm=n,this._inputs=Array.from(n.querySelectorAll(this._validationSettings.inputSelector)),this._buttonSubmit=n.querySelector(this._validationSettings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showErrorMessage",value:function(e){var t=".popup__error"+"".concat(e.id).slice(5),n=this._validatingForm.querySelector(t);e.classList.add(this._validationSettings.inputErrorClass),n.textContent=e.validationMessage,n.classList.add(this._validationSettings.errorClass)}},{key:"_hideErrorMessage",value:function(e){var t=".popup__error"+"".concat(e.id).slice(5),n=this._validatingForm.querySelector(t);e.classList.remove(this._validationSettings.inputErrorClass),n.textContent="",n.classList.remove(this._validationSettings.errorClass)}},{key:"_validateInput",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e)}},{key:"_checkInput",value:function(){return!this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._checkInput(this._inputs)?this._buttonSubmit.removeAttribute("disabled"):this._buttonSubmit.setAttribute("disabled","disabled")}},{key:"_setEventListener",value:function(){var e=this;this._inputs.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}},{key:"validateOnOpen",value:function(){var e=this;this._toggleButtonState(),this._inputs.forEach((function(t){return e._hideErrorMessage(t)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.selectorName,r=t.selectorAbout,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._about.textContent=n,this._avatar.src=r}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.link,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.link=n,this.headers=r}var t,n;return t=e,(n=[{key:"_validateAnswer",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"downloadUserInfo",value:function(){return fetch("".concat(this.link,"/users/me"),{headers:this.headers}).then(this._validateAnswer.bind(this))}},{key:"downloadCards",value:function(){return fetch("".concat(this.link,"/cards"),{headers:this.headers}).then(this._validateAnswer.bind(this))}},{key:"setNewUserInfo",value:function(e){return fetch("".concat(this.link,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._validateAnswer.bind(this))}},{key:"addNewCard",value:function(e){return fetch("".concat(this.link,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._validateAnswer.bind(this))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.link,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._validateAnswer.bind(this))}},{key:"proceedLike",value:function(e,t){return fetch("".concat(this.link,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this.headers}).then(this._validateAnswer.bind(this))}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this.link,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._validateAnswer.bind(this))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),D={formSelector:".popup__form",fieldsetSelector:".popup__fieldset",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=".card-template",V=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__update-button"),F=new f(".popup_type_profile",(function(e){F.renderLoading(),Y.setNewUserInfo(e).then((function(e){W.setUserInfo(e),F.close()})).catch(Z.bind(this)).finally((function(){return F.renderLoading()}))}));F.setEventListeners();var J=new f(".popup_type_add-card",(function(e){J.renderLoading(),Y.addNewCard(e).then((function(e){$.addItem(ee(e,B,!0,!1,X,H,te)),J.close()})).catch(Z.bind(this)).finally((function(){return J.renderLoading()}))}));J.setEventListeners();var X=new m(".popup_type_picture-view");X.setEventListeners();var H=new j(".popup_type_confirm-delete",(function(e,t){Y.deleteCard(t).then((function(){$.deleteItem(e),H.close()})).catch(Z.bind(this))}));H.setEventListeners();var z=new f(".popup_type_update-avatar",(function(e){z.renderLoading(),Y.updateUserAvatar(e.avatar).then((function(e){W.setUserInfo(e),z.close()})).catch(Z.bind(this)).finally((function(){return z.renderLoading()}))}));z.setEventListeners();var $,G=document.querySelector(".popup__form_type_profile"),K=document.querySelector(".popup__form_type_add-card"),Q=document.querySelector(".popup__form_type_update-avatar"),W=new R({selectorName:".profile__name",selectorAbout:".profile__about",selectorAvatar:".profile__picture"}),Y=new x({link:"https://mesto.nomoreparties.co/v1/cohort-48",headers:{authorization:"cc89d0bb-cee2-4a96-a369-74755d4b41b1","Content-Type":"application/json"}});function Z(e){alert("Ошибка. Запрос не выполнен: ".concat(e))}function ee(e,t,n,r,o,i,a){return new P(e,t,n,r,o.open.bind(o),i.open.bind(i),a).fillInCard()}function te(e,t,n){Y.proceedLike(e,t).then((function(e){return n(e)})).catch(Z.bind(this))}Promise.all([Y.downloadUserInfo(),Y.downloadCards()]).then((function(e){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];W.setUserInfo(i),($=new t({items:a,renderer:function(e){var t=e.owner._id===i._id,n=e.likes.some((function(e){return e._id===i._id}));$.addItem(ee(e,B,t,n,X,H,te))}},".cards")).renderElements()})).catch(Z.bind(void 0)),V.addEventListener("click",(function(){var e=W.getUserInfo();F.setInputValues(e),ne.validateOnOpen(),F.open()})),M.addEventListener("click",(function(){re.validateOnOpen(),J.open()})),N.addEventListener("click",(function(){oe.validateOnOpen(),z.open()}));var ne=new q(D,G);ne.enableValidation();var re=new q(D,K);re.enableValidation();var oe=new q(D,Q);oe.enableValidation()})();