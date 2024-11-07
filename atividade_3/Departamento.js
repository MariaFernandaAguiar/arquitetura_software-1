// Departamento.js
const Component = require('./Component');

class Departamento extends Component {
    constructor(nome) {
        super(nome);
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    mostrar() {
        console.log(`Departamento: ${this.nome}`);
        this.funcionarios.forEach(func => func.mostrar());  // Chama o 'mostrar' para cada funcionário
    }

    calcularSalario() {
        return this.funcionarios.reduce((total, func) => total + func.calcularSalario(), 0);
    }
}

module.exports = Departamento;
