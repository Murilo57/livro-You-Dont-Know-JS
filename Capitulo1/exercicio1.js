/*
- Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária. Você irá também comprar acessórios para cada telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.
- Após calcular o valor da compra, adicione as taxas, depois imprima a quantidade total, devidamente formatada.
- Por fim, verifique o total gasto em sua conta bancária para saber se você pode comprar ou não.
- Você deve definir algumas constantes para a "taxa de imposto", "preço do telefone", "preço do acessório", e "limite de gastos", assim como variáveis para o seu "saldo bancário".
- Você deve definir funções para calcular a taxa e para formatar o preço com um "$" e arredondá-lo para duas casas decimais.
- Desafio Extra: Tente incorporar um input para esse programa, talvez com oprompt(..) que abordamos anteriormente em "Input". Você pode definir um prompt para o usuário para definir o saldo de sua conta bancária, por exemplo. Divirta-se e seja criativo!
*/

let MyBalance = 12000;
let Phone = 2200;
let Acessory = 15;
let Taxa = 0.10;

const prompt = require("prompt-sync")();

function ValorTotalCompra() {    
    let input = prompt("Vendedor: Você deseja comprar esse celular ? sim/nao: ");

    if (input == 'sim') {

        while (MyBalance > Phone) {
           MyBalance =  MyBalance - (Phone + Acessory)            
        //    MyBalance = MyBalance + (MyBalance * Taxa)
            console.log('$'+MyBalance.toFixed(2));
        }
    console.log('Vendedor: Parabéns pela aquisição!')        

    } else {
        console.log('Vendedor: Ok, se precisar de mais alguma coisa estou a disposição.')
    } 
}

ValorTotalCompra();