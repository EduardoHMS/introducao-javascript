var readline = require('readline');

var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("Entre com um numero de 3 digitos: \n", function(answer){
    
    var c = parseInt(answer/100);
    var d = parseInt((answer%100)/10);
    var u = parseInt(answer%10);
    var udc = u*100 + d*10 + c;
    console.log(`Numero: ${answer}\nInvertido: ${udc}\n`);
    ler.close();
})