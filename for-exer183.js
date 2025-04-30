var readline = require('readline');

var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

for(var i=0;i<=10;i++){
    ler.question("Entre com um numero: \n", function(answer){
        var numero = parseInt(answer);
        var parte = Math.pow(numero,2);
        console.log("Quadrado: ", parte);
        ler.close();
    })
}