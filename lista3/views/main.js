const readline = require('readline');
const { stdin:input, stdout:output } = require('node:process');
const authRoutes = require('../routes/AuthRoutes');

const rl = readline.createInterface({input,output});

const API_URL = `http://localhost:${process.env.PORT || 3000}`;


const autenticacao_login = async () => {
  
    return new Promise((resolve) => {
  
        rl.question('Informe o email do usuário: ', (email) => {
  
            rl.question('Informe a senha do usuário: ', async (password) => {
  
                try {
  
                    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  
                    console.log('Usuário autenticado com sucesso.');
  
                    resolve(response.data);
                } catch (error) {
  
                    console.error('Falha na autenticação:', error.response?.data?.message || error.message);
  
                    resolve(null);
  
                }
  
            });
  
        });
  
    });
  
};

const menu = () => {

    console.log(`Bem-vindo ao Serviço de pagamentos`);
    console.log(`0 - sair - Sair do programa`);
    console.log(`1 - comprar - Fazer compra`);
    console.log(`2 - pagamento - Fazer pagamento da compra`);
    console.log(`3 - produtos - Listar Todos os produtos`);
}

const limparTela = () => {
    console.clear(); 
};

const main = async () => {

    const auth = await autenticacao_login();
    
    if (auth === true){ 
        console.log('Usuario autenticado');

            
        rl.on('line', async (line) => {

            const input = line.trim();

            if (input === '0'){

                rl.close();
                

            } else if( input === '1'){

                
                rl.question('What do you thik of Node.js?', (answer) => {

                    console.log(`Thank for your feedback: ${answer}`);
                    menu();

                });

                
            }else if (input === '2'){
                rl.question('Informe o codigo do produto: ', (product_code) => { 
                    
                    console.log(`Produto ${product_code}`);

                    valueOrder = orderControllers(product_code, totalOrder);

                    menu();

                });
                
            }else if( input === '3'){

                listAllProducts();

                menu();
            }


            limparTela();

            rl.prompt();

        });
    }else {
        console.log('Falha na autenticação. Verifique suas credenciais.');
    }

}



main();