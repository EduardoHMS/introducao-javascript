var readline = require('readline');
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question('Entre com o dividendo: ', (num1) => {
        ler.question('Entre com divisor: ', (num2) =>{
            var resp1 = parseInt(num1,10);
            var resp2 = parseInt(num2,10);
            var quoc = resp1/resp2;
            var rest = resp1%resp2;
            console.log(`Dividendo: ${resp1}\nDivisor: ${resp2}\nQuociente: ${quoc}\nResto: ${rest}\n`);
            ler.close();
        })
    })