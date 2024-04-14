function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
}

Product.prototype.increase = function(increase) {
    this.price = this.price + (this.price * (increase / 100));
}

const p1 = new Product('Shirt', 50);

p1.discount(10);

const p2 = {
    name: 'Mug',
    price: 50,
}

Object.setPrototypeOf(p2, Product.prototype);
p2.increase(10)

console.log(p1);
console.log(p2);

const p3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 99
    },
    size: {
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 42
    }
})

p3.increase(10);
console.log(p3);