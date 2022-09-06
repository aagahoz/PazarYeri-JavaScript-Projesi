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