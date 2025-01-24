const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const API_URL = `http://localhost:3000`;
const axios = require('axios');

const {menu, limparTela, criar_usuario, autenticacao_login , ListarProdutos} = require('./src/views/commands')

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
    
                rl.question('Informe o codigo do produto: ', (product_code) => {
    
                    console.log(`Produto ${product_code}`);
    
                });

                menu();

                rl.prompt();
    
            } else if (input === '3') {
            
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