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