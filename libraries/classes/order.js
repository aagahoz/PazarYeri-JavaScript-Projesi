function* orderIDGeneratorFunction() {  //  order ID generator function
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const orderIDGenerator = orderIDGeneratorFunction();    // order ID generator

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
    getDetails() {  // get order details
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

module.exports = { Order };  // Exporting the class and functions