const express = require('express');

const session = require('express-session');

const dotenv = require('dotenv');

const userRoutes = require('./src/routes/UserRoutes');

const productRoutes = require('./src/routes/ProductRoutes');

const OrderRoutes = require('./src/routes/OrderRoutes');

dotenv.config();

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


app.use(express.json());

app.get('/', (req, res) => {

  res.send('Hello World!');

});

app.use('/user', userRoutes);

app.use('/product',productRoutes)

app.use('/order', OrderRoutes);

const PORT = process.env.PORT ;

app.listen(PORT, () => {

  console.log(`Servidor rodando em http://localhost:${PORT}`);

});

