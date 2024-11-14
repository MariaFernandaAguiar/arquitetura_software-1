const Contato = require('./Contato');
const GerenciadorContatos = require('./GerenciadorContatos');

const contato1 = new Contato('João', 123456789, 'joao@hotmail.com');
const gerenciadorFacade = new GerenciadorContatos();

contato1.adicionarContato(gerenciadorFacade);
