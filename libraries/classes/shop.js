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
    getDetails() {  // get shop details
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

module.exports = { Shop };    // Exporting the class and functions