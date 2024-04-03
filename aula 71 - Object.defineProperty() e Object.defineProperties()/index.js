function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  Object.defineProperty(this, "stock", {
    enumerable: true, // show the key with for in and object
    value: stock, // value
    writable: false, // change the value
    configurable: true, // configurable (clear ou reconfigure)
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true, // show the key with for in and object
      value: name, // value
      writable: false, // change the value
      configurable: true, // configurable (clear ou reconfigure)
    },
    price: {
        enumerable: true, // show the key with for in and object
        value: price, // value
        writable: false, // change the value
        configurable: true // configurable (clear ou reconfigure)
    }
  });
}

const p1 = new Product("T-shirt", 100, 3);
p1.stock = 1000;
delete p1.stock;
console.log(p1);
console.log(Object.keys(p1));

for (const key in p1) {
  console.log(key);
}
