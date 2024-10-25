class Hotel{

    constructor(nome_hospede, data_entrada, data_saida,tipo_quarto, valor){
        this.nome_hospede = nome_hospede;
        this.data_entrada = data_entrada;
        this.data_saida = data_saida;
        this.tipo_quarto = tipo_quarto;
        this.preco = preco;
    }

    reservarHotel() {
        console.log(`Reserva de hotel confirmada!`)
        console.log(`Hotel reservado com data de check-in ${this.data_entrada} e data de check-out ${this.data_saida}`);
        console.log(`Nome do hospede: ${this.nome_hospede}`);
        console.log(`Data de entrada: ${this.data_entrada}`);
        console.log(`Data de said: ${this.data_saida}`);
        console.log(`Tipo de quarto: ${this.tipo_quarto}`);
        console.log(`Preço: ${this.preco}`);
        console.log();
        
    }
}

module.exports = Hotel ;