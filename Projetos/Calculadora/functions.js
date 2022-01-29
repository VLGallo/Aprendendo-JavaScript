
let primeiroValor = "";
let sinal = "";
let segundoValor = "";

function digitar(numero) {
    var visor = document.querySelector(".visor");
    visor.innerHTML = visor.innerHTML + numero;
    console.log(visor);
}

function limpar(opcao) {
    var visor = document.querySelector(".visor");
    if (opcao == "C") {
        visor.innerHTML = "";
        primeiroValor = "";
        sinal = "";
    }
    else if (opcao == "seta") {
        var conteudo = visor.innerHTML.trim()
        visor.innerHTML = conteudo.substring(0, conteudo.length - 1);
    }

}

function operar(operador) {
    var visor = document.querySelector(".visor");
    var conteudo = visor.innerHTML.trim()
    sinal = operador;
    primeiroValor = conteudo;
    if (sinal == "sqrt") {
        visor.innerHTML = Math.sqrt(conteudo).toFixed(2);
    }
    else if (sinal == "sqr") {
        visor.innerHTML = Math.pow(conteudo, 2).toFixed(3);
    }
    else {
        visor.innerHTML = "";
    }
    console.log(primeiroValor, sinal);

}


function igualdade() {
    var visor = document.querySelector(".visor");
    var conteudo = visor.innerHTML.trim()
    if (sinal == "+") {
        var resultado = parseFloat(primeiroValor) + parseFloat(conteudo);
        visor.innerHTML = resultado;
    }
    else if (sinal == "-") {
        var resultado = parseFloat(primeiroValor) - parseFloat(conteudo);
        visor.innerHTML = resultado;
    }
    else if (sinal == "x") {
        var resultado = parseFloat(primeiroValor) * parseFloat(conteudo);
        visor.innerHTML = resultado;
    }
    else if (sinal == "÷") {
        if (conteudo == 0) {
            visor.innerHTML = "Não existe";
        } else {
            var resultado = parseFloat(primeiroValor) / parseFloat(conteudo);
            visor.innerHTML = resultado.toFixed(3);
        }
    }


}