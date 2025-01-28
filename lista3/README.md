# Lista 3 (Arquitetura Baseada em Microsserviço)

Você deve projetar uma simulação de arquitetura de microsserviços para um sistema de gerenciamento de pedidos. Embora a comunicação entre serviços em um ambiente real seja feita por APIs, nesta atividade, você deve simular a interação entre os serviços localmente, utilizando métodos e objetos.

Requisitos:
Descrição do sistema:
O sistema de gerenciamento de pedidos deve ser composto por pelo menos 4 microsserviços, cada um representando uma responsabilidade específica:

Serviço de Autenticação: Gerencia o login dos usuários(OK) e autentica os acessos ao sistema.(OK)
Serviço de Catálogo de Produtos: Gerencia os dados dos produtos, como nome, preço e estoque. (OK)
Serviço de Pedidos: Gerencia a criação de pedidos, associando usuários aos itens comprados e calculando o total da compra.
Serviço de Pagamentos: Processa os pagamentos de pedidos e altera o estado do pedido para "pago" ou "pendente".
Estrutura do projeto:

Crie uma classe separada para cada microsserviço, com métodos que simulem suas funções principais.
Os microsserviços devem se comunicar entre si utilizando instâncias e chamadas de métodos (simulando mensagens).
Regras de implementação:

Cada microsserviço deve conter apenas as funções relacionadas à sua responsabilidade (exemplo: o Serviço de Catálogo não pode alterar dados de pedidos).
Simule a comunicação entre os microsserviços utilizando objetos ou mensagens simples, sem criar APIs ou utilizar rede.
Exemplo de fluxo:

Um usuário faz login pelo Serviço de Autenticação.
Após autenticado, o usuário visualiza o catálogo de produtos através do Serviço de Catálogo de Produtos.
O usuário seleciona itens e os adiciona ao carrinho, criando um pedido no Serviço de Pedidos.
O pedido é enviado para o Serviço de Pagamentos, que processa o pagamento e atualiza o status.
Controle de Fluxo:

Adicione um mecanismo de simulação de falhas. Por exemplo, o pagamento pode falhar por saldo insuficiente ou o estoque de um produto pode não estar disponível.
Crie logs (mensagens no console) que descrevam cada etapa do processo e as interações entre os serviços.
Entrega:

Código bem documentado (comentários e organização do código).
Um diagrama simples (em formato png) explicando como os microsserviços interagem no sistema.
O projeto pode ser feito individual ou em grupos de até três alunos (deve-se identificar o grupo na documentação do projeto). Todos os membros do grupo devem publicar via Moodle individualmente.  