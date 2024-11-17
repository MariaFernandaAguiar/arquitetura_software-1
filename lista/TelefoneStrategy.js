const BuscaStrategy = require('./BuscaStrategy');

class TelefoneStrategy extends BuscaStrategy {
    busca(contatos, termo) {
        return contatos.filter(contato => contato.email.includes(termo));
    }
}

module.exports = TelefoneStrategy;