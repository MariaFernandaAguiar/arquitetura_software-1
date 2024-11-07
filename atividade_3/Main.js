// main.js
const FuncionarioIndividual = require('./FuncionarioIndividual');
const Departamento = require('./Departamento');

const departamentoTI = new Departamento('Tecnologia da Informação');
const departamentoRH = new Departamento('Recursos Humanos');

const func1 = new FuncionarioIndividual('João', 3000);
const func2 = new FuncionarioIndividual('Maria', 3500);
const func3 = new FuncionarioIndividual('Carlos', 2500);

departamentoTI.adicionarFuncionario(func1);
departamentoTI.adicionarFuncionario(func2);
departamentoRH.adicionarFuncionario(func3);

departamentoTI.mostrar();  
departamentoRH.mostrar();  

console.log(`Salário total do Departamento de TI: R$ ${departamentoTI.calcularSalario()}`);
console.log(`Salário total do Departamento de RH: R$ ${departamentoRH.calcularSalario()}`);
