//"Replace Temp with Query" - "Substituir Variável Temporária por Consulta"

function calculateTotalPrice(products) {
  
    let total_value = 0;

    for (let i = 0; i < products.length; i++) {
        total_value += products[i].price * products[i].quantity;

    }

    const discount = total_value > 100 ? total_value*0.9 : total_value;

    const finalTotal =   discount < 50 ? discount + 5 : discount;


    return finalTotal.toFixed(2);
}
