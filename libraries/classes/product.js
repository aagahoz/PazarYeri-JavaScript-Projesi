function* productIDGeneratorFunction() {    // ID Generator function
  let id = 1;
  while (true)
  {
    yield id++;
  }
}
const productIDGenerator = productIDGeneratorFunction();  // ID Generator

class Product {
  constructor(name, unitPrice, productDescription) {
    this.ID = productIDGenerator.next().value;
    this.name = name;
    this.unitPrice = unitPrice;
    this.productDescription = productDescription;
  }
  getDetails() {  // get product details
    return {
      ID: this.ID,
      name: this.name,
      unitPrice: this.unitPrice,
      productDescription: this.productDescription,
    };
  }
}

module.exports = { Product };  // Exporting the class and functions