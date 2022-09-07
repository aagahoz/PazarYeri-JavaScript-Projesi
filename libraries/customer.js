function* customerIDGeneratorFunction() {
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const customerIDGenerator = customerIDGeneratorFunction();

class Customer {
    constructor(name, address, email, phone) {
        this.ID = customerIDGenerator.next().value;
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return {
            ID: this.ID,
            name: this.name,
            address: this.address,
            email: this.email,
            phone: this.phone,
        };
    }
}

function getCustomerOrdersDetails(customerID, orders, products)
{
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

module.exports = { Customer, getCustomerOrdersDetails };