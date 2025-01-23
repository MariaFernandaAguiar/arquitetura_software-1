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
       
        rl.question('Informe o nome do usuário: ', (new_name) => {
       
            rl.question('Informe o email do usuário: ', (new_email) => {
       
                rl.question('Informe a senha do usuário:', async (new_password) => {

                    try {
                        
                        const response = await axios.post(`${API_URL}/user/register`, {

                            new_name,
                        
                            new_email,
                        
                            new_password
                        
                        });
                        
                        console.log('Register successful:', response.data);
                        
                        rl.close();

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

const tela_inicial = () => {
    console.log('-----------------------');
    console.log('1 - Registrar');
    console.log('2 - Login');
    console.log('3 - Sair');
    console.log('-----------------------');

}

const menu = () => {
    
    console.log(`                   `);
    console.log(`Bem-vindo ao Serviço de pagamentos`);
    console.log(`0 - sair - Sair do programa`);
    console.log(`1 - comprar - Fazer compra`);
    console.log(`2 - pagamento - Fazer pagamento da compra`);
    console.log(`3 - produtos - Listar Todos os produtos`);
}

const limparTela = () => {
    console.clear(); 
};


module.exports = { menu, limparTela, criar_usuario, tela_inicial, autenticacao_login };

