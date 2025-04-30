var readline = require('readline');
var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question('Entre com o primeiro numero: ', (n1) => {
        ler.question('Entre com o segundo numero: ', (n2) =>{
            ler.question('Entre com o terceiro numero: ', (n3)=>{
                ler.question('Entre com o quarto numero: ', (n4)=>{
                    var pond = (n1*1 + n2*2 + n3*3 + n4*4)/10;
                    console.log(`Media ponderada: ${pond}`);
                    ler.close();
                })
            }) 
        })
    })
