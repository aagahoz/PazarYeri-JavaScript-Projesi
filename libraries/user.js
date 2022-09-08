class User {
    constructor(name, address, email, phoneNumber) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    getDetails() {
        return {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
        };
    }
}

module.exports = { User };