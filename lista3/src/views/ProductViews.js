const readline = require('readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });



const ProductController = require('../controllers/ProductController')

const productController = new ProductController();

let authToken = null;

const listar_produtos = async () => {

    return new Promise(async (resolve) => {

        try {

            const req = {
                headers: {
                    authorization: authToken
                }
            };

            const res = {
                status: (code) => ({
                    json: (data) => ({ code, data })
                })
            };

            const response = await productController.list(req, res);

            console.log('-------------------');

            console.log('Produtos disponíveis:');

            console.log('-------------------');

            response.data.products.forEach(product => {

                console.log('Id do produto:', product.id_product);

                console.log('Nome do produto:', product.name_product);

                console.log('Preço do produto:', product.price_product);

                console.log('Quantidade em estoque:', product.stock_product);

                console.log('-------------------');

            });

            resolve(true);

        } catch (error) {

            console.error('Falha ao listar produtos:', error.response?.data?.message || error.message);

            resolve(false);

        }

    });

};

module.exports = { listar_produtos };