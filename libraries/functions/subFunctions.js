function onlyNumbers(str) {         // 0-9
    return /^[0-9\s]+$/.test(str);
}
function onlyLettersAndSpaces(str) {    // A-Z, a-z, space
    return /^[a-zA-Z\s]+$/.test(str);
}
function validateEmail(str) {       // email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

module.exports = { onlyNumbers, onlyLettersAndSpaces, validateEmail };  // Exporting the class and functions