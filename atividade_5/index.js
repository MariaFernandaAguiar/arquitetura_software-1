const express = require('express');
const dotenv = require('dotenv');
const wordRoutes = require('./routes/wordRoutes');
const app = express();

dotenv.config();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Ambiente Configurado</h1>');
});

app.use("/words",wordRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});