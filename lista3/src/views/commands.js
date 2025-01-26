const readline = require('readline');

const { stdin:input, stdout:output } = require('node:process');

const rl = readline.createInterface({input,output});

const API_URL = `http://localhost:3000`;

const axios = require('axios');

let authToken = null;

const autenticacao_login = async () => {
    return new Promise((resolve) => {
        rl.question('Informe o email do usuário: ', (email_user) => {
            rl.question('Informe a senha do usuário: ', async (password_user) => {
                try {
                    const response = await axios.post(`${API_URL}/user/login`, {
                        email_user,
                        password_user
                    });
                    console.log('Login successful:', response.data);

                    authToken = response.data;

                    resolve(authToken);
                } catch (error) {
                    console.error('Falha na autenticação:', error.response?.data?.message || error.message);
                    resolve(false);
                }
            });
        });
    });
};

const criar_usuario = async () => {
    return new Promise((resolve) => {
        console.log('');
        console.log('----Registro de novo usuário----');
        console.log('');
        rl.question('Informe o nome do usuário: ', (new_name) => {
            rl.question('Informe o email do usuário: ', (new_email) => {
                rl.question('Informe a senha do usuário: ', async (new_password) => {
                    try {
                        const response = await axios.post(`${API_URL}/user/register`, {
                            new_name,
                            new_email,
                            new_password
                        });
                        console.log('Register successful:', response.data);
                        resolve(true);
                    } catch (error) {
                        console.error('Falha ao criar usuário:', error.response?.data?.message || error.message);
                        resolve(false);
                    }
                });
            });
        });
    });
};

const ListarProdutos = async () => {
    
    
    try {
        const response = await axios.get(`${API_URL}/product/list`);
        const products = response.data.products;
        console.log('Catálogo de produtos');
        products.forEach(product => {
            console.log(`Código do produto: ${product.id_product}`);
            console.log(`Nome : ${product.name_product}`);
            console.log(`Preço: ${product.price_product}`);
            console.log(`Estoque: ${product.stock_product}`);
            console.log(`=====================================================`);
        });
        return response.data;
    } catch (error) {
        console.error('Falha ao listar produtos:', error.response?.data?.message || error.message);
    }
};

const BuyProduct = async () => {
    if (!authToken) {
        await autenticacao_login();
        if (!authToken) {
            console.error('Autenticação falhou. Não é possível continuar com a compra.');
            return;
        }
    }

    console.log('Token de autenticação:', authToken); // Adicione este log
    return new Promise((resolve) => {
        console.log('');
        console.log('----Realizar compra----');
        console.log('');
        rl.question('Informe o código do produto: ', async (product_code) => {
            rl.question('Informe a quantidade do produto: ', async (quantity) => {
                try {
                    console.log(`Produto ${product_code}`);

                    const response = await axios.post(`${API_URL}/order/create`, {
                        product_code,
                        quantity
                    }, {
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        }
                    });

                    const order = response.data;

                    console.log('Pedido realizado com sucesso:', order);

                    resolve(true);
                } catch (error) {
                    console.log('Token de autenticação usado:', authToken); // Adicione este log
                    console.error('Falha ao listar produtos:', error.response?.data?.message || error.message);
                    console.error('Detalhes do erro:', error.response?.data || error);
                    resolve(false);
                }
            });
        });
    });
};

const BuscarProduto = async () => {
    return new Promise((resolve) => {
        console.log('');
        console.log('==================================');
        console.log('');
        rl.question('Informe o código do produto: ', async (product_code) => {
            try {
                const response = await axios.get(`${API_URL}/product/search/${product_code}`);
                const product = response.data.product;
                console.log(`Código do produto: ${product.id_product}`);
                console.log(`Nome : ${product.name_product}`);
                console.log(`Preço: ${product.price_product}`);
                console.log(`Estoque: ${product.stock_product}`);
                console.log(`=================================`);
                resolve(product);
            } catch (error) {
                console.error('Falha ao buscar produto:', error.response?.data?.message || error.message);
                resolve(false);
            }
        });
    });
};

const menu = () => {
    console.log(`                           `);
    console.log(`=== Bem-vindo ao Serviço de pagamentos ===`);
    console.log(`0 - sair - Sair do programa`);
    console.log(`1 - catálogo - Mostrar Produtos`);
    console.log(`2 - comprar - Fazer pedido`);
    console.log(`3 - buscar - Buscar produtos`);
};

const limparTela = () => {
    console.clear();
};

module.exports = { menu, limparTela, criar_usuario, autenticacao_login , ListarProdutos, BuyProduct,BuscarProduto};

