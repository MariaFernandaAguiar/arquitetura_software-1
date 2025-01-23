const { stdin:input, stdout:output } = require('node:process');



class OrderControllers {

    totalOrder (product_code, totalOrderUser){

        const product = getProductDetails (product_code);

        if (!product) {
            throw new Error('O código informado não existe');

        }

        const total = product.price + totalOrderUser;

        return total;

    
    }
    
}

 module.exports = OrderControllers

