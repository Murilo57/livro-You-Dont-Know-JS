//Exercicio para entendimento de escopo
//Parte 1
function one() {
    //A variavel 'a' só pode ser acessada no escopo da função 'one'
    let a = 1 

    console.log(a)
}

function two() {
    //A variavel 'b' só pode ser acessada no escopo da função 'two'
    let b = 2
    console.log(b)
}    

one(); //1
two(); //2

//Parte 2
function outer() {
    var a = 1

    function inner() {
        //Aqui podemos acessar tanto 'a' quanto 'b' aqui pois a função inner se encontra dentro do escopo da função outer
        var b = 2
        console.log(a + b)
    }

   console.log(a) //Porém aqui só podemos utilizar a variavel 'a' pois esta dentro do escopo da função outer e 'b' esta dentro do escopo da função inner 
}

outer();