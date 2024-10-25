class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    reservarViagem(facade, data) {
        console.log(`Iniciando reserva para o cliente: ${this.nome}, e-mail: ${this.email}`);
        facade.reservarViagem(data);
    }
}

module.exports = Cliente;
