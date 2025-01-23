// importar
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/AuthRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT ;

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

