let teste = 1;

//Loop comum
while (teste < 10) {
    console.log(teste);
    teste++;
}


teste = 0
//Loop inverso
do {
    console.log(teste);
    teste++
} while (teste < 10)


let i = 0
//Loop com uma condição onde se ela for executada o Loop é brecado
while (true) {
    if ((i <= 6) === false) {
        break;
    }    

    console.log(i);
    i++
}

//Loop com for
for (i = 0; i <= 7; i++) {
    console.log(i);
}