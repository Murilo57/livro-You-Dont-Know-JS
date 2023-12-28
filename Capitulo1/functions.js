//Exercicios básicos sobre funções
//Parte 1 Funções simples para exibir o input no console
function printAmount(amt) {
    console.log(amt.toFixed(2))
}

function formatAmount(amt) {
    console.log(`$${amt.toFixed(2)}`)
}

const prompt = require("prompt-sync")();

let input = prompt('Digite um valor: ')

printAmount(Number(input));
formatAmount(Number(input));

//Parte 2 Função de calculo de juros
let Taxa = 0.05;

function calculoJuros(inputt) {
    let ValorComTaxa = Number(inputt) + (Number(inputt) * Taxa)
    console.log(`Valor com juros: ${ValorComTaxa.toFixed(2)}`)
}

calculoJuros(input)

