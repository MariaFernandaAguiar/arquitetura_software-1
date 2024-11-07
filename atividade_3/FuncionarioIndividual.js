// FuncionarioIndividual.js
const Component = require('./Component');

class FuncionarioIndividual extends Component {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }

    mostrar() {
        console.log(`Funcionário Individual: ${this.nome}, Salário: R$ ${this.salario}`);
    }

    calcularSalario() {
        return this.salario;
    }
}

module.exports = FuncionarioIndividual;
