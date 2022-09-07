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

module.exports = { Customer };