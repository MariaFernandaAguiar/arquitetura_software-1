class Carro{

  constructor(data_retirada, data_devolucao,preco){
    this.data_retirada = data_retirada;
    this.data_devolucao = data_devolucao;
    this.preco = preco;
  }

  alugarCarro() {
    console.log(`Reserva de carro confirmada!`)
    console.log(`Data de retirada: ${this.data_retirada}`);
    console.log(`Data de devolução: ${this.data_devolucao}`);
    console.log(`Preço: ${this.preco}`);
    console.log();

    }
}

module.exports = Carro;