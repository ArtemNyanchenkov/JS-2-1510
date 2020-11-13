export default class BasketTotal {
    constructor(items) {
        this.items = items;
    }

    result() {
        let sum = 0;
        for (let item of this.items) {
            sum += item.productPrice * item.amount;
        }
        return sum;
    }

    render() {
        return `
                                <p>TOTAL</p>
                                    <p>$ <output name="result">${this.result()}</output></p>
           `;
    }
}