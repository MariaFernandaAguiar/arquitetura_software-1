const ProductController = require('../controllers/ProductController');

class Order {
    constructor(id_order, status = 'Pending'){
       
        this.id_order = id_order ;
       
        this.id_user = id_user;
       
        this.products = [];
       
        this.totalOrderValue = 0;
       
        this.status_order = status;

    }

    // Método para mostrar as informações do pedido
    showOrder() {
        
        console.log(`Código do pedido: ${this.id_order}`);
        
        console.log(`Código do cliente : ${this.id_user}`);
        
        console.log(`Produtos : `);
        
        this.products.forEach((product, id )=>{
           
            console.log(`${product.id_product} - ${product.name_product} - ${product.price_product}`)
        
        })
        
        console.log(`Total do pedido: ${this.total_price_order}`);
        
        console.log(`Status do pedido: ${this.status}`);
    }

    // Método para adicionar um produto ao pedido e alterar o valor total do pedido
    addProduct(id_product){
       
        const product = ProductController.getProductDetails(id_product);

        if (!product) {
            throw new Error('O código informado não existe');

        }

        this.products.push(product);
        
        this.total_price_order += price_product ;

        return this.total_price_order;
    }



}

module.exports = Order;