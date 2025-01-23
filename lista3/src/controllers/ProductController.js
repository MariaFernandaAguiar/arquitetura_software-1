
class ProductController {

    // Método para listar todos os produtos
    listarProducts() {
   
        console.log(`=====================================================`);
   
        console.log("Lista de produtos:");
   
        this.contatos.forEach(contato => console.log(`- Nome : ${product.nome} - Preço: ${product.preco} - Estoque: ${product.estoque}`));
   
    }

    // Método para adicionar um produto
    adicionarProduct(product) {
   
        this.products.push(product);
   
        console.log(`Produto adicionado com sucesso!`);
   
    }

    // Método para buscar um produto pelo id
    getProductDetails(id_product) {
   
        return this.products.find(product => product.id_product === id_product);
   
    }


}
