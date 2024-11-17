const BuscaStrategy = require('./BuscaStrategy');

class EmailStrategy extends BuscaStrategy {
    busca(contatos, termo) {
        return contatos.filter(contato => contato.email.toLowerCase().includes(termo.toLowerCase()));
    }
}

module.exports = EmailStrategy