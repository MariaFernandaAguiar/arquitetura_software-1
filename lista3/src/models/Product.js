
class Product {
  
  constructor(id_product,name_product,price_product,stock_product){
  
    this.id_product = id_product ;
  
    this.name_product = name_product;
  
    this.price_product = price_product;

    this.stock_product = stock_product;
  
  }



  static getProducts() {
  
    return Product.products;
  
  }

  static async getOneProduct(id){

    const product = Product.products.find(product =>product.id_product === parseInt(id));

    return product || null;
    
  }

}


Product.products = [
    new Product(1, 'As Crônicas de Nárnia', parseFloat('65.78'),20),
    new Product(2, 'A hora da Estrela', parseFloat('20.81'),10),
    new Product(3, 'O Pequeno Príncipe', parseFloat('10.00'),60),
    new Product(4, 'O Hobbit', parseFloat('40.00'),80),
    new Product(5, 'O Senhor dos Anéis', parseFloat('100.00'),14),
    new Product(6, 'O Silmarillion', parseFloat('50.00'),10),
    new Product(7, 'O Código da Vinci', parseFloat('30.00'),50),
    new Product(8, 'Anjos e Demônios', parseFloat('30.00'),2),
    new Product(9, 'Fortaleza Digital', parseFloat('30.00'),1),
    new Product(10, 'O Símbolo Perdido', parseFloat('30.00'),1)
];


module.exports = Product;