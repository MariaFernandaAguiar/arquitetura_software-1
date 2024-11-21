//interface variar independentemente dos algoritmos de busca
class BuscaStrategy {
    busca(contatos, termo) {
        throw new Error("Método buscar deve ser implementado.");
    }
}

module.exports = BuscaStrategy;

