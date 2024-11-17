const Contato = require('./Contato');
const GerenciadorContatos = require('./GerenciadorContatos');
const readline = require('readline');

// Cria uma instância de GerenciadorContatos
const gerenciador = new GerenciadorContatos();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Gerenciador> ' 
});

console.log(`
    ==================================================
           Bem-vindo ao Gerenciador de Contatos!
    ==================================================
    Comandos disponíveis:
      1. adicionar - Adicionar um novo contato.
      2. listar    - Listar todos os contatos.
      3. remover   - Remover um contato pelo nome.
      4. buscar    - buscar contato.
      5. sair      - Sair do programa.
    ==================================================
    `);

rl.prompt();



/*
// Cria uma instância de Contato
const contato1 = new Contato('João', '123456785', 'joao@hotmail.com');
const contato2 = new Contato('Brena', '5698-74256', 'brena@outlook.com');

// Adiciona o contato ao gerenciador
gerenciador.adicionarContato(contato1);
gerenciador.adicionarContato(contato2);

// Listando todos os contatos
gerenciador.listarContatos();

gerenciador.removerContato('João');

gerenciador.listarContatos();

*/

rl.on('line', (line) => {
    const input = line.trim();

    if (input === '5') {
        console.log('Encerrando o Gerenciador de Contatos. Até mais!');
        rl.close();
    } else if (input === '1') {
        rl.question('Digite o nome do contato: ', (nome) => {
            rl.question('Digite o telefone do contato: ', (telefone) => {
                rl.question('Digite o email do contato: ', (email) => {
                    const contato = new Contato(nome, telefone, email);
                    gerenciador.adicionarContato(contato);
                    contato.Dadoscontato();

                    rl.prompt();
                });
            });
        });
    } else if (input === '2') {
        gerenciador.listarContatos();
        rl.prompt();
    } else if (input === '3') {
        rl.question('Digite o nome do contato que deseja remover: ', (nome) => {
            gerenciador.removerContato(nome);
            rl.prompt();
        });  

    }else if(input === '4') {
        console.log("Informe a opção de busca:");
        console.log("1. Buscar por nome");
        console.log("2. Buscar por telefone");
        console.log("3. Buscar por email");


        rl.question('Escolha uma opção de busca: ', (opcao) => {
            if(opcao === '1') {
                rl.question('Digite o nome do contato que deseja buscar: ', (nome) => {
                    gerenciador.BuscarContatos(nome);
                    rl.prompt();
                });
            }else if(opcao === '2') {
                rl.question('Digite o telefone do contato que deseja buscar: ', (telefone) => {
                    gerenciador.BuscarContatos(telefone);
                    rl.prompt();
                });
            }else if(opcao === '3') {
                rl.question('Digite o email do contato que deseja buscar: ', (email) => {
                    gerenciador.BuscarContatos(email);
                    rl.prompt();
                });
            }else {
                console.log('Comando inválido. Tente novamente.');
            }
        });

    }
    else {
        console.log('Comando inválido. Tente novamente.');
    }
    rl.prompt();
});