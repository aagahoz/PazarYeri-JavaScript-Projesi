function onlyNumbers(str) {
    return /^[0-9\s]+$/.test(str);
}
function onlyLettersAndSpaces(str) {
    return /^[a-zA-Z\s]+$/.test(str);
}
function validateEmail(str) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

module.exports = { onlyNumbers, onlyLettersAndSpaces, validateEmail };