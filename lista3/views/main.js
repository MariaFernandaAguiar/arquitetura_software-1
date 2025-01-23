const readline = require('readline');
const { stdin:input, stdout:output } = require('node:process');
const AuthController = require('../controllers/AuthController');

const rl = readline.createInterface({input,output});

const autenticacao_login = () => {

    rl.on('line', async (line) => {

        const input = line.trim();

         
        rl.question('Informe o nome do usuário:', (answer_name) => {

            rl.question('Informe a senha do usuário:', (answer_password) => {
                
                const req = {
                    body: {
                        username: answer_name,
                        password: answer_password
                    }
                };

                await AuthController.login(req, res);

                console.log('Autenticando usuario');

            });


        });

    });

}

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
    
    if (autenticacao_login) {
        console.log('Usuario autenticado');
        menu();

            
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
    }else{
        console.log('Usuario não autenticado');
    }


}



main();