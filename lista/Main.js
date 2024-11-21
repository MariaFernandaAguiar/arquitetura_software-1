const Contato = require('./Contato');
const GerenciadorFacade = require('./GerenciadorFacade');


const readline = require('readline');

const gerenciador = new GerenciadorFacade();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Gerenciador> ' 
});

const menu = () => {

    console.log(`
        ==================================================
            Bem-vindo ao Gerenciador de Contatos!
        ==================================================
        Comandos disponíveis:
        0. sair      - Sair do programa.
        1. adicionar - Adicionar um novo contato.
        2. listar    - Listar todos os contatos.
        3. remover   - Remover um contato pelo nome.
        4. buscar    - buscar contato.
        ==================================================
        `);
};

const limparTela = () => {
    console.clear(); 
};

const perguntar = (pergunta) => {
    return new Promise((resolve) => rl.question(pergunta, resolve));
};

const obterEntrada = async (pergunta) => {
    return await perguntar(pergunta); 
};


const main = async () => {
    
    menu();
   
    rl.prompt();

    rl.on('line', async (line) => {

        
     

        const input = line.trim();


        if (input === '0') {
          
            console.log('Encerrando o Gerenciador de Contatos. Até mais!');
            rl.close();
            return;

        } else if (input === '1') {
           
            rl.question('Digite o nome do contato: ', (nome) => {
              
                rl.question('Digite o telefone do contato: ', (telefone) => {
                 
                    rl.question('Digite o email do contato: ', (email) => {
                      
                        const contato = new Contato(nome, telefone, email);
                      
                        gerenciador.adicionar(contato);
                   
                        contato.Dadoscontato();

                        rl.prompt();

                    });
                });
            });

            limparTela();

            menu();

        } else if (input === '2') {

            gerenciador.listar();

            rl.prompt();

            menu();

        } else if (input === '3') {

            rl.question('Digite o nome do contato que deseja remover: ', (nome) => {

                gerenciador.remover(nome);

                rl.prompt();

            });  

        }else if(input === '4') {
            console.log("Informe a opção de busca:");
            console.log("1. Buscar por nome");
            console.log("2. Buscar por telefone");
            console.log("3. Buscar por email");


            const tipoBusca = await obterEntrada('Escolha uma opção: ');
            let termoBusca = '';

            if (tipoBusca.trim() === '1') {

                termoBusca = await obterEntrada('Digite o nome para buscar: ');

                gerenciador.buscarPorNome(termoBusca);

                menu();

            } else if (tipoBusca.trim() === '2') {

                termoBusca = await obterEntrada('Digite o telefone para buscar: ');

                gerenciador.buscarPorTelefone(termoBusca);

                menu();

            } else if (tipoBusca.trim() === '3') {

                termoBusca = await obterEntrada('Digite o email para buscar: ');

                gerenciador.buscarPorEmail(termoBusca);

                menu();

            } else {

                console.log('Opção de busca inválida. Tente novamente.');

                rl.prompt();

                return;
            }
         
        }
        else {
            console.log('Comando inválido. Tente novamente.');
        }
        rl.prompt();
    });
};

main();