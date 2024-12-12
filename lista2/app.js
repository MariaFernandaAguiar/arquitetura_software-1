
const citiesRoutes = require('./routes/CitiesRoutes');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Ambiente Configurado</h1>');
});

app.use('/formatters',citiesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});