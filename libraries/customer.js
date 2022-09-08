const userLib = require('./user.js');

function* customerIDGeneratorFunction() {
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const customerIDGenerator = customerIDGeneratorFunction();

class Customer extends userLib.User {
    constructor(name, address, email, phone) {
        super(name, address, email, phone);
        this.ID = customerIDGenerator.next().value;
    }
    getDetails() {
        return {
            ID: this.ID,
            name: this.name,
            address: this.address,
            email: this.email,
            phone: this.phoneNumber,
        };
    }
}

// *** Girilen Müşteri ID sine göre müşterinin yaptığı siparişler ve siparişlerin detaylarının ekrana basılması *** //
function getCustomerOrdersDetails(customerID, orders, products) {
    let customerOrders = orders.filter(order => order.customerID === customerID);

    console.log("Orders:");
    customerOrders.forEach(order => {
        console.log("Order ID: " + order.ID);
        console.log("Order Status: " + order.status);
        console.log("Order Total: " + order.total);
        console.log("Order Date: " + order.date);
        console.log("Order Products ");
        console.log("");
        order.products.forEach(productID => {
            let product = products.find(product => product.ID === productID);
            console.log("Product ID: " + product.ID);
            console.log("Product Name: " + product.name);
            console.log("Product Price: " + product.price);
            console.log("Product Description: " + product.description);
            console.log();
        });
    });
}

// *** Tüm müşterilerin ekrana basılması *** //
function getAllCustomers(customers) {
    console.log("Customers:");
    customers.forEach(customer => {
        console.log("Customer ID: " + customer.ID);
        console.log("Customer Name: " + customer.name);
        console.log("Customer Address: " + customer.address);
        console.log("Customer Email: " + customer.email);
        console.log("Customer Phone: " + customer.phone);
        console.log();
    });
}

// *** Bir müşterinin siparişlerinin ekrana basılması *** //
function getCustomerOrders(customerID, orders) {
    let customerOrders = orders.filter(order => order.customerID == customerID);
    console.log("Orders:");
    console.log(customerOrders);
}

module.exports = { Customer, getCustomerOrdersDetails, getAllCustomers, getCustomerOrders };