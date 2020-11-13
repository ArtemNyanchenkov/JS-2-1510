export default class IndexUnit {

    constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
    }

    _get(url) {
        return fetch(url).then(d => d.json()); 
    }

    _render(Item) {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new Item(item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}