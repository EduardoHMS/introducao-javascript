var readline = require('readline');

var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("Entre com um numero: \n", function(answer){
    var numero = parseFloat(answer);
    var parte = numero/3;
    console.log("A terça parte é: ", parte);
    ler.close();
})