function* orderIDGeneratorFunction() {
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const orderIDGenerator = orderIDGeneratorFunction();

class Order {
    constructor(status, total, customerID, shopID, products) {
        this.ID = orderIDGenerator.next().value;
        this.date = new Date();
        this.status = status;
        this.total = total;
        this.customerID = customerID;
        this.shopID = shopID;
        this.products = products;
    }
    getDetails() {
        return {
            ID: this.ID,
            date: this.date,
            status: this.status,
            total: this.total,
            customerID: this.customerID,
            shopID: this.shopID,
            products: this.products,
        };
    }
}
// *** Tüm siparişlerin ekrana basılması *** //
function getAllOrders(orders) {
    console.log("Orders:");
    orders.forEach(order => {
        console.log("Order ID: " + order.ID);
        console.log("Order Status: " + order.status);
        console.log("Order Total: " + order.total);
        console.log("Order Date: " + order.date);
        console.log("Order Products ");
        console.log("");

    });
}

// *** Girilen Sipariş ID sine göre siparişin detaylarının ekrana basılması *** //
function getOrderDetails(orderID, orders, products) {
    let order = orders.find(order => order.ID === orderID);
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
}

module.exports = { Order, getAllOrders, getOrderDetails };