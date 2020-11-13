
export default class Parent {
	constructor(container, url, my_item) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/' + url;
        this.my_item = my_item;
        this._init();
    }
    
    _get(url) {
        return fetch(url).then(d => d.json()) 
    }
    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new this.my_item(item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}