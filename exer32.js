var readline = require('readline');

var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("Entre com um numero: \n", function(answer){
    var resp = answer;
    console.log("Numero: ", resp);
    ler.close();
})