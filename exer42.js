var readline = require('readline');

var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("Entre com um numero: \n", function(answer){
    var result = (answer*Math.PI)/180;
    console.log(`Seno: ${Math.sin(result)}\nCo-seno: ${Math.cos(result)}\nTangente: ${Math.tan(result)}\nCo-secante: ${(1)/Math.sin(result)}\nSecante: ${(1)/Math.cos(result)}\nCotangente: ${(1)/Math.tan(result)}\n`);
    ler.close();
})