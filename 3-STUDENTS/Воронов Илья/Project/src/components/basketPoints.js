export default class BasketPoints {
    constructor(items) {
        this.items = items;
    }

    result() {
        let sum = 0;
        for (let item of this.items) {
            sum += item.amount;
        }
        return sum;
    }

    render() {
        return `
                                <span>${this.result()}</span>
           `;
    }
}