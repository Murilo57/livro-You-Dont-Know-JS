/*
Valores & Tipos

º string
º number
º boolean
º null e undefined
º object
º symbol

O JavaScript dispõe de um operador 'typeof' que pode examinar um valor e dizer qual tipo foi informado 
*/

var a;
typeof a;     //"undefined"

a = "hello world";
typeof a;     //"string"

a = "42";
typeof a;     //"number"

a = true;
typeof a;     // "boolean"

a = null;
typeof a;     //"object" --weird, bug

a = {b: "c"}
typeof a;     //"object"

//Objetos
var obj = {
    a: "Hello world",
    b: 42,
    c: true
}

obj.a;      //"Hello world"
obj.b;      //42
obj.c;      //true

obj["a"];   //"Hello world"
obj["b"];   //42
obj["c"];   //true


//Array - Objeto que armazena qualquer tipo de valores

var arr = [
    "hello world",
    42,
    true
];

arr[0]; //"hello world"
arr[1]; //42
arr[2]; //true

typeof arr; //"object"

