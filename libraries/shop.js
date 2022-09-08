const userLib = require('./user.js');   // import user class

function* shopIDGeneratorFunction() {   // shop ID generator function
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const shopIDGenerator = shopIDGeneratorFunction();  // shop ID generator

class Shop extends userLib.User {
    constructor(name, address, email, phoneNumber, orders) {
        super(name, address, email, phoneNumber);
        this.ID = shopIDGenerator.next().value;
    }
    getDetails() {
        return {
            ID: this.ID,
            name: this.name,
            address: this.address,
            phone: this.phoneNumber,
            email: this.email,
            orders: this.orders,
        };
    }
}

// *** Tüm mağazaların ekrana basılması *** //
function getAllShops(shops) {
    console.log("Shops:");
    shops.forEach(shop => {
        console.log("Shop ID: " + shop.ID);
        console.log("Shop Name: " + shop.name);
        console.log("Shop Address: " + shop.address);
        console.log("Shop Phone: " + shop.phoneNumber);
        console.log("Shop Email: " + shop.email);
        console.log();
    });
}

// *** Bir mağazanın müşterilerinin ekrana basılması *** //
function getShopCustomers(shopID, customers, orders) {

    let shopCustomers = [];
    let shopOrders = orders.filter(order => order.shopID == shopID);

    shopOrders.forEach(order => {
        let customer = customers.find(customer => customer.ID == order.customerID);
        shopCustomers.push(customer);
    });

    console.log("Customers:");
    console.log(shopCustomers);
}

// *** Bir mağazanın siparişlerinin ekrana basılması *** //
function getShopOrders(shopID, orders) {
    let shopOrders = orders.filter(order => order.shopID == shopID);
    console.log("Orders:");
    console.log(shopOrders);
}

// *** Bir mağazanın toplam kazancının ekrana basılması *** //
function getShopTotalIncome(shopID, orders) {
    let shopOrders = orders.filter(order => order.shopID == shopID);
    let totalIncome = 0;
    shopOrders.forEach(order => {
        totalIncome += order.total;
    });
    console.log("ID > " + shopID + " Total Income: " + totalIncome);
}

module.exports = { Shop, getAllShops, getShopCustomers, getShopOrders, getShopTotalIncome };    // Exporting the class and functions