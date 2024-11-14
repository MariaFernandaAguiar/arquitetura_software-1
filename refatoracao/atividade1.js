//"Replace Temp with Query" - "Substituir Variável Temporária por Consulta"

function calculateTotalPrice(products) {
    //let total = 0; 
    //let discount = 0.1;
    //let shippingCost = 5;
    

    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }

    if (total > 100) {
        total *= (1 - discount);
    }

    if (total < 50) {
        total += shippingCost;
    }

    return total.toFixed(2);
}