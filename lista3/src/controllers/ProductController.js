const Product = require('../models/Product');


class ProductController {

    listProducts() {
   
        console.log(`=====================================================`);
   
        console.log("Lista de produtos:");
   
        Product.showAllProducts();
    }

    adicionarProduct(product) {
   
        this.products.push(product);
   
        console.log(`Produto adicionado com sucesso!`);
   
    }

    getProductDetails(id_product) {
   
        return this.products.find(product => product.id_product === id_product);
   
    }


}

module.exports = ProductController;