const GerenciadorContatos = require('./GerenciadorContatos');
const EmailStrategy = require('./BuscaEmail');
const NomeStrategy = require('./BuscaNome');
const TelefoneStrategy = require('./BuscaTelefone');

class GerenciadorFacade {
    constructor() {
        this.gerenciador = new GerenciadorContatos(); 
    }

    adicionar(contato) {
     
        this.gerenciador.adicionarContato(contato);
    }

    remover(nome) {
        this.gerenciador.removerContato(nome);
    }

    listar() {
        this.gerenciador.listarContatos();
    }

    buscarPorNome(nome) {
        this.gerenciador.setStrategy(new NomeStrategy()); 

        this.gerenciador.BuscarContatos(nome);
    }

    buscarPorTelefone(telefone) {
        this.gerenciador.setStrategy(new TelefoneStrategy());

        this.gerenciador.BuscarContatos(telefone);
    }

    buscarPorEmail(email) {
        this.gerenciador.setStrategy(new EmailStrategy()); 
        this.gerenciador.BuscarContatos(email);
    }
}

module.exports = GerenciadorFacade;
