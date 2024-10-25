const TravelFacade = require('./TravelFacade');
const Cliente = require('./Cliente');

const travelFacade = new TravelFacade();

const cliente = new Cliente('Brena', 'brena@example.com');

cliente.reservarViagem(travelFacade, '2024-12-28');
