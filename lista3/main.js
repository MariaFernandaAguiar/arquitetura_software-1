const readline = require('readline');

const { stdin:input, stdout:output } = require('node:process');

const rl = readline.createInterface({input,output});

const {criar_usuario} = require('./src/views/commands');

const {autenticacao_login} = require('./src/views/commands');

const {tela_inicial} = require('./src/views/commands');

const {menu} = require('./src/views/commands');

const {limparTela} = require('./src/views/commands');


const main = async () => {

    const new_user = await criar_usuario();

    if(new_user){
        console.log('Usuario criado com sucesso');
        
        tela_inicial();

        const auth = await autenticacao_login();
        
        if (auth){ 

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
        }else {
            console.log('Falha na autenticação. Verifique suas credenciais.');
        }
    
    }else{
        console.log('Falha ao criar usuário');
    }

}



main();