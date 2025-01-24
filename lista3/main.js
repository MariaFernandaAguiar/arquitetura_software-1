const readline = require('readline');

const { stdin:input, stdout:output } = require('node:process');

const rl = readline.createInterface({input,output});


const API_URL = `http://localhost:3000`;

const axios = require('axios');

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
                    
                    rl.close();

                    resolve(true);
                    
                } catch (error) {
  
                    console.error('Falha na autenticação:', error.response?.data?.message || error.message);
                    
                    rl.close();

                    resolve(false);
  
                }finally{
                    rl.prompt();
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

                        console.error('Falha ao criar usuário:',error.response?.data?.message || error.message);
                        
                        rl.close();

                        resolve(false);

                    }finally{

                        rl.prompt();

                    }
                });
            });
        });

    });
}


const menu = async () => {
    
    console.log(`                   `);
    console.log(`Bem-vindo ao Serviço de pagamentos`);
    console.log(`0 - sair - Sair do programa`);
    console.log(`1 - catálogo - Fazer compra`);
    console.log(`2 - pagamento - Fazer pagamento da compra`);
    console.log(`3 - produtos - Listar Todos os produtos`);

    rl.on('line', async (line) => {

        const input = line.trim();

        return input;
    });
}    

const limparTela = () => {
    console.clear(); 
};


const main = async () => {



    const new_user = await criar_usuario();

    if (new_user){
        console.log('Usuário criado com sucesso.');
    }

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

}


main();