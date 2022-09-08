const userLib = require('./user.js');   // import user class

function* customerIDGeneratorFunction() {   // customer ID generator function
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const customerIDGenerator = customerIDGeneratorFunction();  // customer ID generator

class Customer extends userLib.User {
    constructor(name, address, email, phoneNumber) {
        super(name, address, email, phoneNumber);
        this.ID = customerIDGenerator.next().value;
    }
    getDetails() {  // get customer details
        return {
            ID: this.ID,
            name: this.name,
            address: this.address,
            email: this.email,
            phone: this.phoneNumber,
        };
    }
}

module.exports = { Customer };    // Exporting the class and functions