class ItemOrder {

    constructor(id_item,order_id,item) {
       
        this.id_item = id_item;
       
        this.order_id = order_id;
       
        this.name_item = item.name;
       
        this.price_item = item.price;
       
        this.quantity = item.quantity;
       
        this.price_total = this.getSubtotal();

    }

    getSubtotal() {
        return this.item.price * this.quantity;
    }
    
}