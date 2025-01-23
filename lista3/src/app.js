const express = require('express');

const dotenv = require('dotenv');

const userRoutes = require('./routes/UserRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

  res.send('Hello World!');

});

app.use('/user', userRoutes);

const PORT = process.env.PORT ;

app.listen(PORT, () => {

  console.log(`Servidor rodando em http://localhost:${PORT}`);

});

