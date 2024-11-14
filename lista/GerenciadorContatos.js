class GerenciadorContatos extends Component {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
        console.log(`Contato ${contato.nome} adicionado com sucesso.`);
    }


    removerContato(contatoId) {
        const index = this.contatos.findIndex(contato => contato.id === contatoId);
        if (index !== -1) {
            const contatoRemovido = this.contatos.splice(index, 1);
            console.log(`Contato ${contatoRemovido[0].nome} removido com sucesso.`);
        } else {
            console.log("Contato não encontrado.");
        }
    }

    
    ListarContatos(contato) {
        console.log("Lista de contatos:");
        this.contatos.forEach(contato => console.log(`- ${contato.nome} (ID: ${contato.id})`));
    }

    BuscarContatos() {
        const contato = this.contatos.find(contato => contato.id === contatoId);

        if(contato){
            console.log("Contato encontrado :  ${contato.nome}")
        }
        else{
            console.log("Contato não foi encontrado.")
        }

    }


}

module.exports = GerenciadorContatos;
