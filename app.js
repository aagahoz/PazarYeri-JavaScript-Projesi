const customerFunctions = require('./libraries/functions/customerPrintFunctions');   // import customer functions
const shopFunctions = require('./libraries/functions/shopPrintFunctions');   // import shop functions
const orderFunctions = require('./libraries/functions/orderPrintFunctions');   // import order functions
const productFunctions = require('./libraries/functions/productPrintFunctions');   // import order functions

const customerClass = require('./libraries/classes/customer');   // import customer class
const shopClass = require('./libraries/classes/shop');   // import shop class
const orderClass = require('./libraries/classes/order');   // import order class
const productClass = require('./libraries/classes/product');   // import product class

//  *** Yapay VeriTabanı *** //

// *** Müşteri oluşturma *** //
let customer1 = new customerClass.Customer("Agah", "Tuzla", "ozdemiragah24@gmail.com", "1234567890");
let customer2 = new customerClass.Customer("Abdullah", "Tuzla", "aagahoz@gmail.com", "1234567890");
let customer3 = new customerClass.Customer("Alpay", "Gebze", "agah24@gmail.com", "432325543");
let customer4 = new customerClass.Customer("Tunahan", "Pendik", "ozdemiragah24@gmail.com", "543234234");
let customer5 = new customerClass.Customer("Fatih", "Kadıköy", "abdullah@gmail.com", "543234234");
const customers = [customer1, customer2, customer3, customer4, customer5];

// *** Ürün oluşturma *** //
let product1 = new productClass.Product("Product 1", 12, "Product 1 Description");
let product2 = new productClass.Product("Product 2", 15, "Product 2 Description");
let product3 = new productClass.Product("Product 3", 17, "Product 3 Description");
let product4 = new productClass.Product("Product 4", 17, "Product 4 Description");
let product5 = new productClass.Product("Product 5", 19, "Product 5 Description");
let product6 = new productClass.Product("Product 6", 14, "Product 6 Description");
let product7 = new productClass.Product("Product 7", 13, "Product 7 Description");
let product8 = new productClass.Product("Product 8", 11, "Product 8 Description");
let product9 = new productClass.Product("Product 9", 15, "Product 9 Description");
let product10 = new productClass.Product("Product 10", 23, "Product 10 Description");
const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];

// *** Sipariş oluşturma *** //
let order1 = new orderClass.Order("pending", 100, customer1.ID, 1, [product1.ID, product2.ID]);
let order2 = new orderClass.Order("pending", 150, customer2.ID, 2, [product1.ID, product3.ID]);
let order3 = new orderClass.Order("completed", 390, customer2.ID, 1, [product3.ID, product5.ID, product1.ID, product2.ID]);
let order4 = new orderClass.Order("completed", 542, customer4.ID, 2, [product4.ID, product10.ID, product7.ID, product5.ID]);
let order5 = new orderClass.Order("pending", 235, customer5.ID, 1, [product5.ID, product9.ID, product1.ID, product7.ID]);
const orders = [order1, order2, order3, order4, order5];

// *** Mağaza oluşturma *** //
let shop1 = new shopClass.Shop("Tuzla Shop", "Tuzla", "tuzlamodern@gmail.com", "1234567890", [order1.ID, order2.ID, order3.ID]);
let shop2 = new shopClass.Shop("Gebze Shop", "Gebze", "gebze@gmail.com.", "1234567890", [order4.ID, order5.ID]);
const shops = [shop1, shop2];

// *** Girilen Müşteri ID sine göre müşterinin yaptığı siparişler ve siparişlerin detaylarının ekrana basılması *** //
// customerFunctions.getCustomerOrdersDetails(2, orders, products);

// *** Tüm müşterilerin ekrana basılması *** //
// customerFunctions.getAllCustomers(customers);

// *** Tüm ürünlerin ekrana basılması *** //
// productFunctions.getAllProducts(products);

// *** Tüm mağazaların ekrana basılması *** //
// shopFunctions.getAllShops(shops);

// *** Tüm siparişlerin ekrana basılması *** //
// orderFunctions.getAllOrders(orders);

// *** Bir mağazanın müşterilerinin ekrana basılması *** //
// shopFunctions.getShopCustomers(1, customers, orders);

// *** Bir mağazanın siparişlerinin ekrana basılması *** //
// shopFunctions.getShopOrders(1, orders);

// *** Bir müşterinin siparişlerinin ekrana basılması *** //
// customerFunctions.getCustomerOrders(2, orders);

// *** Girilen Sipariş ID sine göre siparişin detaylarının ekrana basılması *** //
// orderFunctions.getOrderDetails(1, orders, products);

// *** Bir mağazanın toplam kazancının ekrana basılması *** //
// shopFunctions.getShopTotalIncome(1, orders);


