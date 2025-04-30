var readline = require('readline');
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerNum(){
    ler.question('Entre com um numero: ', (num1) => {
        ler.question('Entre com outro numero: ', (num2) =>{
            var resp1 = parseInt(num1,10);
            var resp2 = parseInt(num2,10);
            console.log(`Numero 1: ${resp1} \nNumero 2: ${resp2}\n`);
            ler.close();
        })
    })
}

lerNum();