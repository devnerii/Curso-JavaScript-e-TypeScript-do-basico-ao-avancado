// Product -> increase, discount
// Shirt = Color, mug = material

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (quantify) {
  this.price += quantify;
};

Product.prototype.discount = function (quantify) {
  this.price -= quantify;
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

function Mug(name, price, material, stock) {
  Product.call(this, name, price);
  this.material = material;
  Object.defineProperty(this, "stock", {
    enumerable: true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function (value) {
    if (typeof value !== 'number') return;
      stock = value;
    },
  });
}
Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const mug = new Mug("Mug", 10, "Plastic");

const shirt = new Shirt("Shirt", 10, "Red");

console.log(shirt);
