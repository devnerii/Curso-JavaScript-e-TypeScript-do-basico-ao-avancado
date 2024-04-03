function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    let privateStock = stock
    Object.defineProperty(this, "stock", {
      enumerable: true, // show the key with for in and object
    //   value: stock, // value
    //   writable: false, // change the value
      configurable: true, // configurable (clear ou reconfigure)
      get: () => {
        return stock;
      },
      set: (value) => {
        if (typeof value !== 'number') {
            console.log('Invalid Number');
        }
        privateStock = value
      }
    });
  }
  
  const p1 = new Product("T-shirt", 100, 3);
  console.log(p1.stock)
  