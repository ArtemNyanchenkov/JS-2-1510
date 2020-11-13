import ITEM from './ITEM.js'

export default class List {
    constructor (basket, container, url){
        this.items = [];
        this.basket = basket;
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init();
        this._init();
    }
    _init() {
        // this.items = getItems();
        this._get(this.url)
        .then(data => {
            this.items = this.basket ? data : data.content;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })

        // this._handleEvents();
    }
    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    }
    _render() {
        let htmlStr = '';
        let type = this.constructor.name.toLowerCase();
        this.items.forEach((item) => {
            htmlStr +=  new ITEM(item, type).render();
        });
        this.container.innerHTML = htmlStr;
    }
}