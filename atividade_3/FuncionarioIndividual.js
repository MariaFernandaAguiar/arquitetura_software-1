
const Funcionario = require('./Funcionario');

class FuncionarioIndividual extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario); 
    }

    exibir() {
        console.log(`Funcionário Individual: ${this.nome}, Salário: R$ ${this.salario}`);
    }

    calcularSalario() {
        return this.salario;
    }
}

module.exports = FuncionarioIndividual;
