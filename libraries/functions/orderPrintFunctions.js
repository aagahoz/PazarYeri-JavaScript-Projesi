// *** Tüm siparişlerin ekrana basılması *** //
function getAllOrders(orders) {
    console.log("Orders:");
    orders.forEach(order => {
        console.log("Order ID: " + order.ID);
        console.log("Order Status: " + order.status);
        console.log("Order Total: " + order.total);
        console.log("Order Date: " + order.date);
        console.log("");

    });
}

// *** Girilen Sipariş ID sine göre siparişin detaylarının ekrana basılması *** //
function getOrderDetails(orderID, orders, products) { 
    let order = orders.find(order => order.ID === orderID);
    console.log("Order ID: " + order.ID);
    console.log("Order Status: " + order.status);
    console.log("Order Total: " + order.total);
    console.log("Order Date: " + order.date);
    console.log("Order Products ");
    console.log("");
    order.products.forEach(productID => {      
        let product = products.find(product => product.ID === productID);
        console.log("Product ID: " + product.ID);
        console.log("Product Name: " + product.name);
        console.log("Product Price: " + product.unitPrice);
        console.log("Product Description: " + product.productDescription);
        console.log();
    });
}

module.exports = { getAllOrders, getOrderDetails };  // Exporting the class and functions