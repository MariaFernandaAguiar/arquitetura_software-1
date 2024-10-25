const ReservaVoo = require('./ReservaVoo');
const ReservaHotel = require('./ReservaHotel');
const AluguelCarro = require('./AluguelCarro');

class TravelFacade {
    constructor() {
        this.voo = new ReservaVoo('325','2024-12-28','2024-12-31','Rio de Janeiro','Curitiba','900');
        this.hotel = new ReservaHotel('Brena', '2024-12-28', '2024-12-31', 'Casal', 700);
        this.carro = new AluguelCarro('2024-12-28','2024-12-31','400');
   
    }

    reservarViagem(data) {
        this.voo.reservarVoo(data);
        this.hotel.reservarHotel(data);
        this.carro.alugarCarro(data);
        console.log(`Viagem completa reservada para o dia ${data}.`);
    }
}


module.exports = TravelFacade;