
class Product {
  
  constructor(id_product,name_product,price_product){
  
    this.id_product = id_product ;
  
    this.name_product = name_product;
  
    this.price_product = price_product;
  
  }

  show_product() {
  
    console.log(`Código do produto: ${this.id_product}`);
  
    console.log(`Nome : ${this.name_product}`);
  
    console.log(`Preço: ${this.price_product}`);
  
  }

}

module.exports = Product;