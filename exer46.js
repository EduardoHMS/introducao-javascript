var readline = require('readline');

var ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ler.question("DIGITE SALDO: \n", function(answer){
    
    console.log(`NOVO SALDO: ${answer*1.01}\n`);
    ler.close();
})