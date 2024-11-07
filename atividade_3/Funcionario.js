class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibir() {
        console.log(`Funcionário: ${this.nome}, Salário: R$ ${this.salario}`);
    }

    calcularSalario() {
        return this.salario;
    }
}

module.exports = Funcionario;
