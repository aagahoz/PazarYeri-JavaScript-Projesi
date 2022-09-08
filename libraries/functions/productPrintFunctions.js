// *** Tüm ürünlerin ekrana basılması *** //
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

module.exports = { getAllProducts };    // Exporting the class and functions