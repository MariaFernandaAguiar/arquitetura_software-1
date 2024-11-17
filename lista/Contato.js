class Contato {
    constructor(nome,telefone,email){
        this.nome = nome ;
        this.telefone = telefone;
        this.email = email;
    }

    Dadoscontato() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
    }

}

module.exports = Contato;