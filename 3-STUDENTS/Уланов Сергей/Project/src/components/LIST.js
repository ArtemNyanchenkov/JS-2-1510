import Item from './ITEM.js'

export default class List {
    constructor(basket, container, url){
        this.items = [];
        this.basket = basket;
        this.container = this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON'+url;
        
        this._init();
    }
    _init() {
        
        //this.basket = basket;
        // this.items = getItems();
        this._get(this.url)
        .then(date => {
            this.items = this.type === 'catalog' ? date : date.content;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })

        
    }
    _get(url) {
        return fetch(url).then(d => d.json())
    }

    _render() {
        let htmlStr = '';
        
        this.items.forEach((item) => {
            htmlStr += new Item(item, this.type).render();
        });
        this.container.innerHTML = htmlStr;
    }
}