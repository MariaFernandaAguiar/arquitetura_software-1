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

    async getProductDetails(req, res) {

        const {id_product} = req.body;
      
        try {
            const product = await Product.getOneProduct(id_product);

            if (!product) {
                return res.status(404).json({ message: 'No product found' });
            }

            return res.status(200).json({ product });

        }catch (error) {
            return res.status(500).json({ message: error.message });
        }
       
    }


}

module.exports = ProductController;