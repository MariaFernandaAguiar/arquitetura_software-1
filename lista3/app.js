// importar
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/AuthRoutes');
const productsRoutes = require('./routes/ProductRoutes');
const paymentsRoutes = require('./routes/PaymentsRoutes');
const orderRoutes = require('./routes/OrderRoutes');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/payments', paymentsRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT ;

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

