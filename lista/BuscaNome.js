const BuscaStrategy = require('./BuscaStrategy');

class NomeStrategy extends BuscaStrategy {
    busca(contatos, termo) {
        return contatos.filter(contato => contato.nome.toLowerCase().includes(termo.toLowerCase()));
    }
}

module.exports = NomeStrategy;