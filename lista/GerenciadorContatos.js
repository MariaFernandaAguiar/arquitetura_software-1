
class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        console.log(`=====================================================`);
        console.log("Adicionar contato:");
        this.contatos.push(contato);
        console.log(`Contato ${contato.nome} adicionado com sucesso.`);
    }

    // Método para remover um contato
    removerContato(nome) {
        const contatoNome = this.contatos.findIndex(contato => contato.nome === nome);

        console.log(`=====================================================`);
        console.log("Remover contato:");

        if (contatoNome === -1) {
            console.log("Contato não encontrado.");
            return;
        }

        const contatoNomeRemovido = this.contatos.splice(contatoNome, 1)[0];
        console.log(`Contato de "${contatoNomeRemovido.nome}" removido com sucesso.`);

    }
    
    listarContatos() {
        console.log(`=====================================================`);
        console.log("Lista de contatos:");
        this.contatos.forEach(contato => console.log(`- Nome : ${contato.nome} - Telefone: ${contato.telefone} - Email: ${contato.email}`));
    }

    BuscarContatos(termo) {
        //buscar contato utolizando strategy
        const contatosEncontrados = this.strategy.busca(this.contatos, termo);
        console.log(`=====================================================`);
        console.log("Busca de contatos:");
        console.log("Contatos encontrados:");
        contatosEncontrados.forEach(contato => console.log(`- Nome: ${contato.nome} - Telefone: ${contato.telefone} - Email: ${contato.email}`));
        

    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }


}

module.exports = GerenciadorContatos;

