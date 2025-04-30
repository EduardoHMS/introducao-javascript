var readline = require('readline');
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question('Entre com um numero: ', (num1) => {
        ler.question('Entre com outro numero: ', (num2) =>{
            var resp1 = parseInt(num1,10);
            var resp2 = parseInt(num2,10);
            var produto = resp1*resp2;
            console.log(`Produto: ${produto}`);
            ler.close();
        })
    })