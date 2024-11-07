class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
        this.subdepartamentos = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    adicionarSubdepartamento(subdepartamento) {
        this.subdepartamentos.push(subdepartamento);
    }

    calcularSalarioTotal() {
        return this.funcionarios.reduce((total, func) => total + func.calcularSalario(), 0);
    }

    mostrar() {
        console.log(`Departamento: ${this.nome}`);
        console.log("Funcionários:");
        this.funcionarios.forEach(func => func.exibir());
        console.log("Subdepartamentos:");
        this.subdepartamentos.forEach(sub => sub.mostrar());
    }
}

module.exports = Departamento;
