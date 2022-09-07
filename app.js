const customerLib = require('./libraries/customer.js');
const productLib = require('./libraries/product.js');
const shopLib = require('./libraries/shop.js');
const orderLib = require('./libraries/order.js');

let user1 = new customerLib.Customer("Agah Özdemir", "Tuzla", "ozdemiragah24@gmail.com", "1234567890");

console.log(user1.getDetails());


































// lib.Customer("Agah Özdemir", "Tuzla", "ozdemiragah24@gmail.com", "1234567890");


// const customer = new Customer("Agah Özdemir", "Tuzla", "ozdemiragah24@gmail.com", "1234567890");
// const customer2 = new Customer("Abdullah Özdemir", "Gebze", "ozdemiragah24@gmail.com", "1234567890");

// console.log(customer.getDetails());
// console.log(customer2.getDetails());

// const order = new Order("pending", 100, customer.ID, 1, []);
// console.log(order.getDetails());

// const product = new Product("Laptop", 1000, "Acer Laptop");
// console.log(product.getDetails());

// const shop = new Shop("Shop", "Tuzla", "shop@gmail.com", "0216 434 54 23", []);