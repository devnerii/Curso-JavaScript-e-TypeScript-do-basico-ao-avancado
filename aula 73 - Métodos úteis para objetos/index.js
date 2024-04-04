/*
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys (return the keys)
Object.freeze (freeze the object)
Object.defineProperties (define  multiple properties at once)
Object.defineProperty (define one property)
*/

const product = {name: 'Product', price: 1.8};
console.log(Object.getOwnPropertyDescriptor(product, 'name'));
console.log(Object.keys(product));