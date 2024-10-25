
class Turma {
    constructor(codigo, nota){
        this.codigo = codigo;
        this.nota = nota; 

        this.aprovado = () => {
            return this.nota >= 6; 
        };
    }

 }
module.exports = Turma;