// Component.js
class Component {
    constructor(nome) {
        this.nome = nome;  // A classe base só tem o nome como atributo
    }

    mostrar() {
        console.log("Método 'mostrar()' deve ser implementado.");
    }

    calcularSalario() {
        console.log("Método 'calcularSalario()' deve ser implementado.");
    }
}

module.exports = Component;
