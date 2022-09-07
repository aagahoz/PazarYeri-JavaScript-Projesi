function* shopIDGeneratorFunction() {
    let id = 1;
    while (true)
    {
        yield id++;
    }
}
const shopIDGenerator = shopIDGeneratorFunction();

class Shop {
    constructor(name, address, email, phone, orders) {
        this.ID = shopIDGenerator.next().value;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.orders = orders;
    }
    getDetails() {
        return {
            ID: this.ID,
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            orders: this.orders,
        };
    }
}

module.exports = { Shop };