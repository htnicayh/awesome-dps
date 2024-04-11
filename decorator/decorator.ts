interface Order {
    calculate(): number;
}

class BaseOrder implements Order {
    calculate = (): number => {
        return 100;
    };
}

abstract class DecoratorOrder implements Order {
    constructor(protected _order: Order) {}

    abstract calculate(): number;
}

class DiscountOrder extends DecoratorOrder {
    calculate = (): number => {
        const basePrice = this._order.calculate();
        const discount = basePrice * 0.9;
        return Math.round(discount);
    };
}

class TaxOrder extends DecoratorOrder {
    calculate = (): number => {
        const basePrice = this._order.calculate();
        const tax = basePrice * 1.1;
        return Math.round(tax);
    };
}

const discount = new DiscountOrder(new BaseOrder());
const tax = new TaxOrder(new BaseOrder());
const discountWithTax = new TaxOrder(new DiscountOrder(new BaseOrder()));

console.log('Discount: ', discount.calculate());
console.log('Tax: ', tax.calculate());
console.log('Discount + Tax: ', discountWithTax.calculate());
