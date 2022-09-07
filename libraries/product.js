function* productIDGeneratorFunction() {
  let id = 1;
  while (true)
  {
    yield id++;
  }
}
const productIDGenerator = productIDGeneratorFunction();

class Product {
  constructor(name, unitPrice, productDescription) {
    this.ID = productIDGenerator.next().value;
    this.name = name;
    this.unitPrice = unitPrice;
    this.productDescription = productDescription;
  }
  getDetails() {
    return {
      ID: this.ID,
      name: this.name,
      unitPrice: this.unitPrice,
      productDescription: this.productDescription,
    };
  }
}

function getAllProducts(products) {
  console.log("Products:");
  products.forEach(product => {
    console.log("Product ID: " + product.ID);
    console.log("Product Name: " + product.name);
    console.log("Product Unit Price: " + product.unitPrice);
    console.log("Product Description: " + product.productDescription);
    console.log();
  });
}

module.exports = { Product, getAllProducts };