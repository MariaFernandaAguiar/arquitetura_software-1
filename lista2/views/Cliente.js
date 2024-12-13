class Cliente{
    constructor(nome, email, cpf){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }
    validar(){
        if(this.nome.length < 3){
            return "Nome deve ter no mínimo 3 caracteres";
        }
        if(this.email.indexOf("@") == -1){
            return "Email inválido";
        }
        if(this.cpf.length != 11){
            return "CPF deve ter 11 dígitos";
        }
        return "Cliente válido";
    }
}