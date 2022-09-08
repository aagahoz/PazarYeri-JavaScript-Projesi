const functionsLib = require('./functions.js');  // import functions class

class User {
    constructor(name, address, email, phoneNumber) {
        if (functionsLib.onlyLettersAndSpaces(name))      // check if name contains only letters
        {
            this.name = name;
        }
        else
        {
            this.name = undefined;
            console.log("Name must contain only letters" + name);
        }

        this.address = address;

        phoneNumber = phoneNumber.replace(/\s+/g, '')   // Remove all spaces
        if (functionsLib.onlyNumbers(phoneNumber))   // check if the phone number is only numbers
        {
            this.phoneNumber = phoneNumber;
        }
        else
        {
            this.phoneNumber = undefined;
            console.log("Phone number is not valid");
        }

        if (functionsLib.validateEmail(email))   // check if the email is valid
        {
            this.email = email;
        }  
        else
        {
            this.email = undefined;
            console.log("Invalid email");
        }
    }

    getDetails() {  // get user details
        return {
            name: this.name,
            address: this.address,
            phone: this.phoneNumber,
            email: this.email,
        };
    }

}

module.exports = { User };  // export User class