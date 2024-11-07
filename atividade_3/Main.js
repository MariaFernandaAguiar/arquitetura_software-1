const Departamento = require('./Departamento');
const FuncionarioIndividual = require('./FuncionarioIndividual');

const deptoPrincipal = new Departamento("Departamento Principal");

const subDepto1 = new Departamento("Subdepartamento 1");
const subDepto2 = new Departamento("Subdepartamento 2");

const funcionario1 = new FuncionarioIndividual("João", 2500);
const funcionario2 = new FuncionarioIndividual("Maria", 3000);
const funcionario3 = new FuncionarioIndividual("Pedro", 4000);

deptoPrincipal.adicionarFuncionario(funcionario1);
deptoPrincipal.adicionarSubdepartamento(subDepto1);

subDepto1.adicionarFuncionario(funcionario2);
subDepto1.adicionarSubdepartamento(subDepto2);

subDepto2.adicionarFuncionario(funcionario3);

deptoPrincipal.mostrar();

const salarioTotal = deptoPrincipal.calcularSalarioTotal();
console.log(`Salário total do departamento: R$ ${salarioTotal.toFixed(2)}`);
