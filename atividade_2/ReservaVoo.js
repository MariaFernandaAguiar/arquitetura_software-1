class Voo{

    constructor(numero_voo, data_ida, data_volta, origem, destino, preco){
        this.numero_voo = numero_voo;
        this.data_ida = data_ida;
        this.data_volta = data_volta;
        this.origem = origem;
        this.destino = destino;
        this.preco = preco;
    }

    reservarVoo(){
        console.log();
        console.log(`Reserva de voo confirmada!`);
        console.log(`Voo reservado , com ida ${this.data_ida} e volta ${this.data_volta}.`);
        console.log(`Origem: ${this.origem}`);
        console.log(`Destino: ${this.destino}`);
        console.log(`Preço: ${this.preco}`);
        console.log();
    }
}

module.exports = Voo;
