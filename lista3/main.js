const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const UserController = require("./src/controllers/UserController");

const userController = new UserController();

const {menu, limparTela, criar_usuario, autenticacao_login , ListarProdutos, BuyProduct,BuscarProduto} = require('./src/views/commands')

const main = async () => {
    
    const new_user = await criar_usuario();
    
    if (new_user) {
    
        console.log('Usuário criado com sucesso.');
    
    }


    const auth = await autenticacao_login();
    
    if (auth) {
    
        console.log('Usuario autenticado');
    
        menu();
    
        rl.prompt();

    
        rl.on('line', async (line) => {
    
            const input = line.trim();

            if (input === '0') {

                limparTela();
    
                console.log('Encerrando o programa. Até mais!');
    
                rl.close();
    
                process.exit(0);
    
            } else if (input === '1') {
    
                await ListarProdutos();

                menu();
            
                rl.prompt();


    
            } else if (input === '2') {
                
                const order = await BuyProduct();

                console.log('Pedido realizado com sucesso:', order);

                menu();

                rl.prompt();
    
            } else if (input === '3') {

                const product  = await BuscarProduto();

                if(!product){
                    console.log('Produto não encontrado');
                }
            
                menu();
    
                rl.prompt();
    
            } else {
    
                console.log('Opção inválida. Tente novamente.');
    
                menu();
    
                rl.prompt();
    
            }
    
        });
    
    } else {
    
        console.log('Falha na autenticação. Verifique suas credenciais.');
    
    }

};

main();