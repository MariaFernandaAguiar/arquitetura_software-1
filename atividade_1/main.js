const Aluno = require('./models/Alunos');
const Turma = require('./models/Turma');
const TurmaPresencial = require('./models/TurmaPresencial');


const aluno = new Aluno('Mariana', 'marianasantos','23456');

const turma = new Turma('ES65D', 9);

const turmaPresencial = new TurmaPresencial("Álgebra", 3.5, 79);


console.log(`O aluno  ${aluno.nome} foi aprovado em ${turma.codigo}? ${turma.aprovado()}`);