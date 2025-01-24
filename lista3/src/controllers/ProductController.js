const Product = require('../models/Product');


class ProductController {

    async listProducts(req, res) {
      
        try{
            const products = Product.getProducts();
            if (!products) {
                return res.status(404).json({ message: 'No products found' });
            }
            return res.status(200).json({ products });
        }

        catch (error) {
            return res.status(500).json({ message: error.message });
        }

    }

    adicionarProduct(product) {
   
        this.products.push(product);
   
        console.log(`Produto adicionado com sucesso!`);
   
    }

    async getProductDetails(id_product) {
   
        return this.products.find(product => product.id_product === id_product);
   
    }


}

module.exports = ProductController;