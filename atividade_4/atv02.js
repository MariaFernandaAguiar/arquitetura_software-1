// Técnicas de refatoração aplicadas ao código abaixo:
// Método de extração 
// Extração de variável
// Remoção de Atribuições a Parâmetros

// Método de extração
function somarValores (valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    return soma
}

function calcularMedia(valores) {
    return somarValores(valores)/valores.length;
}

//Extração de variável e  Remoção de Atribuições a Parâmetros
function somarDiferencasQuadradas(valores, media) {
    return valores.reduce((cont, valor) => cont + (valor - media) ** 2, 0);
}

//Método de extração
function calcularDesvioPadrao(valores) {
    let media = calcularMedia(valores);
    let somaDiferencasQuadradas = somarDiferencasQuadradas(media);
    let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
    return desvioPadrao.toFixed(2);
}

let valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));