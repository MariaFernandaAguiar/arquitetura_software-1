const ProductModel= require('../models/Product');

class Order {
    static currentId = 0; 

    constructor(id_user){
       
        this.id_order = Order.getId() ;

        this.uder_id - id_user;
                     
        this.totalOrderValue = 0;

        this.quantity_order = 0;

    }

    static getId() {

        return ++Order.currentId;
    
        
    }

    static getUsers() {
  
        return Order.orders;
      
    }
    

    showOrder() {
        
        console.log(`Código do pedido: ${this.id_order}`);
        
        console.log(`Código do cliente : ${this.id_user}`);
        
        console.log(`Total do pedido: ${this.total_price_order}`);
        
        console.log(`Status do pedido: ${this.status}`);
    }

    static async findById(order_id) {
        
        const order = Order.orders.find(order => order.id_order === order_id);
        
        return order || null;
    }

    static getOrders() {
  
        return Order.orders;
      
    }
    

    async addProductOrder(user_id,response, quantity) {

        const product = response.data.product;

        if(product.stock_product < quantity) {

            console.log("Estoque insuficiente");
        
            return false;
        
        }else {
        
            this.totalOrderValue = (this.totalOrderValue || 0) + product.price_product * quantity;

            this.quantity_order = this.quantity_order  + quantity;

            const order = new Order(user_id,this.totalOrderValue, this.quantity_order);

            Order.orders.push(order);

            return order;
        
        }

    }


}

Order.orders = [
    new Order(1, 100.36, 3),
    new Order(2, 37.90, 1)
];

module.exports = Order;